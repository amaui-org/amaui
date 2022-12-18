import React from 'react';

import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Line from '../Line';
import { IChip } from '../Chip/Chip';

import { staticClassName, TSize } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {
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
}), { name: 'amaui-Chips' });

export interface IChips extends IChip {
  wrap?: boolean;
}

const Chips = React.forwardRef((props_: IChips, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiChips?.props?.default, ...props_ }), [props_]);

  const { classes } = useStyle(props);

  const {
    size = 'regular',

    wrap,

    Component = 'div',

    className,
    style,

    children,

    ...other
  } = props;

  return (
    <Line
      ref={ref}

      gap={0}

      direction='row'

      Component={Component}

      className={classNames([
        staticClassName('Chips', theme) && [
          'amaui-Chips-root'
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
      {(children as any).map((item: any, index: number) => React.cloneElement(item, {
        key: index,

        size,

        ...other,

        ...item.props
      }))}
    </Line>
  );
});

Chips.displayName = 'amaui-Chips';

export default Chips;
