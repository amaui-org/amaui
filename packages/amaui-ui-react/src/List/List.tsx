import React from 'react';

import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import { staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: `${theme.methods.space.value('sm', 'px')} 0`
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

      {...other}
    >
      {children}
    </Component>
  );
});

List.displayName = 'AmauiList';

export default List;
