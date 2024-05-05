import { useState,useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AiOutlineHeart } from "react-icons/ai"; 
import RelatedProduct from './RelatedProducts/RelatedProducts';
import
{
    FaFacebookF,
    FaTwitter,
    FaPinterest,
    FaInstagram,
    FaYoutube, 
    FaCartPlus,
} from 'react-icons/fa'
import "./SingleProduct.scss";
import useFetch from '../../hooks/useFetch';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../utils/context';
import Swal from 'sweetalert2';
const SingleProduct = () => {
    const [quantity, setQuantity]=useState(1);
    const {id} = useParams();
    const {data} = useFetch(`/api/products?populate=*&[filters][id]=${id}`);
    const {handlerAddToCart}=useContext(Context);
    const {handlerAddToWishlist}=useContext(Context);
    const increment = () => {
        setQuantity((prevState => prevState + 1));
    };
    const decrement=()=>
    {
        setQuantity(prevState=>
        {
            if(prevState===1) return 1;
            return prevState -1;
        });
    }
    if(!data) return;
    const product =data?.data?.[0].attributes;
    return (
        <div className="single-product-container">
            <div className="layout">
                <div className="single-product-page">
                    <div className="left">
                    <img
                            src={
                                process.env.REACT_APP_STRIPE_APP_DEV_URL+product.img.data[0].attributes.url
                            }
                        />
                    </div>
                    <div className="right">
                        <span className='name'>{product.title} </span>
                        <span className='price'>&#8377;{product.price}</span>
                        <span className='desc'> {product.desc} </span>
                        {/* <div className="wishlist">
                        <button  onClick={()=>
                            {
                                handlerAddToWishlist(data?.data?.[0],quantity);
                                setQuantity(1);
                            }}>
                                Wishlist <AiOutlineHeart size={20}/></button> 

                        </div> */}
                        <div className="cart-button">
                            <div className="quantity-button">
                                <span onClick={decrement}>-</span>
                                <span>{quantity}</span>
                                <span onClick={increment}>+</span>
                            </div>
                            <button className='Add-to-cart-button' onClick={()=>
                            {
                            handlerAddToCart(data?.data?.[0],quantity);
                            setQuantity(1);
                            const toast=Swal.mixin({
                                toast: true,
                                position: "top-end",
                                showConfirmButton: false,
                                timer: 2000,
                                timerProgressBar: true,
                                didOpen: (toast) => {
                                toast.onmouseleave = Swal.resumeTimer;
                                }
                            });
                        toast.fire({
                                icon: "success",
                                title: "Product added to cart successfully"
                            })
                            
                            }}>
                                <FaCartPlus size={20}/>
                                ADD TO CART
                            </button>
                        </div>

                        <span className="divider"/>
                        <div className="info-item">
                            <span className="text-bold">Category:{" "}
                            <span>{product.catogeries.data[0].attributes.title}</span>
                            </span>
                        <span className="text-bold">Share:
                            <span className="social-icons">
                                    <FaFacebookF size={16}/>
                                    <FaInstagram size={16}/>
                                    <FaTwitter size={16}/>
                                    <FaYoutube size={16}/>
                                    <FaPinterest size={16}/>
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
                <RelatedProduct 
                productId={id} 
                categoryId={product.catogeries.data[0].id} 
                />
            </div>
            <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
        
        </div>
    );
};

export default SingleProduct;
