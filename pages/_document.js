/* eslint-disable */
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
    static getInitialProps(ctx) {
        const { renderPage, pathname } = ctx;

        const sheet = new ServerStyleSheet();
        const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
        const styleTags = sheet.getStyleElement();
        return { ...page, styleTags, pathname };
    }

    render() {
        return (
            <html>
                <Head>
                    <title>Alysa's Pho & Banh Mi</title>
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1, maximum-scale=1.0, minimum-scale=1, user-scalable=no, shrink-to-fit=no"
                    />
                    <link rel="shortcut icon" href="/151logo.png" />
                    {this.props.styleTags}
                </Head>
                <body class="has-navbar-fixed-top">
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}