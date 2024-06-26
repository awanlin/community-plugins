/*
 * Copyright 2021 The Backstage Authors
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

import { GoCdClientApi } from './api/gocdApi.client';
import { GoCdApi } from './api/gocdApi';
import {
  discoveryApiRef,
  createApiRef,
  createApiFactory,
  createPlugin,
  fetchApiRef,
} from '@backstage/core-plugin-api';

export const gocdApiRef = createApiRef<GoCdApi>({
  id: 'plugin.gocd.service',
});

/**
 * Plugin definition.
 *
 * @public
 */
export const gocdPlugin = createPlugin({
  id: 'gocd',
  apis: [
    createApiFactory({
      api: gocdApiRef,
      deps: { discoveryApi: discoveryApiRef, fetchApi: fetchApiRef },
      factory: ({ discoveryApi, fetchApi }) => {
        return new GoCdClientApi(discoveryApi, fetchApi);
      },
    }),
  ],
});
