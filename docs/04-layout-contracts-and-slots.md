# 04 - Layout Contracts And Slots

The interface system is not built as a collection of 100+ one-off pages.
Repeated page structure is captured as Product Page Layouts.

## Product Page Layouts

Product Page Layouts own page-level grammar:

- structure;
- content width;
- rails;
- gaps;
- responsive behavior;
- placement;
- height contracts;
- repeated screen-family variants;
- named slots for flexible composition.

Runtime owns selected sections, data, callbacks, permissions, and route/session
behavior. Product components fill the slots.

## Slot-Based Composition

Common slot names include:

- `leftRailSlot`
- `mainPanelSlot`
- `rightRailSlot`
- `workspaceGridSlot`
- `bodySlot`
- `iconSlot`
- `actionSlot`

Slots keep layouts reusable while allowing runtime adapters to pass specific
content, controls, and callbacks.

## Examples

`ProductVendorSectionPageLayout` can provide a left rail, main panel, and
optional right rail for operational vendor sections such as reservations,
calendar, or places and experiences.

`ProductVendorWorkspaceLayout` can provide a profile rail, workspace grid, and
optional right rail without letting a screen file own the repeated workspace
frame.

`ProductVendorPlacesExperiencesPageLayout` can represent a listing-management
page with empty, gallery, and focused variants while the runtime owns selected
object state and callbacks.

## Contract Rule

If a card, badge, data, adapter, copy, or polish task appears to require page
placement changes, treat it as Product Page Layout work first. Layout
placement should not move as a side effect of unrelated component changes.

See [layout examples](../examples/layout-contracts/README.md).
