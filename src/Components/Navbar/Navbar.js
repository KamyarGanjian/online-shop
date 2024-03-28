import React, { useContext } from 'react';
import { FiShoppingBag } from "react-icons/fi";
import "./Navbar.css";
import productsContext from '../../Context/ProductsContext';

export default function Navbar() {

    const contextData = useContext(productsContext)

    return (
        <nav className='navbar navbar-expand-sm py-3 d-flex'>
            <div className='container'>
                <a href='#' className='navbar-brand'>
                    <img src='/images/logo.png' className='logo' />Online Shop
                </a>

                <ul className='navbar-nav me-auto ms-3'>
                    <li className='nav-item'>
                        <a href='#' className='nav-link'>
                            Home
                        </a>
                    </li>
                </ul>

                <div className='bag-box'>
                    <a href='#' className='bag'>
                        <FiShoppingBag className='icon text-white' onClick={() => contextData.setIsShowCart(true)} />
                        <span className='bag-products-counter'>0</span>
                    </a>
                </div>

            </div>
        </nav>
    )
}