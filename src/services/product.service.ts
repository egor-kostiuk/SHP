import axios from 'axios'
import { IProduct, IProductsResponse } from '../types/product.interface'

axios.defaults.baseURL = 'https://dummyjson.com/products'

export const ProductService = {
	getProducts: async () => {
		const response = await axios.get<IProductsResponse>('/', {
			params: {
				limit: 5,
			},
		})

		return response.data
	},

	getProductById: async (id: string) => {
		const response = await axios.get<IProduct>(`/${id}`)
		return response.data
	},
}