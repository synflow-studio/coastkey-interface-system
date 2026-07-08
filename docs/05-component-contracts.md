# 05 - Component Contracts

A component contract is more than visual appearance. It defines ownership,
public API, slots, variants, token mapping, runtime boundary, reference
coverage, and validation expectations.

## Product UI Kit

The Product UI Kit owns primitives and small/medium interaction units:

- buttons and action controls;
- badges and status indicators;
- fields, selects, date/range controls, and search controls;
- overlays and feedback wrappers;
- small navigation and data-display utilities;
- state utilities such as empty/loading/error/skeleton surfaces.

## Product Components

Product Components are smaller product-specific units above the UI Kit:

- product cards;
- offer cards;
- account modules;
- booking widgets;
- data rows;
- selectors;
- advisory panels;
- operational controls.

## Product Component Blocks

Product Component Blocks are larger reusable sections:

- recommendation rails;
- search/catalog blocks;
- detail support sections;
- hero/media sections;
- vendor workspace blocks;
- reservations and calendar blocks.

Product Components and Product Component Blocks are two granularities of the
same Product Components layer.

## Contract Parts

Useful public contract examples:

- card family contract: stable props, media slots, badge slots, favorite
  callback, density variants;
- action/icon contract: `iconSlot` instead of raw icon ownership in runtime;
- advice panel contract: `bodySlot` and `actionSlot` for flexible guidance;
- activity panel contract: `bodySlot` for runtime-provided row content;
- divider contract: a small example of token-backed ownership.

## Public API And Facades

Public APIs should remain stable when owner files are split internally. A
facade/export path can be a valid boundary when it points to real owner files
and preserves public imports.

## Token-Backed Styling

Components should use product tokens and semantic CSS variables. Raw visual
values are not accepted product-system material unless they are documented as
named primitives or intentional component variables.

See [component examples](../examples/component-contracts/README.md).
