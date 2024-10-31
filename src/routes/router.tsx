import { createBrowserRouter } from 'react-router-dom'
import { Home } from '../components/pages/home/Home'
import { Cart } from '../components/pages/cart/Cart'
import { Product } from '../components/pages/product/Product'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/cart',
		element: <Cart />,
	},
	{
		path: '/product',
		element: <Product />,
	},
])
