import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Home } from './components/pages/home/Home.tsx'

import './index.css'

const queryClient = new QueryClient()

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home></Home>,
	},
	{
		path: '/cart',
		// element: <Cart />,
	},
	{
		path: '/product',
		// element: <Product />
	},
])

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	</StrictMode>,
)
