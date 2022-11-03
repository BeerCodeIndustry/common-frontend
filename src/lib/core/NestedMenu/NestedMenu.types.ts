export interface Nested {
  label?: string
  link?: string
  nested?: Nested[]
}

export interface NestedLinksType {
  nested?: Nested[]
}

export interface RenderNestedType {
  arrayNested: Nested[]
}
