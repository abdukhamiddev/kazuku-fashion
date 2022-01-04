/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import Link from "next/link";
import Layout from "../../components/Layout";
import Meta from "../../components/Meta";
import SpanText from "../../components/SpanText";
import { Link as Anchor } from "react-scroll";
function Collection({ collection }) {
	return (
		<>
			<Meta
				titleShort={`KAZUKU | ${collection.titleENG}`}
				titleLong={`KAZUKU | ${collection.titleENG} Collection`}
				description={`KAZUKU | ${collection.titleENG}. ${collection.about}`}
				keywords="KAZUKU, Women's Clothing Collections, Best women's clothing 2021-2022, Moda 2021, 2022"
			/>
			<Layout>
				<section className="collection" id="collection">
					<div className="collection__h">
						<div className="collection__name">
							<div className="collection__thumb">
								<img src={collection.coverImg} alt={collection.titleENG} />
							</div>
							<div id="h1" className="collection__header-text">
								<div className="str1">
									<h2 className="fk-h1 logo">
										KA <span className="n">ZU</span>KU/
									</h2>
									<h1 className="fk-h2">{collection.titleENG}</h1>
								</div>
								<div className="str2">
									<h5>{collection.by}</h5>
								</div>
								<div className="str3">
									<p>
										{collection.about}
										{collection.about}
									</p>

									<div className="time">{collection.release}</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section id="collection-collage" className="collage">
					<img src={collection.collage} alt={collection.titleENG} />
				</section>
				<div className="line">
					<div className="line-img"></div>
				</div>
				<section className="about" id="about">
					<h6>
						The New Collection <br /> / S - J 2022
					</h6>
					<h2 className="fk-h1">{collection.about}</h2>
				</section>

				<div className="anchors">
					<div>
						<Link href="/">
							<a>
								<SpanText text="Go to Collections" />
							</a>
						</Link>
						<Anchor to="collection" smooth={true} duration={2600}>
							<span className="two">
								<SpanText text="Go to top" />
							</span>
						</Anchor>
						<Link href="https://github.com/abdukhamiddev">
							<a className="two">
								<SpanText text="GitHub" />
							</a>
						</Link>
					</div>
					<div className="year">{new Date().getFullYear()}</div>
				</div>
			</Layout>
		</>
	);
}

export default Collection;

export const getStaticProps = async (ctx) => {
	try {
		const res = await axios.get(
			`${process.env.API_URL}/api/v.1.0/get-collections/${ctx.params.id}`
		);
		const collection = await res.data;
		return {
			props: {
				collection,
			},
		};
	} catch (error) {
		console.log(error);
	}
};

export const getStaticPaths = async (ctx) => {
	try {
		const res = await axios.get(
			`${process.env.API_URL}/api/v.1.0/get-collections`
		);

		const { collections } = await res.data;
		const paths = await collections.map(({ id }) => {
			return { params: { id: id } };
		});
		return {
			paths,
			fallback: false,
		};
	} catch (error) {
		console.log(error);
	}
};
