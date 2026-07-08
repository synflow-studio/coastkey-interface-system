import type { ReactNode } from "react"

type ProductCardTone = "default" | "featured" | "compact"

type ProductCardContractProps = {
  title: string
  subtitle?: string
  metaLabel?: string
  tone?: ProductCardTone
  mediaSlot?: ReactNode
  badgeSlot?: ReactNode
  actionSlot?: ReactNode
  onOpen?: () => void
}

export function ProductCardContract({
  title,
  subtitle,
  metaLabel,
  tone = "default",
  mediaSlot,
  badgeSlot,
  actionSlot,
  onOpen,
}: ProductCardContractProps) {
  return (
    <article className="ck-product-card" data-tone={tone}>
      {mediaSlot ? <div className="ck-product-card__media">{mediaSlot}</div> : null}
      <div className="ck-product-card__content">
        <div className="ck-product-card__header">
          <div>
            {metaLabel ? (
              <p className="ck-product-card__meta">{metaLabel}</p>
            ) : null}
            <h3 className="ck-product-card__title">{title}</h3>
            {subtitle ? (
              <p className="ck-product-card__subtitle">{subtitle}</p>
            ) : null}
          </div>
          {badgeSlot}
        </div>
        <div className="ck-product-card__actions">
          {actionSlot}
          {onOpen ? (
            <button type="button" onClick={onOpen}>
              Open
            </button>
          ) : null}
        </div>
      </div>
    </article>
  )
}
