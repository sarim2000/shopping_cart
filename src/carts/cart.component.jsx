import "./cart.style.css";
import { Container } from "@material-ui/core";
import { Link } from "react-router-dom";

const Cart = ({ cartItem, totalprice, decrement, increment }) => {
	let cartTotal = cartItem
		.map((itemData) => itemData.price * itemData.quantity)
		.reduce((a, b) => a + b, 0);

	return (
		<div className="maincartarea">
			<Container maxWidth="md">
				<div className="checkOut">Checkout</div>

				<div className="containingitem">
					<ol>
						<div className="list">
							{cartItem.map((ele) => {
								return (
									<div key={ele.key}>
										<li className="priceincart">
											<div className="infonameandqu">
												<h1>{ele.name}</h1>
												<div className="addorminus">
													<button onClick={() => decrement(ele.id)}>➖</button>
													<h1>{ele.quantity}</h1>
													<button onClick={() => increment(ele.id)}>➕</button>
												</div>
											</div>
										</li>
										<div className="priceincart">
											<h2>{ele.price}</h2>
										</div>
									</div>
								);
							})}
						</div>
					</ol>
					<div className="totalname">Total Price</div>
					<div className="total">
						<h1 className="totalcost">Rs {cartTotal}</h1>
					</div>
					<div className="returning">
						<Link to="/shopping">
							<button className="btn">Return to Shopping</button>
						</Link>
						<Link to="/shopping_cart">
							<button
								className="btn"
								onClick={() =>
									cartTotal === 0
										? alert("Please buy a book")
										: alert("Thank you")
								}
							>
								Pay
							</button>
						</Link>
					</div>
					{/* <div className="containingitem">
				<ol>
					{cartItem.map((books) => {
						<li className="list"></li>;
					})}
				</ol>
			</div> */}
				</div>
			</Container>
		</div>
	);
};

export default Cart;
