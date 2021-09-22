/* eslint-disable */
import Document, { Html, Head, Main, NextScript } from 'next/document';
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
            <Html>
                <Head>
                    <title>Alysa's Pho & Banh Mi</title>
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1, maximum-scale=1.0, minimum-scale=1, user-scalable=no, shrink-to-fit=no"
                    />
                    <meta name="google-site-verification" content="dgdSc6VoguF_qCZI0fQsXom1v4yLFO48DYGCewW-OEY" />
                    <link rel="shortcut icon" href="/151logo.png" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Yellowtail&display=swap" rel="stylesheet" />
                    {this.props.styleTags}
                </Head>
                <body class="has-navbar-fixed-top">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}