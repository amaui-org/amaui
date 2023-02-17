import React from 'react';

import type { AppProps } from 'next/app';
import Script from 'next/script';

import { isOS } from '@amaui/utils';
import { Widgets, ScreenCapture, Timer, Countdown, Watch, Reset, MainProgress, useMediaQuery } from '@amaui/ui-react';
import { AmauiStyleProvider, AmauiThemeProvider, valueObject, prefix, rtl, unit, makeClassName, useAmauiStyle, AmauiTheme } from '@amaui/style-react';

import IconMaterialTimerRounded from '@amaui/icons-material-react/build/IconMaterialTimerRounded';
import IconMaterialVideocamRounded from '@amaui/icons-material-react/build/IconMaterialVideocamRounded';
import IconMaterialAvTimerRounded from '@amaui/icons-material-react/build/IconMaterialAvTimerRounded';
import IconMaterialNestClockFarsightDigitalRounded from '@amaui/icons-material-react/build/IconMaterialNestClockFarsightDigitalRounded';
import IconMaterialNestClockFarsightAnalogRounded from '@amaui/icons-material-react/build/IconMaterialNestClockFarsightAnalogRounded';

const FONT_FAMILY = {
  primary: ['Montserrat', 'Helvetica', 'Helvetica Neue', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'].join(', '),
  secondary: ['Lato', 'Helvetica', '"Helvetica Neue"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'].join(', '),
  tertiary: ['"Roboto Mono"', 'monospace'].join(', ')
};

export default function App(props: AppProps) {
  const {
    Component,

    pageProps
  } = props;

  const touch = useMediaQuery('coarse');

  const [screenCaptureSupported, setScreenCaptureSupported] = React.useState(false);

  React.useEffect(() => {
    setScreenCaptureSupported(!(touch || isOS('mobile')));
  }, [touch]);

  const valueAmauiStyle = useAmauiStyle();

  if (valueAmauiStyle?.options?.rule) valueAmauiStyle.options.rule.prefix = true;

  valueAmauiStyle.plugins.add = [
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

  const valueAmauiTheme = React.useMemo(() => {

    return new AmauiTheme({
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
    }, undefined, { rule: { prefix: true } });
  }, []);

  const widgets = React.useMemo(() => [
    {
      label: 'Countdown',
      Icon: IconMaterialAvTimerRounded,
      element: <Countdown />
    },
    {
      label: 'Timer',
      Icon: IconMaterialTimerRounded,
      element: <Timer />
    },
    // {
    //   label: 'Weather',
    //   Icon: IconMaterialWeatherRounded,
    //   element: <Weather temperature={14} weather='clear' />
    // },
    ...(screenCaptureSupported ? [
      {
        label: 'Screen Capture',
        Icon: IconMaterialVideocamRounded,
        element: <ScreenCapture />
      }
    ] : []),
    {
      label: 'Modern Clock',
      Icon: IconMaterialNestClockFarsightAnalogRounded,
      element: <Watch version='minimal' size='small' />
    },
    {
      label: 'Regular Clock',
      Icon: IconMaterialNestClockFarsightDigitalRounded,
      element: <Watch />
    }
  ], [screenCaptureSupported]);

  return <>
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

    {/* Website */}
    <AmauiStyleProvider
      value={valueAmauiStyle}
    >
      <AmauiThemeProvider
        value={valueAmauiTheme}
      >
        <MainProgress>
          <Widgets
            widgets={widgets}
          >
            <Reset />

            <Component {...pageProps} />
          </Widgets>
        </MainProgress>
      </AmauiThemeProvider>
    </AmauiStyleProvider>
  </>;
}
