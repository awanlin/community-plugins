## API Report File for "@backstage-community/plugin-adr"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
import { AnyApiFactory } from '@backstage/core-plugin-api';
import { AnyRouteRefParams } from '@backstage/frontend-plugin-api';
import { BackstagePlugin } from '@backstage/frontend-plugin-api';
import { ConfigurableExtensionDataRef } from '@backstage/frontend-plugin-api';
import { Entity } from '@backstage/catalog-model';
import { ExtensionDefinition } from '@backstage/frontend-plugin-api';
import { default as React_2 } from 'react';
import { RouteRef } from '@backstage/frontend-plugin-api';
import { TranslationRef } from '@backstage/core-plugin-api/alpha';

// @alpha (undocumented)
export const adrApiExtension: ExtensionDefinition<
  {},
  {},
  ConfigurableExtensionDataRef<AnyApiFactory, 'core.api.factory', {}>,
  {},
  {
    kind: 'api';
    namespace: undefined;
    name: 'adr-api';
  }
>;

// @alpha (undocumented)
export const adrEntityContentExtension: ExtensionDefinition<
  {
    path: string | undefined;
    title: string | undefined;
    filter: string | undefined;
  },
  {
    filter?: string | undefined;
    title?: string | undefined;
    path?: string | undefined;
  },
  | ConfigurableExtensionDataRef<React_2.JSX.Element, 'core.reactElement', {}>
  | ConfigurableExtensionDataRef<string, 'core.routing.path', {}>
  | ConfigurableExtensionDataRef<
      RouteRef<AnyRouteRefParams>,
      'core.routing.ref',
      {
        optional: true;
      }
    >
  | ConfigurableExtensionDataRef<string, 'catalog.entity-content-title', {}>
  | ConfigurableExtensionDataRef<
      (entity: Entity) => boolean,
      'catalog.entity-filter-function',
      {
        optional: true;
      }
    >
  | ConfigurableExtensionDataRef<
      string,
      'catalog.entity-filter-expression',
      {
        optional: true;
      }
    >,
  {},
  {
    kind: 'entity-content';
    namespace: undefined;
    name: 'entity';
  }
>;

// @alpha (undocumented)
export const adrSearchResultListItemExtension: ExtensionDefinition<
  {
    lineClamp: number;
    noTrack: boolean;
  },
  {
    lineClamp: number;
    noTrack: boolean;
  },
  never,
  never,
  {
    kind?: string | undefined;
    namespace?: string | undefined;
    name?: string | undefined;
  }
>;

// @alpha (undocumented)
export const adrTranslationRef: TranslationRef<
  'adr',
  {
    readonly contentHeaderTitle: 'Architecture Decision Records';
    readonly failedToFetch: 'Failed to fetch ADRs';
    readonly notFound: 'No ADRs found';
  }
>;

// @alpha (undocumented)
const _default: BackstagePlugin<
  {},
  {},
  {
    'entity-content:adr/entity': ExtensionDefinition<
      {
        path: string | undefined;
        title: string | undefined;
        filter: string | undefined;
      },
      {
        filter?: string | undefined;
        title?: string | undefined;
        path?: string | undefined;
      },
      | ConfigurableExtensionDataRef<
          React_2.JSX.Element,
          'core.reactElement',
          {}
        >
      | ConfigurableExtensionDataRef<string, 'core.routing.path', {}>
      | ConfigurableExtensionDataRef<
          RouteRef<AnyRouteRefParams>,
          'core.routing.ref',
          {
            optional: true;
          }
        >
      | ConfigurableExtensionDataRef<string, 'catalog.entity-content-title', {}>
      | ConfigurableExtensionDataRef<
          (entity: Entity) => boolean,
          'catalog.entity-filter-function',
          {
            optional: true;
          }
        >
      | ConfigurableExtensionDataRef<
          string,
          'catalog.entity-filter-expression',
          {
            optional: true;
          }
        >,
      {},
      {
        kind: 'entity-content';
        namespace: undefined;
        name: 'entity';
      }
    >;
    'api:adr/adr-api': ExtensionDefinition<
      {},
      {},
      ConfigurableExtensionDataRef<AnyApiFactory, 'core.api.factory', {}>,
      {},
      {
        kind: 'api';
        namespace: undefined;
        name: 'adr-api';
      }
    >;
  }
>;
export default _default;

// (No @packageDocumentation comment for this package)
```
