import type { ReactNode } from "react"

type VendorObject = {
  id: string
  name: string
  status: "approved" | "draft" | "needs-review"
}

type ProductVendorSectionPageLayoutProps = {
  sectionLabel: string
  leftRailSlot: ReactNode
  mainPanelSlot: ReactNode
  rightRailSlot?: ReactNode
}

declare function ProductVendorSectionPageLayout(
  props: ProductVendorSectionPageLayoutProps,
): JSX.Element

declare function VendorObjectRail(props: {
  objects: VendorObject[]
  selectedObjectId: string
  onSelectObject: (id: string) => void
}): JSX.Element

declare function VendorOfferPanel(props: {
  object: VendorObject
  onOpenOffer: (offerId: string) => void
}): JSX.Element

declare function VendorHelpPanel(props: {
  bodySlot: ReactNode
  actionSlot: ReactNode
}): JSX.Element

export function RuntimeSlotsAssemblyExample({
  objects,
  selectedObjectId,
  onSelectObject,
  onOpenOffer,
}: {
  objects: VendorObject[]
  selectedObjectId: string
  onSelectObject: (id: string) => void
  onOpenOffer: (offerId: string) => void
}) {
  const selectedObject =
    objects.find((object) => object.id === selectedObjectId) ?? objects[0]

  return (
    <ProductVendorSectionPageLayout
      sectionLabel="Places and experiences"
      leftRailSlot={
        <VendorObjectRail
          objects={objects}
          selectedObjectId={selectedObject.id}
          onSelectObject={onSelectObject}
        />
      }
      mainPanelSlot={
        <VendorOfferPanel object={selectedObject} onOpenOffer={onOpenOffer} />
      }
      rightRailSlot={
        <VendorHelpPanel
          bodySlot={<p>Use approved objects before publishing offers.</p>}
          actionSlot={<button type="button">Review checklist</button>}
        />
      }
    />
  )
}
