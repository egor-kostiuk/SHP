export interface IProductsResponse {
  products: IProduct[]
  limit: number 
  skip: number 
  total: number 
}

export interface IProduct {
  brand: string
  category: string
  description: string
  descountPernectage: number
  id: number 
  images: string[]
  price: number
  rating: number
  stock: number 
  thumbnail: string
  title: string
}