"use client"
import styles from "./index.module.css"
import clsx from "clsx"

type Props = {
	className?: string
}

const Loader = ({ className }: Props) => {
	return (
		<span className={clsx(styles.loader, className)} />
	)
}

export { Loader }