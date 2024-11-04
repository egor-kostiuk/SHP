import { FC, useState } from 'react'
import cn from 'clsx'

import styles from './Gallery.module.scss'

export const Gallery: FC<{ images: string[] }> = ({ images }) => {
	const [currentIndex, setCurrentIndex] = useState(0)

	return (
		<div className={styles.gallery}>
			<img
				src={images[currentIndex]}
				alt={'as'}
				className={cn(styles.image, styles.main)}
			/>

			<div className={styles.list}>
				{images.map((image, index) => (
					<button
						onClick={() => setCurrentIndex(index)}
						className={cn(styles.item, {
							[styles.active]: index === currentIndex,
						})}
					>
						<img src={image} alt={'asd'} className={styles.image} />
					</button>
				))}
			</div>
		</div>
	)
}
