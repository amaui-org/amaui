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

          <meta httpEquiv="Pragma" content="no-cache" />
          <meta httpEquiv="cache-control" content="no-cache, no-store, must-revalidate" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />

          <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Montserrat:wght@700&family=Roboto+Mono&display=swap" rel="stylesheet" />

          <link rel='manifest' href='/manifest.json' />

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

          <link rel='apple-touch-icon' sizes='180x180' href='/assets/favicon/light/apple-touch-icon.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/assets/favicon/light/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/assets/favicon/light/favicon-16x16.png' />
          <link rel='manifest' href='/assets/favicon/light/site.webmanifest' />
          <link rel='mask-icon' href='/assets/favicon/light/safari-pinned-tab.svg' color='#fafa00' />
          <meta name='msapplication-TileColor' content='#ffffff' />
          <meta name='theme-color' content='#fafa00' />
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
      enhanceApp: App => props => (
        <AmauiStyleProvider
          value={amauiStyle}
        >
          <App {...props} />
        </AmauiStyleProvider>
      ),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,

    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      <style
        id='amaui-initial-css'

        key='amaui'

        dangerouslySetInnerHTML={{ __html: amauiStyle.css }}
      />
    ],
  };
};
