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
    padding: `${theme.methods.space.value('sm', 'px')} 0`,
    background: theme.palette.background.default.primary
  },

  noPadding: {
    padding: 0
  }
}), { name: 'AmauiList' });

const List = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiList?.props?.default }), [props_]);

  const { classes } = useStyle(props);

  const {
    noPadding,
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
          noPadding && `AmauiList-noPadding`
        ],

        className,
        classes.root,
        noPadding && classes.noPadding
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
