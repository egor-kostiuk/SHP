import { FC } from 'react'
import { IProduct } from '../../../types/product.interface'

import styles from './ProductItem.module.scss'
import { Link } from 'react-router-dom'

export const ProductItem: FC<{ product: IProduct }> = ({ product }) => {
	return (
		<div className={styles.item}>
			<Link to={`/product/${product.id}`}>
				<img src={product.thumbnail} alt={product.title} />
			</Link>
			<div className={styles.heading}>{product.title}</div>
			<div className={styles.price}>
				{new Intl.NumberFormat('en-Us', {
					style: 'currency',
					currency: 'USD',
				}).format(product.price)}
			</div>
		</div>
	)
}
