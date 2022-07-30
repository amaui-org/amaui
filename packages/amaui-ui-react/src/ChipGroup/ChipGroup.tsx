import React from 'react';

import { classNames, style } from '@amaui/style-react';

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

const ChipGroup = React.forwardRef((props: any, ref: any) => {
  const { classes } = useStyle(props);

  const {
    wrap,

    className,
    style,

    children,

    ...other
  } = props;

  return (
    <div
      ref={ref}

      className={classNames([
        className,
        classes.root,
        classes[props.size !== undefined ? props.size : 'regular'],
        wrap && classes.wrap
      ])}

      style={style}
    >
      {children.map((item: any, index: number) => React.cloneElement(item, {
        key: index,

        ...other,

        ...item.props
      }))}
    </div>
  );
});

export default ChipGroup;
