import axios from 'axios'
import { IProductsResponse } from '../types/product.interface'

axios.defaults.baseURL = 'https://dummyjson.com'

export const ProductService = {
	getProducts: async () => {
		const response = await axios.get<IProductsResponse>('/products', {
      params: {
        limit: 5
      }
    })    
    
		return response.data
	},
}