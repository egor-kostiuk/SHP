import { FC } from 'react'
import { IProduct } from '../../../types/product.interface'

import styles from './ProductItem.module.scss'

export const ProductItem: FC<{ product: IProduct }> = ({ product }) => {
	return (
		<div className={styles.item}>
			<img src={product.thumbnail} alt={product.title} />
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
