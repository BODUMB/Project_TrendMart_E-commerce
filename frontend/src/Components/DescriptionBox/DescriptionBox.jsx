import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>An e-commerce platform is an online marketplace that facilitates the buying and selling of products. It provides a digital space where consumers can browse a wide range of goods, make purchases, and have items delivered directly to their doorstep. These platforms often feature user-friendly interfaces, secure payment options, and various customer service tools to enhance the shopping experience</p>
            <p>E-commerce websites typically display products or services in an organized and visually appealing manner, allowing customers to easily browse through various categories. These websites often include detailed product descriptions, high-quality images, pricing information, and customer reviews to help shoppers make informed decisions</p>
        </div>
    </div>
  )
}

export default DescriptionBox