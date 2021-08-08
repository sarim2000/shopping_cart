import "./navbar.style.css";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="navbar">
			<ul className="navcontents">
				<a href="/shopping_cart">
					<li className="home">Home</li>
				</a>
				<section className="others">
					<Link to="/shopping">
						<li className="lib">Library</li>
					</Link>
					<Link to="/cart">
						<li className>Cart</li>
					</Link>
				</section>
			</ul>
		</nav>
	);
};
export default Navbar;
