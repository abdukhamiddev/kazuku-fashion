/* eslint-disable @next/next/no-page-custom-font */
import Document, { Head, Html, Main, NextScript } from "next/document";
import TheMeta from "../components/TheMeta";

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<>
				<Html>
					<Head>
						<TheMeta />
						<link rel="preconnect" href="https://fonts.gstatic.com" />
						<link
							href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap"
							rel="stylesheet"
						/>
						<link
							href="https://fonts.googleapis.com/css2?family=Questrial&display=swap"
							rel="stylesheet"
						/>
						<link
							href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,wght@0,400;0,500;0,600;0,700;1,700&display=swap"
							rel="stylesheet"
						/>
					</Head>
					<body>
						<Main />
						<NextScript />
					</body>
				</Html>
			</>
		);
	}
}

export default MyDocument;
