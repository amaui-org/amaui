import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

import { AmauiStyle, AmauiStyleProvider, valueObject, prefix, rtl, unit, makeClassName } from '@amaui/style-react';

export default class CustomDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta charSet='UTF-8' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge,chrome=1' />

          <meta httpEquiv='Pragma' content='no-cache' />
          <meta httpEquiv='cache-control' content='no-cache, no-store, must-revalidate' />

          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />

          <link href='https://fonts.googleapis.com/css2?family=Roboto+Mono&family=DM+Sans:wght@400;700&display=swap' rel='stylesheet' />

          <link rel='preload' as='font' type='font/ttf' crossOrigin='anonymous' href='/assets/fonts/Montserrat/Montserrat-Bold.ttf' />

          <meta property='og:image' content='/assets/social/image.jpg' />
          <meta property='og:image:height' content='1257' />
          <meta property='og:image:width' content='2400' />
          <meta property='og:description' content='Make Modern Web &amp; Mobile Apps Quickly 100+ UI elements' />
          <meta property='og:title' content='amaui' />
          <meta property='og:url' content='https://amaui.me' />

          <meta name='HandheldFriendly' content='True' />
          <meta name='MobileOptimized' content='320' />
          <meta name='mobile-web-app-capable' content='yes' />
          <meta name='robots' content='noimageindex' />
          <meta name='robots' content='follow' />
          <meta name='robots' content='noodp' />

          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='apple-touch-fullscreen' content='yes' />
          <meta name='apple-mobile-web-app-status-bar-style' content='#fafa00' />

          <script src='https://unpkg.com/@amaui/date@latest/umd/amaui-date.dev.js' />

          {/* Other */}
          {/* Prism */}
          <link rel='stylesheet' href='/assets/css/prism.css' />
          <script src='/assets/js/prism.js'></script>
        </Head>

        <body>
          <Main />

          <NextScript />
        </body>
      </Html>
    );
  }
}

CustomDocument.getInitialProps = async ctx => {
  const amauiStyle = new AmauiStyle();

  amauiStyle.plugins.add = [
    unit,
    prefix,
    rtl,
    valueObject,
    {
      method: makeClassName,
      arguments: [
        {
          production: ['prod', 'production'].includes(process.env.NODE_ENV)
        }
      ]
    }
  ];

  const page = ctx.renderPage;

  ctx.renderPage = () =>
    page({
      enhanceApp: App => props => {
        return (
          <AmauiStyleProvider
            value={amauiStyle}
          >
            <App {...props} />
          </AmauiStyleProvider>
        )
      },
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,

    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      <style
        key={0}

        dangerouslySetInnerHTML={{
          __html: `
@font-face {
  font-family: 'Montserrat';
  src: url('/assets/fonts/Montserrat/Montserrat-Bold.ttf');
  font-weight: 700;
  font-style: normal;
  font-display: block;
}

@font-face {
  font-family: 'Lato';
  src: url('/assets/fonts/Lato/Lato-Bold.ttf');
  font-weight: 700;
  font-style: normal;
  font-display: block;
}
` }}
      />,

      <style
        id='amaui-initial-css'

        key={1}

        dangerouslySetInnerHTML={{ __html: amauiStyle.css }}
      />
    ],
  };
};
