import '../styles/globals.css';
import type { AppProps } from 'next/app';

import { Snackbars, Confirm, MainProgress, Widgets, ScreenCapture, Timer, Countdown, Weather, Watch } from '@amaui/ui-react';
import { AmauiStyle, AmauiStyleProvider, AmauiThemeProvider, valueObject, prefix, rtl, unit } from '@amaui/style-react';

import IconMaterialTimerRounded from '@amaui/icons-material-react/build/IconMaterialTimerRounded';
import IconMaterialVideocamRounded from '@amaui/icons-material-react/build/IconMaterialVideocamRounded';
import IconMaterialAvTimerRounded from '@amaui/icons-material-react/build/IconMaterialAvTimerRounded';
import IconMaterialWeatherRounded from '@amaui/icons-material-react/build/IconMaterialClearDayRounded';
import IconMaterialNestClockFarsightDigitalRounded from '@amaui/icons-material-react/build/IconMaterialNestClockFarsightDigitalRounded';
import IconMaterialNestClockFarsightAnalogRounded from '@amaui/icons-material-react/build/IconMaterialNestClockFarsightAnalogRounded';

const amauiStyle = new AmauiStyle();

amauiStyle.plugins.add = [unit, prefix, rtl, valueObject];

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

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AmauiStyleProvider value={amauiStyle}>
      <AmauiThemeProvider>
        <MainProgress>
          <Confirm>
            <Snackbars>
              <Widgets
                widgets={widgets}
              >
                <Component {...pageProps} />
              </Widgets>
            </Snackbars >
          </Confirm >
        </MainProgress >
      </AmauiThemeProvider >
    </AmauiStyleProvider >
  )
}
