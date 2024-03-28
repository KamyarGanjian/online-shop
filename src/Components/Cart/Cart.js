import React, { useContext } from 'react';
import "./Cart.css";
import productsContext from '../../Context/ProductsContext';
import { BsBag } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

export default function Cart() {

    const contextData = useContext(productsContext)

    return (
        <aside className={`${contextData.isShowCart ? 'active' : ''} bag-sidebar`}>
            <h3 className='bag-title mb-4'>
                <span>
                    <img src='/images/logo.png' className='cartLogo logoSpan ms-2 mt-2' />
                </span>
                <span>
                    <AiOutlineClose
                        className='close-icon'
                        onClick={() => { contextData.setIsShowCart(false) }}
                    />
                </span>
            </h3>
            <div className='row bag-wrapper'>
                {
                    contextData.userCart.map((product) => {
                        return (
                            <div key={product.id} className='col-12 mt-2 c'>
                                <div className='bagCard py-3 px-3'>
                                    <div className='col-12 text-center w-100 titleContainer'>
                                        <p className='card-text cartTitle'>{product.title}</p>
                                        <img src={product.img} alt='img' className='cart-img-top w-75' />
                                    </div>
                                    <div className='card-body d-flex flex-column justify-content-center align-items-center'>

                                        <div className='priceContainer'>
                                            <a className='btn btn-danger buyBtn'>Buy</a>
                                            <p className='cartPrice'>{product.price}$</p>
                                            <p className='number'>count: {product.count}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </aside>
    )
}