import { useState } from 'react';
import ProductsList from './ProductsList';
import './products.css';
import { AiOutlineShoppingCart, AiFillCloseCircle } from 'react-icons/ai';

const Products = () => {
    const [showModals, setShowModals] = useState('');

    const shopModal = () => {
        return showModals === "" ? setShowModals('open') : setShowModals('');
    };

    return (<>
        <section id="products">
            <h5>What products we have on shop</h5>
            <h2><AiOutlineShoppingCart /> Products</h2>

            <div className="container products__container">
                <h3>Avaible Products for buy</h3>
                <div className="products__content">
                    {ProductsList.map((product) => (
                    <article className='products_details'>
                        <h4>{product.title}</h4>
                        <img src={product.image} alt="" />
                        <small className='text-light'>{product.desc}</small>

                        <div className='products__btn'>
                            <button className='btn' onClick={shopModal}><AiOutlineShoppingCart /></button>
                            <a href='#contact' className='btn'>Contact Us</a>
                        </div>
                    </article>
                    ))}
                </div>
            </div>
        </section>
        <div className={showModals === "" ? "products__modal" : "products__modal open"}>
            <h4>How to buy an product?</h4>
            <button className='products__modal_btn btn btn_close' onClick={shopModal}><AiFillCloseCircle /></button>
            <div className="products__modal__container">
                <small className='text-light'>
                    For buy any product need going to shop page or contact page for more details.<br />
                    All products Avaible on shop are sended with PostNord.<br />
                    Payment was accepted only Swish or delivery refound.
                </small>
            </div>
        </div>
    </>)
}

export default Products;