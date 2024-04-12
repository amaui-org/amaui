import React from 'react';

import { is, textToInnerHTML } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import useMediaQuery from '../useMediaQuery';
import TypeElement from '../Type';
import LineElement from '../Line';
import { valueBreakpoints, staticClassName } from '../utils';
import { IBaseElement, IPropsAny } from '../types';

const useStyle = styleMethod(theme => ({
  root: {

  },

  type: {
    columnGap: '40px'
  },

  divider: {
    columnRule: `1px solid ${theme.palette.text.divider}`
  },

  column_1: {
    columnCount: '1'
  },

  column_2: {
    columnCount: '2'
  },

  column_3: {
    columnCount: '3'
  },

  column_4: {
    columnCount: '4'
  }
}), { name: 'amaui-Text' });

export interface IText extends IBaseElement {
  value?: any;

  columns?: number;

  responsive?: boolean;

  divider?: boolean;

  top?: any;
  bottom?: any;
  start?: any;
  end?: any;

  TypeProps?: IPropsAny;
  HorizontalProps?: IPropsAny;
}

const Text: React.FC<IText> = React.forwardRef((props, ref: any) => {
  const theme = useAmauiTheme();

  const { classes } = useStyle();

  const {
    value: value_,

    columns: columns_,

    responsive = true,

    divider,

    top,
    bottom,
    start,
    end,

    TypeProps,
    HorizontalProps,

    className,

    children,

    ...other
  } = props;

  const refs = {
    root: React.useRef<any>()
  };

  const breakpoints: any = {};

  theme.breakpoints.keys.forEach(key => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    if (theme.breakpoints.media[key]) breakpoints[key] = useMediaQuery(theme.breakpoints.media[key], { element: refs.root.current });
  });

  let columns = valueBreakpoints(columns_, 1, breakpoints, theme);

  if (responsive) {
    // 0 - 479px
    if (breakpoints.min || breakpoints.xxs || breakpoints.xs) columns = Math.min(columns, 1);

    // 480px - 1023px
    if (breakpoints.sm || breakpoints.md) columns = Math.min(columns, 2);

    // 1024px - 1439px
    if (breakpoints.lg) columns = Math.min(columns, 3);
  }

  let value = value_ !== undefined ? value_ : children;

  value = is('string', value) ? textToInnerHTML(value) : '';

  const main = (
    <Type
      version='b2'

      {...TypeProps}

      className={classNames([
        staticClassName('Text', theme) && [
          'amaui-Text-type'
        ],

        TypeProps?.className,
        classes.type,
        divider && classes.divider,
        classes[`column_${columns}`]
      ])}

      dangerouslySetInnerHTML={{
        __html: value
      }}
    />
  );

  return (
    <Line
      ref={(item: any) => {
        if (ref) {
          if (is('function', ref)) ref(item);
          else ref.current = item;
        }

        refs.root.current = item;
      }}

      direction='column'

      justify='unset'

      align='unset'

      className={classNames([
        staticClassName('Text', theme) && [
          'amaui-Text-root'
        ],

        className,
        classes.root
      ])}

      fullWidth

      {...other}
    >
      {top}

      <Line
        direction='row'

        fullWidth

        {...HorizontalProps}

        className={classNames([
          staticClassName('Text', theme) && [
            'amaui-Text-main'
          ],

          HorizontalProps?.className,
          classes.main
        ])}
      >
        {main}
      </Line>

      {bottom}
    </Line>
  );
});

Text.displayName = 'amaui-Text';

export default Text;
