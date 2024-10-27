import { FC } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Layout } from '../../ui/layout/Layout'
import { ProductService } from '../../../services/product.service'
import { ProductItem } from '../../ui/product-item/ProductItem'

import styles from './Home.module.scss'

export const Home: FC = () => {
	const {
		data: products,
		error,
		isLoading,
	} = useQuery({
		queryKey: ['products'],
		queryFn: () => ProductService.getProducts(),
		select: ({ products }) => products,
	})

	return (
		<Layout title={'Shope the collection'}>
			{error && <div className="text-red-500 bg-black">Error</div>}
			{isLoading ? (
				<div className="text-green-400 bg-black">Loading...</div>
			) : products?.length ? (
				<div className={styles.wrapper}>
					{products.map(product => (
						<ProductItem key={product.id} product={product} />
					))}
				</div>
			) : (
				<div>Products not Found!</div>
			)}
		</Layout>
	)
}