import BookComponent from "../body-component/body-component.component";
import { books } from "../books";
import Navbar from "../navigation/navigation.component";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import "./shoppingcart.styles.css";

const ShoppingCart = ({ addtocart }) => {
	return (
		<Box className="main-shop">
			<Navbar />
			<div className="shoparea">
				<Container className="maincontent">
					{books.map((book) => {
						let x = book.id;
						return <BookComponent key={x} props={book} addtocart={addtocart} />;
					})}
				</Container>
			</div>
		</Box>
	);
};

export default ShoppingCart;
