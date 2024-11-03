import { FC } from 'react'
import { Layout } from '../../ui/layout/Layout'
import { useQuery } from '@tanstack/react-query'
import { ProductService } from '../../../services/product.service'
import { useParams } from 'react-router-dom'

export const Product: FC = () => {
	const params = useParams()

	const {
		data: product,
		error,
		isLoading,
	} = useQuery({
		queryKey: ['product', params.id],
		queryFn: () => ProductService.getProductById(params.id || ''),
	})

	return (
		<Layout>
			{isLoading && <div>Loading...</div>}

			{<div>{product?.title}</div>}
		</Layout>
	)
}
