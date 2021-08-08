import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./homepage/homepage.component";
import ShoppingCart from "./shoppingcart/shoppingcart.component";
import Cart from "./carts/cart.component";
import cartInfo from "./cart";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
	const [cartItems, setCart] = useState(cartInfo);
	const [totalPrice, setPrice] = useState(0);
	const decrement = (id) => {
		// const { id } = e;
		let pos = cartItems.findIndex((ele) => ele.id === id);
		console.log(pos);
		let x = cartItems;
		console.log(x[pos]);
		let qu = parseInt(x[pos].quantity);
		if (qu > 1) {
			x[pos].quantity = qu - 1;
			setCart((cartItems) => {
				return [...x];
			});
		} else {
			let newCartItems = cartItems.filter((ele) => ele.id !== id);
			console.log(newCartItems);
			setCart((cartItems) => {
				return [...newCartItems];
			});
		}
	};
	const increment = async (id) => {
		// const { id } = e;
		let pos = cartItems.findIndex((ele) => ele.id === id);
		console.log(pos);
		let x = cartItems;
		console.log(x[pos]);
		let qu = parseInt(x[pos].quantity);
		x[pos].quantity = qu + 1;
		setCart((cartItems) => {
			return [...x];
		});
		// uod();
	};

	const addtocart = async (e) => {
		const { id, name, price } = e;
		const newItem = {
			key: uuidv4(),
			id: id,
			name: name,
			price: price,
			quantity: 2,
		};

		let flag = 1;
		let i = 0;
		for (i = 0; i < cartItems.length; i++) {
			if (cartItems[i].id === id) {
				flag = 0;
			} else {
				flag = 1;

				setPrice(totalPrice + parseInt(cartItems[i].price));
			}
		}
		if (flag === 1) {
			console.log(1);

			let x = cartItems;
			x.push(newItem);
			console.log(x);
			setCart(x);
		} else {
			console.log(2);
		}
	};
	console.log(cartItems);

	return (
		<Router>
			<div>
				<Switch>
					<Route exact path="/">
						<HomePage />
					</Route>
					<Route exact path="/shopping">
						<ShoppingCart addtocart={addtocart} />
					</Route>
					<Route exact path="/cart">
						<Cart
							cartItem={cartItems}
							totalprice={totalPrice}
							decrement={decrement}
							increment={increment}
						/>
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
