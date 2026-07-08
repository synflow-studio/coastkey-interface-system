type TruthMode =
  | "source-backed"
  | "runtime-adapter-backed"
  | "fixture-only"
  | "staging-only"
  | "reference-only"
  | "diagnostic"

type ContractBoundary =
  | "Product UI Kit"
  | "Product Components"
  | "Product Component Blocks"
  | "Product Page Layouts"
  | "Runtime Adapter"
  | "Shared Baseline"

export type ReferenceSurfaceMetadata = {
  route: string
  title: string
  truthMode: TruthMode
  contractBoundary: ContractBoundary
  sourceFiles: string[]
  runtimeConsumers: string[]
  validation: string[]
}

export const vendorLayoutReference: ReferenceSurfaceMetadata = {
  route: "product-vendor-section-layout-reference",
  title: "Vendor Section Layout",
  truthMode: "source-backed",
  contractBoundary: "Product Page Layouts",
  sourceFiles: ["product-package/b2b/vendor-section-layout.tsx"],
  runtimeConsumers: ["live-demo/vendor-workspace"],
  validation: ["typecheck", "reference coverage", "responsive review"],
}
