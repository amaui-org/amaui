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
    width: '100%'
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

  const init = React.useCallback(() => {
    const mainSrc = is('string', src) ? src : src.main;
    const shortSrc = src.short || `${src}.short`;

    const Element = Dynamic(() => import(mainSrc));

    setChildren(
      <Element />
    );
  }, []);

  React.useEffect(() => {
    init();
  }, []);

  return (
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

        <Button

        >
          Asd
        </Button>
      </Line>

      {use === 'example' && children && (
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
            {children}
          </Surface>
        </IFrame>
      )}
    </Line>
  );
});

export default Example;
