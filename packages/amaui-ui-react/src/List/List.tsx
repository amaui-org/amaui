import React from 'react';

import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import { staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {
    // Reset
    margin: 0,
    listStyle: 'none',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
    background: theme.palette.background.default.primary
  },

  padding_vertical_both: {
    paddingBlock: theme.methods.space.value('sm', 'px')
  },

  padding_vertical_start: {
    paddingBlockStart: theme.methods.space.value('sm', 'px')
  },

  padding_vertical_end: {
    paddingBlockEnd: theme.methods.space.value('sm', 'px')
  },

  padding_vertical_none: {
    paddingBlock: 0
  },

  padding_horizontal_both: {
    paddingInline: theme.methods.space.value('rg', 'px')
  },

  padding_horizontal_start: {
    paddingInlineStart: theme.methods.space.value('rg', 'px')
  },

  padding_horizontal_end: {
    paddingInlineEnd: theme.methods.space.value('rg', 'px')
  },

  padding_horizontal_none: {
    paddingInline: 0
  }
}), { name: 'AmauiList' });

const List = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiList?.props?.default }), [props_]);

  const { classes } = useStyle(props);

  const {
    paddingHorizontal = 'none',
    paddingVertical = 'both',
    Component = 'ul',

    className,
    style,

    children,

    ...other
  } = props;

  return (
    <Component
      ref={ref}

      className={classNames([
        staticClassName('List', theme) && [
          'AmauiList-root',
          `AmauiList-padding-horizontal-${paddingHorizontal}`,
          `AmauiList-padding-vertical-${paddingVertical}`
        ],

        className,
        classes.root,
        classes[`padding_vertical_${paddingVertical}`],
        classes[`padding_horizontal_${paddingHorizontal}`]
      ])}

      style={style}
    >
      {React.Children.toArray(children).map((item: any) => React.cloneElement(item, {
        ...other,

        ...item.props
      }))}
    </Component>
  );
});

List.displayName = 'AmauiList';

export default List;
