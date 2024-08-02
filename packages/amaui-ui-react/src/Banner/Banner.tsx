import React from 'react';

import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import ListItemElement from '../ListItem';
import GridElement from '../Grid';
import LineElement from '../Line';
import { staticClassName } from '../utils';
import { IBaseElement, IElement, ISize } from '../types';

const useStyle = styleMethod(theme => ({
  root: {
    width: '100%',

    '&.amaui-ListItem-root': {
      padding: '0px'
    }
  },

  listItem: {
    margin: '0 auto'
  },

  // maxWidth
  maxWidth_xxs: { maxWidth: '320px' },

  maxWidth_xs: { maxWidth: '400px' },

  maxWidth_sm: { maxWidth: '600px' },

  maxWidth_rg: { maxWidth: '960px' },

  maxWidth_lg: { maxWidth: '1240px' },

  maxWidth_xl: { maxWidth: '1920px' },

  maxWidth_unset: { maxWidth: 'unset' }
}), { name: 'amaui-Banner' });

export interface IBanner extends IBaseElement {
  size?: ISize;

  maxWidth?: string | number;

  actions?: IElement;

  start?: any;

  end?: any;
}

const Banner: React.FC<IBanner> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiBanner?.props?.default, ...props_ }), [props_]);

  const Line = React.useMemo(() => theme?.elements?.Line || LineElement, [theme]);

  const ListItem = React.useMemo(() => theme?.elements?.ListItem || ListItemElement, [theme]);

  const Grid = React.useMemo(() => theme?.elements?.Grid || GridElement, [theme]);

  const {
    size = 'regular',

    maxWidth,

    actions,

    start,

    end,

    Component = 'div',

    style,

    className,

    children,

    ...other
  } = props;

  const { classes } = useStyle();

  const styles: any = {
    root: {

    }
  };

  if (actions) {
    other.line = true;

    other.RootProps = {};

    other.RootProps.values = {
      md: 7
    };

    other.footer = (
      <Grid
        Component={Line}

        RootProps={{
          gap: 1,
          direction: 'row'
        }}

        justify='flex-end'
        align='flex-end'

        values={{
          md: 2
        } as any}

        offsets={{
          md: 1
        } as any}
      >
        {actions}
      </Grid>
    );
  }

  if (!classes[`maxWidth_${maxWidth}`]) styles.root.maxWidth = maxWidth;

  return (
    <Component
      ref={ref}

      role='alert'

      className={classNames([
        staticClassName('Banner', theme) && [
          'amaui-Banner-root',
          `amaui-Banner-size-${size}`
        ],

        className,
        classes.root
      ])}

      style={{
        ...styles.root,

        ...style
      }}
    >
      {start}

      <ListItem
        size={size}

        Component={Grid}

        RootComponent={Grid}

        PrimaryProps={{
          version: 'b2'
        }}

        className={classNames([
          staticClassName('Banner', theme) && [
            'amaui-Banner-list-item'
          ],

          classes.listItem,
          classes[`maxWidth_${maxWidth}`]
        ])}

        {...other}
      >
        {children}
      </ListItem>

      {end}
    </Component>
  );
});

Banner.displayName = 'amaui-Banner';

export default Banner;
