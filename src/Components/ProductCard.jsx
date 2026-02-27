import React from 'react'

const ProductCard = ({ product }) => {

    return (
        <div>

            {/* Product IMage */}
            <div>
                <img src={product.image} alt={product.title} />
            </div>

            {/*Product Category Name  */}
            <p>{product.category}</p>

            {/* Product Title */}
            <p>{product.title}</p>

            {/* Product Price */}
            <p>{product.price}</p>

            {/* Add to cart Button */}
            <button>
                Add to cart
            </button>
        </div>
    )
}

export default ProductCard
