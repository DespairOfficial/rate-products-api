export class ProductModel {
    _id: string
    image: string
    title: string
    price: number
    oldPrice: number
    credit: number
    calculatingRating: number
    description: string
    advantages: string
    disadvantages: string
    categories: string[]
    tags: string
    characterictics: {
        [key: string]: string
    }
}
