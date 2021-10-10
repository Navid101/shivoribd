import React from 'react'
import Image from 'next/dist/client/image'


const Card = ({image, name, price}) => {
    return (
        <div style={{paddingBottom:"3rem"}}>
            <Image src={image} height="356px" width="285px"/>
            <h6 >{name}</h6>
            <h6 >{price}</h6>
            <button style={{backgroundColor:"rgba(0,89,76,.5)", border:"none", padding:".4rem"}}>Add To Cart</button>
        </div>
    )
}

export default Card
