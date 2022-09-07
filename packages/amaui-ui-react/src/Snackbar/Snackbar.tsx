import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Type from '../Type';
import Surface from '../Surface';
import Line from '../Line';

import { staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {
    minWidth: '340px',
    minHeight: '50px',
    borderRadius: `${theme.shape.radius.unit}px`,
    boxShadow: 'rgb(0 0 0 / 1%) 0px 4px 5px 0px, rgb(0 0 0 / 1%) 0px 1px 10px 0px, rgb(0 0 0 / 1%) 0px 2px 4px -1px'
  },

  aside: {
    marginInlineStart: 'auto'
  },

  size_small: {
    padding: '4px 16px'
  },

  size_regular: {
    padding: '8px 20px'
  },

  size_large: {
    padding: '12px 24px'
  }
}), { name: 'AmauiSnackbar' });

const Snackbar = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiSnackbar?.props?.default }), [props_]);

  const {
    tonal = true,
    color = 'primary',
    size = 'regular',
    elevation = 0,
    primary,
    aside: aside_,
    Component = 'div',

    className,

    children,

    ...other
  } = props;

  const { classes } = useStyle(props);

  let aside = React.Children.toArray(aside_);

  return (
    <Surface
      ref={ref}

      tonal={tonal}

      color={color}

      elevation={elevation}

      Component={Line}

      wrap='wrap'

      direction='row'

      align='center'

      justify='space-between'

      gap={2}

      className={classNames([
        staticClassName('Snackbar', theme) && [
          `AmauiSnackbar-root`,
          `AmauiSnackbar-size-${size}`
        ],

        className,
        classes.root,
        classes[`size_${size}`]
      ])}

      {...other}
    >
      {(children !== undefined || primary !== undefined) && (
        <div
          className={classNames([
            staticClassName('Snackbar', theme) && [
              `AmauiSnackbar-primary`
            ],

            classes.primary
          ])}
        >
          {is('string', primary) ? (
            <Type
              color='inherit'

              version='b2'
            >
              {primary}
            </Type>
          ) : primary}

          {children}
        </div>
      )}

      {!!aside.length && (
        <Line
          direction='row'

          wrap='wrap'

          align='center'

          justify='flex-end'

          className={classNames([
            staticClassName('Snackbar', theme) && [
              `AmauiSnackbar-aside`
            ],

            classes.aside
          ])}
        >
          {aside}
        </Line>
      )}
    </Surface>
  );
});

Snackbar.displayName = 'AmauiSnackbar';

export default Snackbar;
