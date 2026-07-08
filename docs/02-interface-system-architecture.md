# 02 - Interface System Architecture

The CoastKey interface system is organized around explicit owner layers. The
same visual system supports consumer marketplace screens, vendor operations,
and reference/showcase surfaces without turning each page into its own design
system.

## Layer Model

| Layer | Role |
| --- | --- |
| `packages/ui` | Neutral shared baseline: product-agnostic mechanics, primitives, and low-level utilities. |
| `packages/coastkey-product` | Product UI package: Product UI Kit, Product Components, Product Component Blocks, accepted Product Layouts / Product Page Layouts, tokens, and public product APIs. |
| `packages/coastkey-demo-runtime` | Private non-UI runtime support: source-backed runtime helpers, taxonomy/view-model helpers, session helpers, media maps, and adapter inputs. |
| `apps/coastkey` | Public Live Demo runtime: screen routing, runtime assembly, URL/session behavior, callbacks, and demo flows. |
| `apps/coastkey-showcase` | Component/reference showcase: Product Overview, reference surfaces, inspection routes, and registry-style metadata. |
| `apps/portfolio` | Portfolio surface: case narrative and links to related surfaces. |

These names describe the original project structure at a high level. This
public repository does not include the private monorepo or its full source.

## Product-System Layers

The product interface is split by responsibility:

- Product UI Kit: product primitives, controls, badges, fields, overlays,
  feedback, small navigation, state utilities, and token-backed mechanics.
- Product Components: smaller reusable product units such as cards, rows,
  selectors, widgets, booking modules, account modules, and operational units.
- Product Component Blocks: larger reusable sections assembled from Product UI
  Kit and Product Components.
- Product Page Layouts: repeated page grammar, rails, slots, responsive
  structure, block order, content width, and screen-family placement.
- Runtime adapters / view-models: data projection, route state, session state,
  permissions/gating, callbacks, media, taxonomy, favorites, and booking state.
- Reference surfaces: inspection routes and metadata for source-backed review.

Product Components and Product Component Blocks are two granularities of the
same Product Components layer. They are not unrelated architecture layers.

## Why The Split Matters

Without this split, a screen file can quickly become responsible for layout,
cards, data projection, routing, callbacks, visual states, and validation at the
same time. CoastKey avoids that by routing each decision to an owner layer.

Reusable visible units belong in the product package. Runtime apps assemble
those units and pass prepared props. Reference surfaces inspect the same APIs
instead of creating a second implementation.
