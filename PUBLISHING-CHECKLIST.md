# Public Update Checklist

The initial public publication is complete. Use this checklist whenever the
curated public snapshot, its public links, or its reviewed examples change.

## Publication Baseline

- [x] Public GitHub repository created and linked to the CoastKey case.
- [x] Public-facing boundaries documented in `NOTICE.md` and
      `docs/09-public-private-boundary.md`.
- [x] Visual media remains in the portfolio case unless separately reviewed.

## Before Every Public Update

- [ ] Review `README.md`, changed `docs/`, and changed `examples/` for a clear
      public audience.
- [ ] Confirm the change remains a curated explanation, not a copy of the
      working monorepo or full product source.
- [ ] Confirm no source data, generated runtime JSON, private media, prompts,
      skills, routers, backlog state, deployment configuration, secrets, local
      paths, or private Figma links are included.
- [ ] Confirm public links target the current portfolio case, Showcase, and
      Live Demo.
- [ ] Keep screenshots and embedded visual previews in the portfolio case
      unless a separate media review approves an asset for this repository.
- [ ] Run the public-safety checks and review the diff before publishing.

## After Every Public Update

- [ ] Refresh `PUBLIC-SAFETY-AUDIT.md` with the reviewed scope and link set.
- [ ] Verify the repository landing page and linked public surfaces.
- [ ] Add a concise commit message that describes the public-facing update.
