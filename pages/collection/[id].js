/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import Link from "next/link";
import Layout from "../../components/Layout";
import Meta from "../../components/Meta";
import SpanText from "../../components/SpanText";
import { Link as Anchor } from "react-scroll";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
gsap.core.globals("ScrollTrigger", ScrollTrigger);

function Collection({ collection }) {
	const collageRef = useRef(null);
	const lineRef = useRef(null);

	const TRANSITION_VALUE = 0.1;

	useEffect(() => {
		{
			setTimeout(() => {
				const tl = gsap.timeline({
					scrollTrigger: {
						id: "trigger8",
						trigger: ".collection__thumb img",
						start: "top",
						scrub: true,
					},
				});
				tl.fromTo(
					".collection__thumb img",
					{
						y: 0,
						x: 0,
						scale: 1,
						opacity: 1,
						skewX: 0,
						skewY: 0,
						transitionDuration: 0.05,
					},
					{
						y: 60,
						x: -10,
						scale: 0.95,
						opacity: 0.35,
						skewX: 0.105,
						skewY: 0.105,
						transitionDuration: 0.05,
					}
				);
			}, 500);
		}

		// Mount collection collage ScrollTrigger
		{
			ScrollTrigger.refresh();
			const TRANSITION_VALUE = 0.125;
			const tl = gsap.timeline({
				scrollTrigger: {
					id: "trigger3",
					trigger: collageRef.current,
					start: "top bottom-=100",
					scrub: true,
				},
			});
			tl.fromTo(
				collageRef.current,
				{
					opacity: 0,
					x: 40,
					y: 30,
					scale: 0.96,
					skewX: -0.25,
					skewY: -0.25,
					transitionDuration: TRANSITION_VALUE,
				},
				{
					opacity: 1,
					x: 0,
					y: 0,
					scale: 1,
					skewX: 0,
					skewY: 0,
					transitionDuration: TRANSITION_VALUE,
				}
			);
		}

		// Mount line ScrollTrigger
		{
			ScrollTrigger.refresh();
			const tl2 = gsap.timeline({
				scrollTrigger: {
					id: "trigger4",
					trigger: lineRef.current,
					start: "top bottom",
					end: "top top",
					scrub: true,
				},
			});
			tl2.fromTo(
				lineRef.current,
				{
					opacity: 0,
					x: -80,
					skewX: 2,
					skewY: 1,
					transitionDuration: TRANSITION_VALUE,
				},
				{
					opacity: 1,
					x: 0,
					skewX: 0,
					skewY: 0,
					transitionDuration: TRANSITION_VALUE,
				}
			);
		}
	}, []);

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
							<motion.div
								className="collection__thumb"
								layoutId={collection.coverImg}
								transition={{ duration: 1.1 }}
							>
								<img src={collection.coverImg} alt={collection.titleENG} />
							</motion.div>
							<div id="h1" className="collection__header-text">
								<div className="str1">
									<motion.h2
										className="fk-h1 logo"
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ duration: 1.5, delay: 0.45 }}
									>
										KA <span className="n">ZU</span>KU/
									</motion.h2>
									<motion.h1
										className="fk-h2"
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ duration: 1.5, delay: 0.65 }}
									>
										{collection.titleENG}
									</motion.h1>
								</div>
								<motion.div
									className="str2"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ duration: 1.5, delay: 0.8 }}
								>
									<h5>{collection.by}</h5>
								</motion.div>
								<motion.div
									className="str3"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ duration: 1.5, delay: 1 }}
								>
									<p>
										{collection.about}
										{collection.about}
									</p>

									<div className="time">{collection.release}</div>
								</motion.div>
							</div>
						</div>
					</div>
				</section>
				<section id="collection-collage" className="collage" ref={collageRef}>
					<img src={collection.collage} alt={collection.titleENG} />
				</section>
				<div className="line" ref={lineRef}>
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
