import React from 'react'
import Image from 'next/image'
import styles from "./../styles/NewIn.module.css"

const NewIn = ({image,text}) => {
    return (
        <div className={styles.overlayContainer}>
            <Image src={image} height={400} width={560}></Image>
            <h3 className={styles.overlay}>{text}</h3>
        </div>
    )
}

export default NewIn
