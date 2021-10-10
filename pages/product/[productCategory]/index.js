import React from 'react'
import  {useRouter}  from 'next/router'
import Card from '../../../components/Card';
import styles from './../../../styles/Product.module.css'

const ids = [1,2,3,4,5,6]

const ProductList = () => {
    const router = useRouter();
    const {productCategory} = router.query;
    return (
        <div className="container d-flex flex-column justify-content-center align-items-center pt-3">
            <h2>{`${productCategory}`.toUpperCase()}</h2>
            <div className={styles.productsContainer}>
                {ids.map((id)=>{
                    return(
                    <Card key={id} image={`/assets/webp/${id}.webp`} name="Jamdani Saree Hand Stitched" price={`৳${200}`}></Card>
                    )
                })}
            </div>
        </div>
    )
}

export default ProductList
