import React from 'react';

import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Line from '../Line';
import Surface from '../Surface';

import { staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {
    zIndex: theme.z_index.app_bar,
    width: '100%',
    height: '80px',
    paddingBlock: '12px',
    paddingInline: '4px 16px',
    overflow: 'auto'
  },

  size_small: { height: '72px' },

  size_regular: { height: '80px' },

  size_large: { height: '88px' },

  fixed: {
    position: 'fixed',
    insetInline: 0,
    bottom: 0
  }
}), { name: 'AmauiBottomAppBar' });

const BottomAppBar = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiBottomAppBar?.props?.default }), [props_]);

  const { classes } = useStyle(props);

  const {
    tonal = true,
    color = 'primary',
    size = 'regular',
    main: main_,
    fixed,

    className,

    children: children_,

    ...other
  } = props;

  const main = React.Children
    .toArray(main_)
    .map((item: any, index: number) => React.cloneElement(item, {
      key: index,

      color: item.props.color !== undefined ? item.props.color : color,

      tonal: item.props.tonal !== undefined ? item.props.tonal : tonal && ['AmauiFab'].includes(item.type?.displayName) ? 'secondary' : tonal
    }));

  const children = React.Children
    .toArray(children_)
    .map((item: any, index: number) => React.cloneElement(item, {
      key: index,

      elevation: item.props.elevation !== undefined ? item.props.elevation : false,

      version: item.props.version !== undefined ? item.props.version : 'filled',

      color: item.props.color !== undefined ? item.props.color : color,

      tonal: item.props.tonal !== undefined ? item.props.tonal : tonal
    }));

  return (
    <Surface
      ref={ref}

      Component={Line}

      color={color}

      tonal={tonal}

      direction='row'

      align='center'

      justify='space-between'

      noBorderRadius

      gap={4}

      className={classNames([
        staticClassName('BottomAppBar', theme) && [
          'AmauiBottomAppBar-root',
          `AmauiBottomAppBar-size-${size}`,
          fixed && `AmauiBottomAppBar-fixed`
        ],

        className,
        classes.root,
        classes[`size_${size}`],
        fixed && classes.fixed
      ])}

      {...other}
    >
      {children && (
        <Line
          direction='row'

          align='center'

          justify='flex-start'

          gap={0}
        >
          {children}
        </Line>
      )}

      {main && (
        <Line
          direction='row'

          align='center'

          justify='flex-end'
        >
          {main}
        </Line>
      )}
    </Surface>
  );
});

BottomAppBar.displayName = 'AmauiBottomAppBar';

export default BottomAppBar;
