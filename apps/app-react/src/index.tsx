import ReactDOM from 'react-dom/client';

import { Snackbars, Confirm, MainProgress, Widgets, ScreenCapture, Timer, Countdown, Weather } from '@amaui/ui-react';
import { AmauiStyle, AmauiStyleProvider, AmauiThemeProvider, valueObject, prefix, rtl, unit } from '@amaui/style-react';

import IconMaterialTimerRounded from '@amaui/icons-material-react/build/IconMaterialTimerRounded';
import IconMaterialVideocamRounded from '@amaui/icons-material-react/build/IconMaterialVideocamRounded';
import IconMaterialAvTimerRounded from '@amaui/icons-material-react/build/IconMaterialAvTimerRounded';
import IconMaterialWeatherRounded from '@amaui/icons-material-react/build/IconMaterialClearDayRounded';

import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const amauiStyle = new AmauiStyle();

amauiStyle.plugins.add = [unit, prefix, rtl, valueObject];

const widgets = [
  {
    label: 'Weather',
    Icon: IconMaterialWeatherRounded,
    element: <Weather temperature='14°' weather='sunny' />
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

root.render(
  <AmauiStyleProvider value={amauiStyle}>
    <AmauiThemeProvider>
      <MainProgress>
        <Confirm>
          <Snackbars>
            <Widgets
              widgets={widgets}
            >
              <App />
            </Widgets>
          </Snackbars>
        </Confirm>
      </MainProgress>
    </AmauiThemeProvider>
  </AmauiStyleProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
