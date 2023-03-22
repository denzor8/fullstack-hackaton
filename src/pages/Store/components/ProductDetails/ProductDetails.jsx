import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContextProvider";
import Header from '../../components/Header/Header';
import './ProductDetails.scss'
import Basket from '../../components/Basket/Basket';
import { useCart } from "../../contexts/CartContextProvider";
import unLiked from "../../img/unliked.svg"
import like from "../../img/liked.svg"
import { useLike } from '../../contexts/CustomContext';
import Navbar from '../../../../components/Navbar/Navbar'
const ProductDetails = () => {
	const { id } = useParams();
	const { getProductDetails, productDetails } = useProducts();
	const { cartOpened, addProductToCart } = useCart()
	const { checkProductInLike, addProductToLike } = useLike()

	const [isAdded, setIsAdded] = useState(false)
	const [isLiked, setIsLiked] = useState(false)
	const [isItemInCart, setIsItemInCart] = useState(false)

	const clickToBtn = () => {
		setIsItemInCart()
	}

	const handleClickAddToCart = () => {
		setIsAdded(!isAdded)
		addProductToCart(productDetails)
		setIsItemInCart(!isItemInCart)
	}
	const handleClickAddToCartLike = () => {
		setIsLiked(!isLiked)
		addProductToLike(productDetails)
	}


	useEffect(() => {
		getProductDetails(id);
	}, []);
	return (
		<>
			<Navbar />
			{cartOpened && <Basket />}
			<div className='details__baseContent'>
				<Header />
				<div className="wrapper clear">
					{productDetails ? (
						<>
							<div className='details__content'>
								<div className='details__card'>
									<div className="details__content-containter">
										<div className='d-flex justify-between'>
											<h3 className="details__content-title"> {productDetails.name}</h3>
											<b className="">
												Category: {productDetails.type}
											</b>
										</div>
										<div className="details__content-img">
											<img
												src={productDetails.picture}
												alt=""
												className=""
												width='200'
											/>
										</div>
										<div className="details__content-desc">
											<h4>Description:</h4>
											{productDetails.description}
										</div>
									</div>
								</div>

								<div className='details__button'>
									<div className='container'>
										<div className='details__favorite-btn'>
											<div>
												<p className="details__basket-title">{productDetails.price}$</p>
											</div>
											<div className='details__basket'>
												<div className='details__ctn'>
													<div className="details__favorite">
														<img
															onClick={() => handleClickAddToCartLike()}
															className='plus'
															width={38}
															height={38}
															src={checkProductInLike(productDetails.id) ? like : unLiked}
															alt="Plus" />
													</div>
												</div>
											</div>
										</div>

										<div>
											<button
												onClick={() => {
													isItemInCart ? handleClickAddToCart(productDetails) : handleClickAddToCart(productDetails)
												}}
												className='btn-add'
											>
												{isItemInCart ? 'Удалить из корзины' : 'Добавить в корзину'}
											</button>
										</div>
									</div>
								</div>
							</div>
						</>
					) : (
						<h3>Loading...</h3>
					)}
				</div>
			</div>
		</>
	)
}

export default ProductDetails
