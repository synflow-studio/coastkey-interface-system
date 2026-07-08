type SourceVendorObject = {
  id: string
  displayName: string
  category: "beach-club" | "experience" | "coast-pass"
  moderationState: "approved" | "pending" | "restricted"
  offerCount: number
}

export type VendorObjectViewModel = {
  id: string
  title: string
  eyebrow: string
  statusTone: "success" | "warning" | "danger"
  summary: string
}

export function createVendorObjectViewModel(
  source: SourceVendorObject,
): VendorObjectViewModel {
  return {
    id: source.id,
    title: source.displayName,
    eyebrow: getCategoryLabel(source.category),
    statusTone: getModerationTone(source.moderationState),
    summary:
      source.offerCount === 1
        ? "1 offer configured"
        : `${source.offerCount} offers configured`,
  }
}

function getCategoryLabel(category: SourceVendorObject["category"]) {
  const labels: Record<SourceVendorObject["category"], string> = {
    "beach-club": "Beach club",
    experience: "Experience",
    "coast-pass": "Coast Pass",
  }

  return labels[category]
}

function getModerationTone(
  state: SourceVendorObject["moderationState"],
): VendorObjectViewModel["statusTone"] {
  if (state === "approved") return "success"
  if (state === "pending") return "warning"
  return "danger"
}
