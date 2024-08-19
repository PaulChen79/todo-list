import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import type { DocumentContext } from 'next/document';

const MyDocument = () => (
	<Html lang="en">
		<Head />
		<body>
			<Main />
			<NextScript />
		</body>
	</Html>
);

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
	const originalRenderPage = ctx.renderPage;
	ctx.renderPage = () =>
		originalRenderPage({
			enhanceApp: (App) => (props) =>
				(
					<App {...props} />
				),
		});

	const initialProps = await NextDocument.getInitialProps(ctx);
	return {
		...initialProps,
		styles: (
			<>
				{initialProps.styles}
			</>
		),
	};
};

export default MyDocument;
