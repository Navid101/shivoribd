import React from 'react'
import Image from 'next/image'
import  Carousel  from 'react-bootstrap/Carousel'



const index = () => {
  return (
    <>
    {/* {Carousel Section starts} */}
    <div className="carouselContainer">
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
    </div>
    {/* {Carousel Section starts} */}

    {/* {Categories section starts} */}
    <section className="container d-flex flex-column justify-content-center align-items-center pt-5">
      <h2>Categories</h2>      
    </section>
    {/* {Categories section ends} */}

    </>
  )
}

export default index
