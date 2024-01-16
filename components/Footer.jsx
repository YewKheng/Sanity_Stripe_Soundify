import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

export const Footer = () => {
	return (
		<div className="footer-container">
			<p> &copy; {new Date().getFullYear()} Soundify All rights reserved.</p>
			<p className="icons">
				<AiFillInstagram />
				<AiOutlineTwitter />
			</p>
		</div>
	);
};
