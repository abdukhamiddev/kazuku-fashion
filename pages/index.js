/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import { useRef, useState } from "react";
import Card from "../components/Card";
import Grid from "../components/Grid";
import Layout from "../components/Layout";
import Meta from "../components/Meta";
import Image from "next/image";

export default function Home({ collections }) {
	const mostPopularCollection = collections.find(
		({ mostPopular }) => mostPopular
	);
	const mostPopularRef = useRef();
	console.log(collections);
	return (
		<>
			<Meta
				titleShort="KAZUKU"
				titleLong="KAZUKU WOMEN CLOTHING Collections"
				description="Collections of women's clothing.Best women's clothing 2021-2022. KAZUKU live store "
				keywords="KAZUKU, Women  Clothing, Best woman clothing"
			/>
			<Layout>
				<section className="w-full h-[502px] flex flex-col items-center justify-evenly mt-[-45px]">
					<div className="w-[67px] h-[67px] bg-[url('/static/logo.jpg')] bg-center bg-cover"></div>
					<h2>
						<span>CREATIVE FASHION </span> <span>STREETWEAR DESIGN</span>
					</h2>
					<h1>
						<span className="word" dur="0.95">
							KAZUKU
						</span>
						<span className="italic">
							<span className="word" dur="0.65">
								and
							</span>
						</span>
						<br />
						<span className="word" dur="0.5">
							CONTEMPORARY
						</span>
						<span className="word" dur="0.45">
							APPEAL-
						</span>
						<br />
						<span className="italic">
							<span className="word" dur="0.3">
								for
							</span>
						</span>
						<span className="word" dur="0.25">
							EVERY
						</span>
						<span className="word" dur="0.35">
							WOMAN
						</span>
					</h1>
				</section>
				<div></div>
				<section ref={mostPopularRef}>
					<header>
						<div>Most Popular</div>

						<div>ホワイトベール</div>
					</header>
					<Grid>
						<Card
							key={mostPopularCollection.id}
							HREF={`/collection/${encodeURIComponent(
								mostPopularCollection.id
							)}`}
							SRC={mostPopularCollection.coverImg}
							ALT={`${mostPopularCollection.titleEng},by ${mostPopularCollection.by}`}
							engCL={mostPopularCollection.titleEng}
							jpCL={mostPopularCollection.jpCL}
							YEAR={mostPopularCollection.year}
						/>
						<div>
							<div>
								<div>
									<section>
										<h4>{mostPopularCollection.by}</h4>
										<p>{mostPopularCollection.smallInfo}</p>
										<p>
											Ut enim ad minim veniam, quis nostrud exercitation ullamco
											laboris nisi ut aliquip ex ea commodo consequat.
										</p>
									</section>
									<div>
										<Image
											src="/data/mostPopular/mostPopular.png"
											width={300}
											height={300}
											alt="girl"
										/>
									</div>
								</div>
							</div>
							<div className="space"></div>
						</div>
					</Grid>
				</section>
				<section>
					<header className="filter">
						<div>2021</div>
						<div>ホワイトベール</div>
					</header>
					<Grid>
						{collections
							.filter(({ mostPopular }) => !mostPopular)
							.filter(({ year }) => year === "2021")
							.map((collection) => {
								return (
									<Card
										key={collection.id}
										HREF={`/collection[id]`}
										AS={`/collection/${collection.id}`}
										SRC={collection.coverImg}
										ALT={`${collection.titleEng},by ${collection.by}`}
										engCL={collection.titleEng}
										jpCL={collection.jpCL}
										YEAR={collection.year}
									/>
								);
							})}
					</Grid>
				</section>
				<section>
					<header className="filter">
						<div>2022</div>
						<div>ホワイトベール</div>

						<Grid>
							{collections
								.filter(({ mostPopular }) => !mostPopular)
								.filter(({ year }) => year === "2022")
								.map((collection) => {
									return (
										<Card
											key={collection.id}
											HREF={`/collection[id]`}
											AS={`/collection/${collection.id}`}
											SRC={collection.coverImg}
											ALT={`${collection.titleEng},by ${collection.by}`}
											engCL={collection.titleEng}
											jpCL={collection.jpCL}
											YEAR={collection.year}
										/>
									);
								})}
						</Grid>
					</header>
				</section>
			</Layout>
		</>
	);
}
export const getStaticProps = async (ctx) => {
	const res = await axios.get(
		`${process.env.API_URL}/api/v.1.0/get-collections`
	);
	const { collections } = await res.data;

	return {
		props: {
			collections,
		},
	};
};
