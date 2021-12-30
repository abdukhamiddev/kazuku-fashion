import axios from "axios";

export default function Home({ collections }) {
	console.log(collections);
	return <div></div>;
}
export const getStaticProps = async (ctx) => {
	const res = await axios.get(
		`${process.env.API_URL}/api/v.1.0/get-collections`
	);
	const collections = await res.data;

	return {
		props: {
			collections,
		},
	};
};
