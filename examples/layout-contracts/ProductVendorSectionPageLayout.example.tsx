import type { ReactNode } from "react"

type ProductVendorSectionPageLayoutProps = {
  sectionLabel: string
  leftRailSlot: ReactNode
  mainPanelSlot: ReactNode
  rightRailSlot?: ReactNode
}

/**
 * Public-safe example.
 *
 * The layout owns page grammar: rails, main panel, responsive frame, and
 * content slots. Runtime state and data projection live outside this
 * component.
 */
export function ProductVendorSectionPageLayout({
  sectionLabel,
  leftRailSlot,
  mainPanelSlot,
  rightRailSlot,
}: ProductVendorSectionPageLayoutProps) {
  return (
    <section
      aria-label={sectionLabel}
      className="ck-layout ck-layout--vendor-section"
    >
      <aside className="ck-layout__left-rail">{leftRailSlot}</aside>
      <main className="ck-layout__main-panel">{mainPanelSlot}</main>
      {rightRailSlot ? (
        <aside className="ck-layout__right-rail">{rightRailSlot}</aside>
      ) : null}
    </section>
  )
}
