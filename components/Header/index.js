import { useRouter } from "next/router";
import Logo from "../Logo";
import BurgerMenu from "./BurgerMenu";
import CustomLink from "./Link";

const Header = () => {
	const _router = useRouter();
	function isRoute(route) {
		if ((_router.pathname = route)) {
			return "active";
		} else {
			return "disactive";
		}
	}
	return (
		<>
			<header>
				<div>
					<Logo />
					<BurgerMenu />
					<nav>
						<ul>
							<CustomLink
								text="Team"
								href="/team"
								className={isRoute("/team")}
							/>
							<CustomLink
								text="About"
								href="/about"
								className={isRoute("/about")}
							/>
							<CustomLink
								text="Collections"
								href="/"
								className={isRoute("/")}
							/>
						</ul>
					</nav>
				</div>
			</header>
		</>
	);
};
export default Header;
