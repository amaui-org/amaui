import React from 'react';

import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import { staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',

    '&$small': {
      columnGap: theme.methods.space.value('sm', 'px', -2)
    },

    '&$regular': {
      columnGap: theme.methods.space.value('sm', 'px')
    },

    '&$large': {
      columnGap: theme.methods.space.value('sm', 'px', 2)
    },

    '&:not($wrap)': {
      overflowX: 'auto',

      '&$small': {
        paddingRight: theme.methods.space.value('sm', 'px', -2)
      },

      '&$regular': {
        paddingRight: theme.methods.space.value('sm', 'px')
      },

      '&$large': {
        paddingRight: theme.methods.space.value('sm', 'px', 2)
      },
    },

    '&$wrap': {
      flexWrap: 'wrap',

      '&$small': {
        rowGap: theme.methods.space.value('rg', 'px', -4)
      },

      '&$regular': {
        rowGap: theme.methods.space.value('rg', 'px')
      },

      '&$large': {
        rowGap: theme.methods.space.value('rg', 'px', 4)
      }
    }
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
        wrap && classes.wrap
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
