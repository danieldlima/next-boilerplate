import Head from 'next/head';
import { AppProps } from 'next/app';

import GlobalStyles from 'styles/global';

function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>React Avançado Boilerprate</title>
				<link rel="shortcut icon" href="/img/icon-512.png" />
				<link rel="apple-touch-icon" href="/img/icon-512.png" />

				<link rel="manifest" href="/manifest.json" />
				<meta
					name="description"
					content="A simple starter to work with typescript, React, NextJS and Styled Components"
				/>
			</Head>
			<GlobalStyles />
			<Component {...pageProps} />
		</>
	);
}

export default App;
