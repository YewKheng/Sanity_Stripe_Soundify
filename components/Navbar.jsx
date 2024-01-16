import Link from "next/link";
import { RiShoppingCart2Line } from "react-icons/ri";
import { Cart } from "./Cart";
import { useStateContext } from "@/context/StateContext";

export const Navbar = () => {
	const { showCart, setShowCart, totalQuantities } = useStateContext();

	return (
		<div className="navbar-container">
			<p className="logo">
				<Link href="/">Soundify</Link>
			</p>

			<button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
				<RiShoppingCart2Line />
				<span className="cart-item-qty">{totalQuantities}</span>
			</button>

			{showCart && <Cart />}
		</div>
	);
};
