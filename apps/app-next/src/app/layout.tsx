'use client';

import React from 'react';

import { useServerInsertedHTML } from 'next/navigation';

import { Snackbars, Confirm, MainProgress, Widgets, ScreenCapture, Timer, Countdown, Weather, Watch } from '@amaui/ui-react';
import { AmauiThemeProvider, valueObject, prefix, rtl, unit, makeClassName, AmauiStyle, AmauiStyleProvider, colors } from '@amaui/style-react';

import IconMaterialTimerRounded from '@amaui/icons-material-react/build/IconMaterialTimerRounded';
import IconMaterialVideocamRounded from '@amaui/icons-material-react/build/IconMaterialVideocamRounded';
import IconMaterialAvTimerRounded from '@amaui/icons-material-react/build/IconMaterialAvTimerRounded';
import IconMaterialWeatherRounded from '@amaui/icons-material-react/build/IconMaterialClearDayRounded';
import IconMaterialNestClockFarsightDigitalRounded from '@amaui/icons-material-react/build/IconMaterialNestClockFarsightDigitalRounded';
import IconMaterialNestClockFarsightAnalogRounded from '@amaui/icons-material-react/build/IconMaterialNestClockFarsightAnalogRounded';

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
  {
    label: 'Weather',
    Icon: IconMaterialWeatherRounded,
    element: <Weather temperature={14} weather='clear' />
  },
  {
    label: 'Screen Capture',
    Icon: IconMaterialVideocamRounded,
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

export default function Layout(props: { children: React.ReactNode }) {
  const {
    children
  } = props;

  const amauiStyle = React.useState(() => {
    const amauiStyle_ = new AmauiStyle();

    amauiStyle_.plugins.add = [
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

    return amauiStyle_;
  })[0];

  // Clean up
  React.useEffect(() => {
    const elements = window.document.querySelectorAll('#amaui-initial-style');

    elements.forEach(element => element.remove());
  }, []);

  useServerInsertedHTML(() => {
    return (
      <>
        <style
          id='amaui-initial-style'
        >
          {amauiStyle.css}
        </style>
      </>
    );
  });

  return (
    <html>
      <head>
        <meta charSet='UTF-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge,chrome=1' />

        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="cache-control" content="no-cache, no-store, must-revalidate" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />

        <link rel='manifest' href='/manifest.json' />

        <meta name='HandheldFriendly' content='True' />
        <meta name='MobileOptimized' content='320' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='robots' content='noimageindex' />
        <meta name='robots' content='follow' />
        <meta name='robots' content='noodp' />

        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-touch-fullscreen' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='#ffffff' />

        <link rel='apple-touch-icon' sizes='180x180' href='/favicons/light/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicons/light/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicons/light/favicon-16x16.png' />
        <link rel='manifest' href='/favicons/light/site.webmanifest' />
        <link rel='mask-icon' href='/favicons/light/safari-pinned-tab.svg' color={colors.yellow[500]} />
        <meta name='msapplication-TileColor' content='#ffffff' />
        <meta name='theme-color' content={colors.yellow[500]} />

        <meta name='google-site-verification' content='' />
      </head>

      <body>
        <AmauiStyleProvider
          value={amauiStyle}
        >
          <AmauiThemeProvider>
            <MainProgress>
              <Confirm>
                <Snackbars>
                  <Widgets
                    widgets={widgets}
                  >
                    {children}
                  </Widgets>
                </Snackbars>
              </Confirm>
            </MainProgress>
          </AmauiThemeProvider>
        </AmauiStyleProvider>
      </body>
    </html>
  );
}
