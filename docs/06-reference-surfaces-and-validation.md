# 06 - Reference Surfaces And Validation

Reference surfaces are inspection routes for the interface system. They show
component APIs, layout contracts, state coverage, truth mode, source files, and
runtime consumers.

## Showcase / Reference Model

The original project uses a repo-owned Showcase/reference app concept for
inspection. Storybook is a common format for this type of component-system
review, but the important idea is the inspection layer itself: source-backed
routes that make contracts visible and reviewable.

Reference metadata can include:

- route name;
- source files;
- runtime consumers;
- truth mode;
- contract boundary;
- validation coverage;
- Figma/review mode.

## Truth Modes

Useful public-safe vocabulary:

- `source-backed`: renders tracked package/source contracts.
- `runtime-adapter-backed`: depends on route/session/taxonomy/media/callback
  wiring.
- `fixture-only`: useful for inspection, not product runtime proof.
- `staging-only`: candidate or transitional review lane.
- `reference-only`: inspection surface, not runtime surface.
- `diagnostic`: calibration or guardrail surface.

## Responsive Evidence Rule

Reference surfaces should show a real responsive branch rather than shrinking a
desktop screen into a thumbnail. Desktop, tablet, and mobile evidence are
separate review states. When the available inspection space cannot support the
desktop state, the surface should show a clear desktop-space notice and retain
the appropriate compact evidence below it.

This keeps reference review honest: the documentation shell is not counted as
product viewport space, and reviewers inspect the same responsive behavior the
product is intended to use.

## Validation Categories

Validation is selected by touched layer. Public-safe categories include:

- product boundary guard;
- runtime public-copy audit;
- icon-slot guard;
- style supply-chain guard;
- typecheck;
- tests;
- build;
- diff/whitespace check;
- secret scan;
- structural TypeScript audits when ownership or import direction needs
  evidence.

Raw scanner findings, private paths, environment details, and internal logs are
not public material.

See [validation examples](../examples/validation/README.md).
