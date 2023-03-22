import React, { useEffect } from "react";
import { useLike } from "../../contexts/CustomContext";
import { useCart } from "../../contexts/CartContextProvider";
import { useNavigate } from "react-router-dom";
// mui 
import { Button, TextField, Typography, IconButton } from "@mui/material";
//icons
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Like() {
	const navigate = useNavigate();
	const { addProductToCart, checkProductInCart } = useCart();
	const { getLike, like, deleteProductFromLike } = useLike();
	useEffect(() => {
		getLike();
	}, []);

	function likeCleaner() {
		localStorage.removeItem("like");
		getLike();
	}

	return (
		<div className="overlay">
			<div className="drawer">
				<h2 className="d-flex justify-between mb-30">Избранное
					{/* <img
						onClick={() => navigate('/market')}
						className="cu-p"
						src="/img/btn-remove.svg"
						alt="Close" /> */}

					<IconButton
						onClick={() => navigate('/market')}
						color='primary'
						className="cu-p">
						<CloseIcon sx={{ color: "#000" }} />
					</IconButton>
				</h2>

				<div className="items">
					{like?.products.map((product) => (
						<div
							className="cartproduct d-flex align-center mb-20"
							key={product.item.id}
						>

							<div
								style={{ backgroundImage: `url(${product.item.picture})` }}
								className="cartProductImg">
								<img src={product.item.picture} alt="error:(" width="70" />
							</div>

							<div className="ml-20 flex priceDiv">
								{/* className="mb-5" */}
								<p >{product.item.name}</p>
								<div className='d-flex justify-between'>
									<b className=''>{product.item.price}$</b>
								</div>


							</div>
							<div>
								<div>
									<IconButton
										onClick={() => deleteProductFromLike(product.item.id)}
										color='warning'
										className="cu-p removeBtn">
										<DeleteOutlineIcon />
									</IconButton>
								</div>
								<div>
									<IconButton
										onClick={() => addProductToCart(product.item)}
										color="primary"
										className="cu-p">
										{
											checkProductInCart(product.item.id) ?
												<CheckIcon sx={{ color: 'green' }} />
												:
												<AddIcon />
										}
									</IconButton>
								</div>
							</div>
						</div>
					))}

				</div>

				<div className="cartTotalBlock">
					<ul>
						<li>
							<span>Итого:</span>
							<div></div>
							<b>{like?.totalPrice}</b>
						</li>
						<li>
							<span>Налог 5%:</span>
							<div></div>
							<b>$10</b>
						</li>
					</ul>
					<button
						onClick={likeCleaner}
						className="greenButton">
						Оформить заказ
						<IconButton color='primary' >
							<ArrowForwardIcon sx={{ color: '#fff' }} />
						</IconButton>
					</button>
				</div>
			</div>
		</div>
	);
}