import React, {useState, useEffect} from 'react'
import  {useRouter}  from 'next/router'
import Card from '../../../components/Card';
import Pagination from '../../../components/Pagination';
import styles from './../../../styles/Product.module.css'

const products = [1,2,3,4,5,6]

const ProductList = () => {
    const router = useRouter();
    const {productCategory} = router.query;
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 4;

    //Get Current Producsts
    const indexOFLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOFLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct,indexOFLastProduct);   

    //Change Page
    const paginate = (pageNumber)=> setCurrentPage(pageNumber)

    return (
        <div className="container d-flex flex-column justify-content-center align-items-center pt-3">
            <h2>{`${productCategory}`.toUpperCase()}</h2>
            <div className={styles.productsContainer}>
                {currentProducts.map((product)=>{
                    return(
                    <Card key={product} image={`/assets/webp/${product}.webp`} name="Jamdani Saree Hand Stitched" price={`৳${200}`}></Card>
                    )
                })}
            </div>
            <Pagination productsPerPage={productsPerPage} totalProducts={products.length} paginate={paginate}></Pagination>
        </div>
    )
}

export default ProductList
