import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { Snackbars, Confirm, MainProgress, Widgets, ScreenCapture, Timer, Countdown, Weather, Watch } from '@amaui/ui-react';
import { AmauiThemeProvider, valueObject, prefix, rtl, unit, makeClassName, useAmauiStyle } from '@amaui/style-react';

import IconMaterialTimerRounded from '@amaui/icons-material-react/IconMaterialTimerRounded';
import IconMaterialVideocamRounded from '@amaui/icons-material-react/IconMaterialVideocamRounded';
import IconMaterialAvTimerRounded from '@amaui/icons-material-react/IconMaterialAvTimerRounded';
import IconMaterialWeatherRounded from '@amaui/icons-material-react/IconMaterialClearDayRounded';
import IconMaterialNestClockFarsightDigitalRounded from '@amaui/icons-material-react/IconMaterialNestClockFarsightDigitalRounded';
import IconMaterialNestClockFarsightAnalogRounded from '@amaui/icons-material-react/IconMaterialNestClockFarsightAnalogRounded';

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
  const amauiStyle = useAmauiStyle();

  amauiStyle.plugins.add = [unit, prefix, rtl, valueObject, makeClassName];

  return (
    <AmauiThemeProvider>
      <MainProgress>
        <Confirm>
          <Snackbars>
            <Widgets
              widgets={widgets}
            >
              <Component {...pageProps} />
            </Widgets>
          </Snackbars>
        </Confirm>
      </MainProgress>
    </AmauiThemeProvider>
  )
}
