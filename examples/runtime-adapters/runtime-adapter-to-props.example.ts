type SourceOffer = {
  id: string
  title: string
  priceLabel: string
  availability: "available" | "limited" | "sold-out"
}

type RuntimeContext = {
  canBook: boolean
  favoriteIds: Set<string>
  openOffer: (offerId: string) => void
  toggleFavorite: (offerId: string) => void
}

export type ProductOfferCardProps = {
  title: string
  priceLabel: string
  statusLabel: string
  isFavorite: boolean
  isActionDisabled: boolean
  onOpen: () => void
  onToggleFavorite: () => void
}

export function mapOfferToProductCardProps(
  offer: SourceOffer,
  runtime: RuntimeContext,
): ProductOfferCardProps {
  return {
    title: offer.title,
    priceLabel: offer.priceLabel,
    statusLabel: getStatusLabel(offer.availability),
    isFavorite: runtime.favoriteIds.has(offer.id),
    isActionDisabled: !runtime.canBook || offer.availability === "sold-out",
    onOpen: () => runtime.openOffer(offer.id),
    onToggleFavorite: () => runtime.toggleFavorite(offer.id),
  }
}

function getStatusLabel(availability: SourceOffer["availability"]) {
  switch (availability) {
    case "available":
      return "Available"
    case "limited":
      return "Limited availability"
    case "sold-out":
      return "Sold out"
  }
}
