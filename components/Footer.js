import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import styles from "./../styles/Layout.module.css"

const Footer = () => {
    return (
        <section className={styles.footer}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 text-center text-lg-start my-2 align-self-center">
                        <Link href="/refund"><a style={{color:"white"}}>Refund and Return Policy</a></Link>
                    </div>
                    
                    <div className="col-md-6 text-center text-lg-end my-2">
                            <a target="_blank" rel="noopener noreferrer" className={styles.icon} href="https://www.facebook.com/shivorisaree">
                                <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" className={styles.icon} href="https://www.instagram.com/shivori/">
                                <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                            </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer
