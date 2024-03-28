import React, { useContext } from 'react';
import productsContext from '../../Context/ProductsContext';
import './Toast.css';

export default function Toast() {

    const contextData = useContext(productsContext)

    return (
        <div className='toast-container position-fixed bottom-0 me-4 end-0 mb-4'>
            <div className={`${contextData.isShowToast ? 'show' : ''} toast align-items-center text-white bg-primary`}>
                <div className='toastRandomClass d-flex justify-content-center align-items-center'>
                    <button type='button' className='btn-close btn-close-white ms-3' onClick={() => {
                        contextData.setIsShowToast(false)
                    }}></button>
                    <div className='toast-body'>been added to the cart successfully!</div>
                </div>
            </div>
        </div>
    )
}