import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import  Carousel  from 'react-bootstrap/Carousel'
import styles from "./../styles/Layout.module.css"



const index = () => {
  return (
    <>
    {/* {Carousel Section starts} */}
      <Carousel fade={true} indicators={false}>
        <Carousel.Item interval={1200}>
          <Image src="/assets/slide_1.webp" height={1080} width={1920}></Image>
        </Carousel.Item>
        <Carousel.Item interval={1200}>
          <Image src="/assets/slide_2.webp" height={1080} width={1920}></Image>
        </Carousel.Item>
        <Carousel.Item interval={1200}>
          <Image src="/assets/slide_3.webp" height={1080} width={1920}></Image>
        </Carousel.Item>
      </Carousel>
    {/* {Carousel Section starts} */}

    {/* {Categories section starts} */}
    <section className="container d-flex flex-column justify-content-center align-items-center pt-5">
      <h2>Categories</h2>   
      <div className={styles.categoriesContainer}>
        <Link href="/saree"><Image className={styles.image} src="/assets/saree.webp" height={250} width={250}></Image></Link>
        <Link href="/kurta"><Image className={styles.image} src="/assets/kurti.webp" height={250} width={250}></Image></Link>
        <Link href="/salwar"><Image className={styles.image} src="/assets/salwar.webp" height={250} width={250}></Image></Link>
        <Link href="/pant"><Image className={styles.image} src="/assets/pant.webp" height={250} width={250}></Image></Link>
      </div>   
    </section>
    {/* {Categories section ends} */}

    </>
  )
}

export default index
