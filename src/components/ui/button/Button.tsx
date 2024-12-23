import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'

import styles from './Button.module.scss'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: FC<PropsWithChildren<IButton>> = ({
	children,
	...rest
}) => {
	return (
		<button className={styles.button} {...rest}>
			{children}
		</button>
	)
}
