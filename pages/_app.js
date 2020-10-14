import App, { Container } from 'next/app';
import React from 'react';

import 'bulma/bulma.sass'; // bulma
import '../styles/app.less'; // others

class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }
        const { req, reduxStore } = ctx;

        return { pageProps };
    }

    render() {
        const { Component, pageProps, reduxStore } = this.props;

        return (
            <Container>
                <Component {...pageProps} />
            </Container>
        );
    }
}

export default MyApp;
