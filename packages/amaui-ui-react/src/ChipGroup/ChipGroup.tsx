import React from 'react';

import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import { staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',

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

  small: {
    columnGap: '6px'
  },

  regular: {
    columnGap: '8px'
  },

  large: {
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
}), { name: 'AmauiChipGroup' });

const ChipGroup = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiChipGroup?.props?.default }), [props_]);

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
        staticClassName('ChipGroup', theme) && [
          'AmauiChipGroup-root',
          `AmauiChipGroup-size-${size}`,
          wrap && 'AmauiChipGroup-wrap'
        ],

        className,
        classes.root,
        classes[size],
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

export default ChipGroup;
