# 10 - Public Evidence Map

This map connects the public CoastKey case, Live Demo, Showcase, and the
simplified examples in this repository. It is a guided review path, not a
claim that this repository contains the full product source.

## Start With The Public Product

| Review goal | Public evidence | What to inspect |
| --- | --- | --- |
| Product context and visual story | [Portfolio case](https://zemgraphics.ru/cases/coastal-marketplace/) | Product scope, screenshots, embedded previews, and the public-safe framing. |
| Runtime behavior | [Live Demo: search and catalog](https://coastkey.zemgraphics.ru/?screen=search-catalog) | Search state, cards, filters, map/list context, and route-driven behavior. |
| Detail and booking flow | [Live Demo: coastal detail](https://coastkey.zemgraphics.ru/?screen=coast-detail&slug=barcelona) | Product Page Layout composition, detail sections, and the transition toward booking. |
| Operational product surface | [Live Demo: vendor workspace](https://coastkey.zemgraphics.ru/?screen=vendor-workspace) | A denser B2B consumer of the same component and layout system. |

## Inspect The Interface System

| System layer | Showcase route | Public explanation |
| --- | --- | --- |
| Product UI Kit | [Controls](https://showcase.zemgraphics.ru/registry/product-controls-preview/) | [Component contracts](05-component-contracts.md) |
| Product Components | [Card components](https://showcase.zemgraphics.ru/registry/product-cards-reference/) | [Card contract example](../examples/component-contracts/product-card-contract.example.tsx) |
| Product Component Blocks | [Carousel rail blocks](https://showcase.zemgraphics.ru/registry/product-carousel-rail-blocks-reference/) | [Architecture](02-interface-system-architecture.md) |
| Product Page Layouts | [Home page layouts](https://showcase.zemgraphics.ru/registry/product-home-page-layouts-reference/) | [Layout contracts and slots](04-layout-contracts-and-slots.md) |
| Runtime adapters | [Live Demo catalog](https://coastkey.zemgraphics.ru/?screen=search-catalog) | [Runtime adapter example](../examples/runtime-adapters/runtime-adapter-to-props.example.ts) |
| Reference and validation | [Showcase landing page](https://showcase.zemgraphics.ru/) | [Reference surfaces and validation](06-reference-surfaces-and-validation.md) |

## How To Read The Examples

The examples are deliberately small. They demonstrate three public review
questions:

1. Which layer owns the visual unit or repeated page grammar?
2. Which values arrive through runtime adapters instead of being imported by a
   reusable component?
3. Which reference and validation surface makes the contract reviewable?

For the public process pattern, see the [workflow examples](../examples/workflow/README.md).
For the boundary that keeps this repository safe to publish, see the
[Public / Private Boundary](09-public-private-boundary.md).
