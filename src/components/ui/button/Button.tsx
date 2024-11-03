import { FC, PropsWithChildren } from 'react'

import styles from './Button.module.scss'

interface IButton {}

export const Button: FC<PropsWithChildren<IButton>> = ({ children }) => {
	return <button className={styles.button}>{children}</button>
}
