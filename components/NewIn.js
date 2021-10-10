import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from "./../styles/Components.module.css"

const NewIn = ({image,text}) => {

    return (
        <Link href={`/product/${text.toLowerCase()}`}>
        <div className={styles.overlayContainer}>
            <Image src={image} height={400} width={560}></Image>
            <h3 className={styles.overlay}>{text}</h3>
        </div>
        </Link>
    )
}

export default NewIn
