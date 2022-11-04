import React from 'react';

import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import ListItem from '../ListItem';
import Grid from '../Grid';
import Line from '../Line';

import { IBaseElement, staticClassName, TElement, TSize } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {
    width: '100%',

    '&.AmauiListItem-root': {
      padding: 0
    }
  },

  listItem: {
    margin: '0 auto'
  },

  size_small: {
    padding: `${theme.methods.space.value('md') * 0.5}px ${theme.methods.space.value('rg') * 0.75}px`
  },

  size_regular: {
    padding: `${theme.methods.space.value('md', 'px')} ${theme.methods.space.value('rg', 'px')}`
  },

  size_large: {
    padding: `${theme.methods.space.value('md') * 1.5}px ${theme.methods.space.value('rg') * 1.25}px`
  },

  // maxWidth
  maxWidth_xxs: { maxWidth: '320px' },

  maxWidth_xs: { maxWidth: '400px' },

  maxWidth_sm: { maxWidth: '600px' },

  maxWidth_rg: { maxWidth: '960px' },

  maxWidth_lg: { maxWidth: '1240px' },

  maxWidth_xl: { maxWidth: '1920px' },

  maxWidth_unset: { maxWidth: 'unset' }
}), { name: 'AmauiBanner' });

export interface IBanner extends IBaseElement {
  size?: TSize;

  maxWidth?: string | number;
  actions?: TElement;
}

const Banner = React.forwardRef((props_: IBanner, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiBanner?.props?.default }), [props_]);

  const { classes } = useStyle(props);

  const {
    size = 'regular',

    maxWidth,
    actions,

    Component = 'div',

    style,
    className,

    children,

    ...other
  } = props;

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
        }}

        offsets={{
          md: 1
        }}
      >
        {actions}
      </Grid>
    );
  }

  if (!classes[`maxWidth_${maxWidth}`]) styles.root.maxWidth = maxWidth;

  return (
    <Component
      ref={ref}

      className={classNames([
        staticClassName('Banner', theme) && [
          'AmauiBanner-root',
          `AmauiBanner-size-${size}`,
          `AmauiBanner-max-width-${maxWidth}`
        ],

        className,
        classes.root
      ])}

      style={{
        ...styles.root,

        ...style
      }}
    >
      <ListItem
        size={size}

        Component={Grid}

        RootComponent={Grid}

        PrimaryProps={{
          version: 'b2'
        }}

        className={classNames([
          staticClassName('Banner', theme) && [
            'AmauiBanner-list-item'
          ],

          classes.listItem,
          classes[`size_${size}`],
          classes[`maxWidth_${maxWidth}`]
        ])}

        {...other}
      >
        {children}
      </ListItem>
    </Component>
  );
});

Banner.displayName = 'AmauiBanner';

export default Banner;
