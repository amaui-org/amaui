import React from 'react';
import Dynamic from 'next/dynamic';

import { Button, Line, Surface, Type } from '@amaui/ui-react';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';
import AmauiRequest from '@amaui/request';

import IFrame from './IFrame';
import { importIframeStyles } from '../../utils';
import { is } from '@amaui/utils';

const useStyle = style(theme => ({
  root: {
    width: '100%',
    background: 'none',

    '& > *': {
      width: '100%'
    }
  }
}), { name: 'Example' });

const Example = React.forwardRef((props: any, ref: any) => {
  const {
    src,
    label,
    className,

    ...other
  } = props;

  const theme = useAmauiTheme();

  const { classes } = useStyle();

  const [use, setUse] = React.useState('example');
  const [children, setChildren] = React.useState<any>();
  const [files, setFiles] = React.useState<any>({});

  const init = React.useCallback(async () => {
    const mainSrc = is('string', src) ? src : src.main;
    const shortSrc = src.short || `${src}.short`;

    let Element: any;

    switch (mainSrc) {
      case '../examples/Zip/zip':
        Element = Dynamic(() => import('../../../public/assets/js/examples/Zip/zip'));
        break;

      case '../examples/Zip/unzip':
        Element = Dynamic(() => import('../../../public/assets/js/examples/Zip/unzip'));
        break;

      default:
        break;
    }

    const files_ = {
      mainSrc: await AmauiRequest.get(`/assets/js/examples/Zip/zip.tsx`, { response: { type: 'text' } }),
      shortSrc: await AmauiRequest.get(`${mainSrc}.tsx`, { response: { type: 'text' } })
    };

    console.log(1, files_.mainSrc);

    // Element
    if (Element) setChildren(<Element />);
  }, []);

  React.useEffect(() => {
    init();
  }, []);

  console.log(0, children);
  return (
    <IFrame
      ref={ref}
    >
      <Surface
        tonal

        color='primary'

        direction='column'

        Component={Line}

        className={classes.root}
      >
        <Line
          ref={ref}

          className={classNames([
            className,
            classes.root
          ])}

          {...other}
        >
          <Line
            direction='row'

            align='center'

            justify='space-between'

            style={{
              width: '100%'
            }}
          >
            <Type
              version='h3'
            >
              {label}
            </Type>

          </Line>

          {use === 'example' && children}
        </Line>
      </Surface>
    </IFrame>
  );
});

export default Example;
