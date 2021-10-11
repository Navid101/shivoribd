import React from 'react'
import styles from './../styles/Components.module.css'

const Pagination = ({productsPerPage,totalProducts, paginate}) => {
    const pageNumbers = [];
    for(let i = 1; i<=Math.ceil(totalProducts/productsPerPage);i++){
        pageNumbers.push(i)
    }
    return (
        <div>
            <ul className="pagination pb-2">
                {pageNumbers.map(number=>{
                    if(pageNumbers.length>1){
                        return (
                            <li key={number} className="page-item">
                                <button onClick={()=>paginate(number)} className={styles.paginationItem}>{number}</button>
                            </li>
                            )
                    }
                })}
            </ul>
        </div>
    )
}

export default Pagination
