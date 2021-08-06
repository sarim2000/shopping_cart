import "./body-styles.css";

const BookComponent = ({ props, addtocart }) => {
	return (
		// <Paper style={{ backgroundColor: "#26456e" }} elevation={5}>
		<div className="bookcard">
			<div className="image1">
				<img src={props.img} className="image" alt={props.name} />
			</div>
			<div className="details">
				<div className="name">
					<h1>{props.name}</h1>
				</div>
				<div className="desc">
					<p>{props.desc}</p>
				</div>
				<div className="price">
					<p>Rs {props.price}</p>
				</div>

				<button className="addtocart" onClick={() => addtocart(props)}>
					Add to Cart
				</button>
			</div>
		</div>
		// </Paper>
	);
};

export default BookComponent;
