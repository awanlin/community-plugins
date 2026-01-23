#!/usr/bin/env node
/*
 * Copyright 2026 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import yaml from 'js-yaml';
import fs from 'fs';
import { resolve } from 'path';
import * as url from 'url';
import * as codeowners from 'codeowners-utils';
import { listWorkspaces } from './list-workspaces.js';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const safeEntityName = packageName => {
  return packageName
    .replace(/^[^\w\s]|[^a-z0-9]$/g, '')
    .replace(/[^A-Za-z0-9_\-.]+/g, '-')
    .replace(
      /([a-z])([A-Z])/g,
      (_, a, b) => `${a}-${b.toLocaleLowerCase('en-US')}`,
    )
    .replace(/^(.)/, (_, a) => a.toLocaleLowerCase('en-US'));
};

async function main() {
  const rootPath = resolve(__dirname, '..');
  const workspacePath = resolve(rootPath, 'workspaces');

  // Get `CODEOWNERS` entries
  const codeownersPath = resolve(rootPath, '.github', 'CODEOWNERS');
  const codeOwnerEntries = await codeowners.loadOwners(codeownersPath);

  // Get workspaces
  const workspaces = await listWorkspaces();

  // Loop through workspaces
  for (const workspace of workspaces) {
    let owner = '';
    // Find the owner by looking up the workspace in the `CODEOWNERS` file
    const owners = codeOwnerEntries
      .filter(c => c.pattern === `/workspaces/${workspace}`)
      .map(o => o.owners)
      .flat();

    if (owners.length === 0) {
      owner = '@backstage/community-plugins-maintainers';
    } else if (
      owners.length === 1 &&
      owners[0] === '@backstage/community-plugins-maintainers'
    ) {
      owner = '@backstage/community-plugins-maintainers';
    } else if (owners.length > 1) {
      owner = owners[1];
    } else {
      console.log(workspace, owners);
    }

    const workspaceCatalogInfoPath = resolve(
      workspacePath,
      workspace,
      'catalog-info.yaml',
    );
    const currentPackageJsonPath = resolve(
      workspacePath,
      workspace,
      'package.json',
    );
    const packageJson = JSON.parse(fs.readFileSync(currentPackageJsonPath));
    // console.log(workspace, owner, packageJson.name);

    const entityName = safeEntityName(packageJson.name);

    const data = {
      apiVersion: 'backstage.io/v1alpha1',
      kind: 'Component',
      metadata: {
        name: entityName,
        title: packageJson.name,
        description: packageJson.description ?? undefined,
      },
      spec: {
        lifecycle: 'experimental',
        type: `backstage-workspace`,
        owner,
      },
    };

    fs.writeFileSync(workspaceCatalogInfoPath, yaml.dump(data));
  }
}

main(process.argv.slice(2)).catch(error => {
  console.error(error.stack || error);
  process.exit(1);
});
