## API Report File for "@backstage-community/plugin-mend-backend"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
import { AuthService } from '@backstage/backend-plugin-api';
import { BackendFeatureCompat } from '@backstage/backend-plugin-api';
import { ConditionalPolicyDecision } from '@backstage/plugin-permission-common';
import { Conditions } from '@backstage/plugin-permission-node';
import { Config } from '@backstage/config';
import { DiscoveryService } from '@backstage/backend-plugin-api';
import express from 'express';
import { HttpAuthService } from '@backstage/backend-plugin-api';
import { LoggerService } from '@backstage/backend-plugin-api';
import { PermissionCondition } from '@backstage/plugin-permission-common';
import { PermissionCriteria } from '@backstage/plugin-permission-common';
import { PermissionRule } from '@backstage/plugin-permission-node';
import { PermissionsService } from '@backstage/backend-plugin-api';
import { ResourcePermission } from '@backstage/plugin-permission-common';

// Warning: (ae-forgotten-export) The symbol "RESOURCE_TYPE" needs to be exported by the entry point index.d.ts
// Warning: (ae-missing-release-tag) "createMendProjectConditionalDecision" is part of the package's API, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export const createMendProjectConditionalDecision: (
  permission: ResourcePermission<RESOURCE_TYPE>,
  conditions: PermissionCriteria<PermissionCondition<RESOURCE_TYPE>>,
) => ConditionalPolicyDecision;

// Warning: (ae-missing-release-tag) "createRouter" is part of the package's API, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export function createRouter(options: RouterOptions): Promise<express.Router>;

// Warning: (ae-missing-release-tag) "mendConditions" is part of the package's API, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export const mendConditions: Conditions<{
  filter: PermissionRule<
    {
      permission: {
        type: string;
        name: string;
        attributes: {
          action?: 'update' | 'read' | 'delete' | 'create' | undefined;
        };
        resourceType: RESOURCE_TYPE;
      };
      resourceRef: string;
    },
    FilterProps,
    RESOURCE_TYPE,
    {
      ids: string[];
      exclude?: boolean | undefined;
    }
  >;
}>;

// @public
const mendPlugin: BackendFeatureCompat;
export default mendPlugin;

// Warning: (ae-missing-release-tag) "mendReadPermission" is part of the package's API, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export const mendReadPermission: ResourcePermission<RESOURCE_TYPE>;

// Warning: (ae-missing-release-tag) "RouterOptions" is part of the package's API, but it is missing a release tag (@alpha, @beta, @public, or @internal)
//
// @public (undocumented)
export type RouterOptions = {
  logger: LoggerService;
  config: Config;
  discovery: DiscoveryService;
  auth: AuthService;
  httpAuth: HttpAuthService;
  permissions: PermissionsService;
};

// Warnings were encountered during analysis:
//
// src/permission/conditions.d.ts:5:22 - (ae-undocumented) Missing documentation for "mendConditions".
// src/permission/conditions.d.ts:6:5 - (ae-forgotten-export) The symbol "FilterProps" needs to be exported by the entry point index.d.ts
// src/permission/conditions.d.ts:21:22 - (ae-undocumented) Missing documentation for "createMendProjectConditionalDecision".
// src/permission/permissions.d.ts:4:22 - (ae-undocumented) Missing documentation for "mendReadPermission".
// src/service/router.d.ts:4:1 - (ae-undocumented) Missing documentation for "RouterOptions".
// src/service/router.d.ts:12:1 - (ae-undocumented) Missing documentation for "createRouter".

// (No @packageDocumentation comment for this package)
```
