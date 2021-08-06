import "./homepage.styles.css";
import Navbar from "../navigation/navigation.component";
import Box from "@material-ui/core/Box";
const HomePage = ({ cartitems }) => {
	return (
		<Box>
			<Navbar />
			<div className="main">
				<h1 className="title">Welcome to your midnight library!</h1>
			</div>
		</Box>
	);
};

export default HomePage;
