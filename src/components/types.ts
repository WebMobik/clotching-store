export type ICollectionPreview = {
  title: string
  items: Array<ICollectionPreviewProps>
}

export type ICollectionPreviewProps = {
  id?: string
  name: string
  price: number
  imageUrl: string
}

export type product = {
  id: number
  title: string
  price: number
  count: number
  imageUrl: string
}
