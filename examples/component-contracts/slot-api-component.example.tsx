import type { ReactNode } from "react"

type ProductAdvicePanelProps = {
  title: string
  tone?: "neutral" | "info" | "warning"
  iconSlot?: ReactNode
  bodySlot: ReactNode
  actionSlot?: ReactNode
}

export function ProductAdvicePanel({
  title,
  tone = "neutral",
  iconSlot,
  bodySlot,
  actionSlot,
}: ProductAdvicePanelProps) {
  return (
    <section className="ck-advice-panel" data-tone={tone}>
      {iconSlot ? <div className="ck-advice-panel__icon">{iconSlot}</div> : null}
      <div className="ck-advice-panel__content">
        <h3 className="ck-advice-panel__title">{title}</h3>
        <div className="ck-advice-panel__body">{bodySlot}</div>
        {actionSlot ? (
          <div className="ck-advice-panel__actions">{actionSlot}</div>
        ) : null}
      </div>
    </section>
  )
}

/*
Token-backed styling idea:

.ck-advice-panel {
  border-radius: var(--ck-radius-panel);
  padding: var(--ck-space-4);
  background: var(--ck-surface-raised);
  color: var(--ck-text-primary);
}
*/
