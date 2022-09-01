import React from 'react';

import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import { staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    padding: '1px',

    '&:not($wrap)': {
      overflowX: 'auto',

      '&$small': {
        paddingRight: '6px'
      },

      '&$regular': {
        paddingRight: '8px'
      },

      '&$large': {
        paddingRight: '10px'
      },
    }
  },

  size_small: {
    columnGap: '6px'
  },

  size_regular: {
    columnGap: '8px'
  },

  size_large: {
    columnGap: '10px'
  },

  wrap: {
    flexWrap: 'wrap'
  },

  wrap_small: {
    rowGap: '12px'
  },

  wrap_regular: {
    rowGap: '16px'
  },

  wrap_large: {
    rowGap: '20px'
  }
}), { name: 'AmauiChips' });

const Chips = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiChips?.props?.default }), [props_]);

  const { classes } = useStyle(props);

  const {
    wrap,
    size = 'regular',

    className,
    style,

    children,

    ...other
  } = props;

  return (
    <div
      ref={ref}

      className={classNames([
        staticClassName('Chips', theme) && [
          'AmauiChips-root',
          `AmauiChips-size-${size}`,
          wrap && 'AmauiChips-wrap'
        ],

        className,
        classes.root,
        classes[`size_${size}`],
        wrap && [
          classes.wrap,
          classes[`wrap_${size}`]
        ]
      ])}

      style={style}
    >
      {children.map((item: any, index: number) => React.cloneElement(item, {
        key: index,

        size,

        ...other,

        ...item.props
      }))}
    </div>
  );
});

Chips.displayName = 'AmauiChips';

export default Chips;
