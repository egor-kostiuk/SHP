import { FC } from 'react'
import { Layout } from '../../ui/layout/Layout'
import { useQuery } from '@tanstack/react-query'
import { ProductService } from '../../../services/product.service'
import { useParams } from 'react-router-dom'

import { Button } from '../../ui/button/Button'
import { Gallery } from './gallery/Gallery'

export const Product: FC = () => {
	const params = useParams()

	const {
		data: product,
		isLoading,
	} = useQuery({
		queryKey: ['product', params.id],
		queryFn: () => ProductService.getProductById(params.id || ''),
	})

	if (!product) {
		return (
			<Layout>
				<div>Product not found</div>
			</Layout>
		)
	}

	return (
		<Layout>
			{isLoading && <div>Loading...</div>}

			<Gallery images={product.images}/>

			<Button>Add to cart</Button>
		</Layout>
	)
}
