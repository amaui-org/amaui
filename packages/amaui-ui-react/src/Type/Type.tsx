import React from 'react';

import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import { staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {
    // reset
    margin: '0',
    padding: '0',

    '&:not(:last-child)': {
      marginBottom: '0.4em'
    },

    '&$d1': {
      ...theme.typography.values.d1
    },
    '&$d2': {
      ...theme.typography.values.d2
    },
    '&$d3': {
      ...theme.typography.values.d3
    },
    '&$h1': {
      ...theme.typography.values.h1
    },
    '&$h2': {
      ...theme.typography.values.h2
    },
    '&$h3': {
      ...theme.typography.values.h3
    },
    '&$t1': {
      ...theme.typography.values.t1
    },
    '&$t2': {
      ...theme.typography.values.t2
    },
    '&$t3': {
      ...theme.typography.values.t3
    },
    '&$l1': {
      ...theme.typography.values.l1
    },
    '&$l2': {
      ...theme.typography.values.l2
    },
    '&$l3': {
      ...theme.typography.values.l3
    },
    '&$b1': {
      ...theme.typography.values.b1
    },
    '&$b2': {
      ...theme.typography.values.b2
    },
    '&$b3': {
      ...theme.typography.values.b3
    }
  }
}), { name: 'AmauiType' });

const Type = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiType?.props?.default }), [props_]);

  const { classes } = useStyle(props);

  const {
    version = 'b2',
    size,
    Component: Component_,

    className,
    style = {},

    children,

    ...other
  } = props;

  const styles: any = {
    root: {}
  };

  let Component: any = Component_;

  const map = {
    h1: ['d1', 'd2', 'd3', 'h1'],
    h2: ['h2'],
    h3: ['h3'],
    h4: ['h4', 't1', 't2', 't3'],
    h5: ['h5', 'l1', 'l2', 'l3'],
    p: ['b1', 'b2', 'b3']
  };

  Object.keys(map).forEach(item => {
    if (map[item].includes(version) && !Component) Component = item;
  });

  if (!Component) Component = 'p';

  if (size !== undefined) styles.root.fontSize = size;

  return (
    <Component
      ref={ref}

      className={classNames([
        staticClassName('Type', theme) && [
          'AmauiType-root',
          `AmauiType-version-${version}`,
          `AmauiType-version-${size}`
        ],

        classes.root,
        className,
        classes[version]
      ])}

      style={{
        ...style,

        ...styles.root
      }}

      {...other}
    >
      {children}
    </Component>
  );
});

export default Type;
