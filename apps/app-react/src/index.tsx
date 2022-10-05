import ReactDOM from 'react-dom/client';

import { Snackbars, Confirm, MainProgress, Widgets, ScreenCapture, Timer } from '@amaui/ui-react';
import { AmauiStyle, AmauiStyleProvider, AmauiThemeProvider, valueObject, prefix, rtl, unit } from '@amaui/style-react';

import IconMaterialAddRounded from '@amaui/icons-material-react/build/IconMaterialAddRounded';
import IconMaterialPottedPlantRounded from '@amaui/icons-material-react/build/IconMaterialPottedPlantRounded';
import IconMaterialTimerRounded from '@amaui/icons-material-react/build/IconMaterialTimerRounded';
import IconMaterialVideocamRounded from '@amaui/icons-material-react/build/IconMaterialVideocamRounded';

import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const amauiStyle = new AmauiStyle();

amauiStyle.plugins.add = [unit, prefix, rtl, valueObject];

const widgets = [
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
    label: 'plant',
    Icon: IconMaterialPottedPlantRounded,
    element: <div style={{ width: 440, height: 440, background: 'orange' }} />
  },
  {
    label: 'add',
    Icon: IconMaterialAddRounded,
    element: <div style={{ width: 240, height: 240, background: 'orange' }} />
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
