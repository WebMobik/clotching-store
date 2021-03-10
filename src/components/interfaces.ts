export interface ICollectionPreview {
    title: string,
    items: Array<ICollectionPreviewProps>
}

export interface ICollectionPreviewProps {
    id?: string,
    name: string,
    price: number,
    imageUrl: string
}
