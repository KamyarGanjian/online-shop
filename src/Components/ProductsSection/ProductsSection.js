import React, { useContext, useId } from 'react';
import "./ProductsSection.css";
import productsContext from '../../Context/ProductsContext';

export default function ProductsSection() {
    const contextData = useContext(productsContext);

    const addToCart = product => {
        contextData.setIsShowToast(true)
        setTimeout(() => {
            contextData.setIsShowToast(false)
        }, 3000);
        let isInUserCart = contextData.userCart.some(bagProduct => bagProduct.title === product.title)
        if (!isInUserCart) {
            let newUserCartProduct = {
                id: contextData.userCart.length + 1,
                title: product.title,
                price: product.price,
                count: 1,
                img: product.img
            }
            contextData.setUserCart(prevProducts => [...prevProducts, newUserCartProduct])
        } else {
            let userCart = [...contextData.userCart]
            let newUserCart = userCart.map(bagProduct => {
                if (bagProduct.title === product.title) {
                    bagProduct.count += 1
                }
                return bagProduct
            })
            contextData.setUserCart(newUserCart);
        }
    }

    return (
        <>
            {contextData.allProducts.map((ProductSection) => {
                return (
                    <div key={ProductSection.id} className='bigContainer row justify-content-center mt-5'>
                        <h3 className='cardTitle text-center' data-text={ProductSection.title}>{ProductSection.title}</h3>

                        {ProductSection.infos.map((product) => (
                            <div key={product.id} className='cardContainer col-xl-3 col-lg-4 col-md-5 col-sm-10 mt-4'>
                                <div className='card py-2 px-3'>
                                    <div className='col-12 text-center'>
                                        <img src={product.img} alt='product image' className='card-img-top w-75 mt-3' />
                                    </div>
                                    <div className='card-body text-center'>
                                        <p className='card-text'>{product.title}</p>
                                        <p className='price'>{product.price}$</p>
                                        <br />
                                        <a
                                            href='javascript:void(0)'
                                            className='btn btn-danger'
                                            onClick={() => addToCart(product)}
                                        >
                                            Add To Cart
                                        </a>
                                        <a href='#' className='btn btn-outline-dark mt-3 text-capitalize'>More information</a>
                                        <p className='number'>{product.count} Left In Stock</p>
                                    </div>
                                </div>
                            </div>

                        ))}

                    </div>
                )
            })}
        </>
    )
}