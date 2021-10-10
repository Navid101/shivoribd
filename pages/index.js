import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import  Carousel  from 'react-bootstrap/Carousel'
import NewIn from '../components/NewIn'
import styles from "./../styles/Layout.module.css"



const index = () => {
  return (
    <>
    {/* {Carousel Section starts} */}
      <Carousel fade={true} indicators={false}>
        <Carousel.Item interval={1200}>
          <Image src="/assets/carousel/slide_1.webp" height={1080} width={1920}></Image>
        </Carousel.Item>
        <Carousel.Item interval={1200}>
          <Image src="/assets/carousel/slide_2.webp" height={1080} width={1920}></Image>
        </Carousel.Item>
        <Carousel.Item interval={1200}>
          <Image src="/assets/carousel/slide_3.webp" height={1080} width={1920}></Image>
        </Carousel.Item>
      </Carousel>
    {/* {Carousel Section starts} */}

    {/* {Categories section starts} */}
    <section className="container d-flex flex-column justify-content-center align-items-center pt-5">
      <h2>Categories</h2>   
      <div className={styles.gridContainer}>
        <Link href="product/saree">
          <div className={styles.imageContainer}>
            <Image className={styles.image} src="/assets/icons/saree.webp" height={250} width={250}></Image>
          </div>
        </Link>
        <Link href="product/kurti">
          <div className={styles.imageContainer}>
            <Image className={styles.image} src="/assets/icons/kurti.webp" height={250} width={250}></Image>
          </div>
        </Link>
        <Link href="product/pant">
          <div className={styles.imageContainer}>
            <Image className={styles.image} src="/assets/icons/pant.webp" height={250} width={250}></Image>
          </div>
        </Link>
        <Link href="product/salwar">
          <div className={styles.imageContainer}>
            <Image className={styles.image} src="/assets/icons/salwar.webp" height={250} width={250}></Image>
          </div>
        </Link>
      </div>
    </section>
    {/* {Categories section ends} */}

    {/* {New in section starts} */}
    <section className="container d-flex flex-column justify-content-center align-items-center pt-2">
      <h2>New In</h2>
      <div className={styles.gridContainer}>
        <NewIn image="/assets/new_in/saree1.webp" text="Saree"></NewIn>
        <NewIn image="/assets/new_in/saree2.webp" text="Pant"></NewIn>
        <NewIn image="/assets/new_in/saree3.webp" text="Kurti"></NewIn>
        <NewIn image="/assets/new_in/saree4.webp" text="Salwar"></NewIn>
      </div>
    </section>
    {/* {New in section Ends} */}

    </>
  )
}

export default index
