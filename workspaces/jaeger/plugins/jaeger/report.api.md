## API Report File for "@backstage-community/plugin-jaeger"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
/// <reference types="react" />

import { BackstagePlugin } from '@backstage/core-plugin-api';
import { Entity } from '@backstage/catalog-model';
import { JSX as JSX_2 } from 'react';
import { RouteRef } from '@backstage/core-plugin-api';

// @public (undocumented)
export const isJaegerAvailable: (entity: Entity) => boolean;

// @public (undocumented)
export const JaegerCard: () => JSX_2.Element;

// @public (undocumented)
export const jaegerPlugin: BackstagePlugin<
  {
    root: RouteRef<undefined>;
  },
  {},
  {}
>;

// (No @packageDocumentation comment for this package)
```