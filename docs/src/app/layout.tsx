'use client';

import React from 'react';

import { useServerInsertedHTML } from 'next/navigation';
import Script from 'next/script';

import { Snackbars, Confirm, MainProgress, Widgets, ScreenCapture, Timer, Countdown, Watch, Reset } from '@amaui/ui-react';
import { AmauiThemeProvider, valueObject, prefix, rtl, unit, makeClassName, AmauiStyle, AmauiStyleProvider } from '@amaui/style-react';

import IconMaterialTimerRounded from '@amaui/icons-material-react/build/IconMaterialTimerRounded';
import IconMaterialVideocamRounded from '@amaui/icons-material-react/build/IconMaterialVideocamRounded';
import IconMaterialAvTimerRounded from '@amaui/icons-material-react/build/IconMaterialAvTimerRounded';
import IconMaterialNestClockFarsightDigitalRounded from '@amaui/icons-material-react/build/IconMaterialNestClockFarsightDigitalRounded';
import IconMaterialNestClockFarsightAnalogRounded from '@amaui/icons-material-react/build/IconMaterialNestClockFarsightAnalogRounded';

import Root from './';

const widgets = [
  {
    label: 'Regular Clock',
    Icon: IconMaterialNestClockFarsightDigitalRounded,
    element: <Watch />
  },
  {
    label: 'Modern Clock',
    Icon: IconMaterialNestClockFarsightAnalogRounded,
    element: <Watch version='minimal' size='small' />
  },
  // {
  //   label: 'Weather',
  //   Icon: IconMaterialWeatherRounded,
  //   element: <Weather temperature={14} weather='clear' />
  // },
  {
    label: 'Screen Capture',
    Icon: IconMaterialVideocamRounded,
    move: false,
    element: <ScreenCapture />
  },
  {
    label: 'Timer',
    Icon: IconMaterialTimerRounded,
    element: <Timer />
  },
  {
    label: 'Countdown',
    Icon: IconMaterialAvTimerRounded,
    element: <Countdown />
  }
];

const FONT_FAMILY = {
  primary: ['Montserrat', 'Helvetica', 'Helvetica Neue', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Arial', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'sans-serif'].join(', '),
  secondary: ['Lato', 'Helvetica', 'Helvetica Neue', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Arial', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'sans-serif'].join(', '),
  tertiary: ['Roboto Mono', 'monospace'].join(', ')
};

export default function Layout(props: { children: React.ReactNode }) {
  const {
    children
  } = props;

  const valueAmauiStyle = React.useState(() => {
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

    return amauiStyle;
  })[0];

  const valueAmauiTheme = React.useMemo(() => {

    return {
      typography: {
        font_family: {
          primary: FONT_FAMILY.primary,
          secondary: FONT_FAMILY.secondary,
          tertiary: FONT_FAMILY.tertiary
        },

        values: {
          d1: { fontFamily: FONT_FAMILY.primary },

          d2: { fontFamily: FONT_FAMILY.primary },

          d3: { fontFamily: FONT_FAMILY.primary },

          h1: { fontFamily: FONT_FAMILY.primary },

          h2: { fontFamily: FONT_FAMILY.primary },

          h3: { fontFamily: FONT_FAMILY.primary },

          t1: { fontFamily: FONT_FAMILY.primary },

          t2: { fontFamily: FONT_FAMILY.primary },

          t3: { fontFamily: FONT_FAMILY.primary },

          l1: {
            fontFamily: FONT_FAMILY.secondary,
            fontWeight: 700
          },

          l2: {
            fontFamily: FONT_FAMILY.secondary,
            fontWeight: 700
          },

          l3: {
            fontFamily: FONT_FAMILY.secondary,
            fontWeight: 700
          },

          b1: { fontFamily: FONT_FAMILY.secondary },

          b2: { fontFamily: FONT_FAMILY.secondary },

          b3: { fontFamily: FONT_FAMILY.secondary },

          m1: { fontFamily: FONT_FAMILY.tertiary },

          m2: { fontFamily: FONT_FAMILY.tertiary },

          m3: { fontFamily: FONT_FAMILY.tertiary }
        }
      }
    };
  }, []);

  // Clean up
  React.useEffect(() => {
    const elements = window.document.querySelectorAll('#amaui-initial-css');

    elements.forEach(element => element.remove());
  }, []);

  useServerInsertedHTML(() => {
    return (
      <>
        <style
          id='amaui-initial-css'

          dangerouslySetInnerHTML={{ __html: valueAmauiStyle.css }}
        />
      </>
    );
  });

  return (
    <html lang='en'>
      <head>
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
      </head>

      <body>
        <AmauiStyleProvider
          value={valueAmauiStyle}
        >
          <AmauiThemeProvider
            value={valueAmauiTheme}
          >
            <MainProgress>
              <Confirm>
                <Snackbars>
                  <Widgets
                    widgets={widgets}
                  >
                    <Reset />

                    <Root>
                      {children}
                    </Root>
                  </Widgets>
                </Snackbars>
              </Confirm>
            </MainProgress>
          </AmauiThemeProvider>
        </AmauiStyleProvider>

        {/* Google Analytics */}
        <Script strategy='afterInteractive' src='https://www.googletagmanager.com/gtag/js?id=G-5XGEPWWXR7' />

        <Script
          strategy='afterInteractive'

          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-5XGEPWWXR7');
          `,
          }}
        />
      </body>
    </html>
  );
}
