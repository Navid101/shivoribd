import React from 'react'
import Link from 'next/link'
import styles from "./../styles/Layout.module.css"

const Footer = () => {
    return (
        <section className={styles.footer}>
            <div>
                <Link href="/refund"><a style={{color:"white"}}>Refund and Return Policy</a></Link>
            </div>
        </section>
    )
}

export default Footer
