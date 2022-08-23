import React from 'react';

import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import { staticClassName } from '../utils';

import ListItem from '../ListItem';
import Grid from '../Grid';
import Line from '../Line';

const useStyle = style(theme => ({
  root: {
    width: '100%'
  },

  listItem: {
    margin: '0 auto'
  },

  // Color
  color_default: { background: theme.palette.background.default.primary },

  color_neutral: { background: theme.palette.color.neutral.main },

  color_primary: { background: theme.palette.color.primary.main },

  color_secondary: { background: theme.palette.color.secondary.main },

  color_tertiary: { background: theme.palette.color.tertiary.main },

  color_quaternary: { background: theme.palette.color.quaternary.main },

  color_info: { background: theme.palette.color.info.main },

  color_success: { background: theme.palette.color.success.main },

  color_warning: { background: theme.palette.color.warning.main },

  color_error: { background: theme.palette.color.error.main },

  // Tonal
  tonal_color_neutral: { background: theme.palette.color.neutral[theme.palette.light ? 95 : 10] },

  tonal_color_primary: { background: theme.palette.color.primary[theme.palette.light ? 95 : 10] },

  tonal_color_secondary: { background: theme.palette.color.secondary[theme.palette.light ? 95 : 10] },

  tonal_color_tertiary: { background: theme.palette.color.tertiary[theme.palette.light ? 95 : 10] },

  tonal_color_quaternary: { background: theme.palette.color.quaternary[theme.palette.light ? 95 : 10] },

  tonal_color_info: { background: theme.palette.color.info[theme.palette.light ? 95 : 10] },

  tonal_color_success: { background: theme.palette.color.success[theme.palette.light ? 95 : 10] },

  tonal_color_warning: { background: theme.palette.color.warning[theme.palette.light ? 95 : 10] },

  tonal_color_error: { background: theme.palette.color.error[theme.palette.light ? 95 : 10] },

  small: {
    padding: `${theme.methods.space.value('md') * 0.5}px ${theme.methods.space.value('rg') * 0.75}px`
  },

  regular: {
    padding: `${theme.methods.space.value('md', 'px')} ${theme.methods.space.value('rg', 'px')}`
  },

  large: {
    padding: `${theme.methods.space.value('md') * 1.5}px ${theme.methods.space.value('rg') * 1.25}px`
  },

  // maxWidth
  maxWidth_xxs: { maxWidth: '320px' },

  maxWidth_xs: { maxWidth: '400px' },

  maxWidth_sm: { maxWidth: '600px' },

  maxWidth_rg: { maxWidth: '960px' },

  maxWidth_lg: { maxWidth: '1240px' },

  maxWidth_xl: { maxWidth: '1920px' },

  maxWidth_unset: { maxWidth: 'unset' },

  root_: {
    padding: '0 !important'
  }
}), { name: 'AmauiBanner' });

const Banner = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiBanner?.props?.default }), [props_]);

  const { classes } = useStyle(props);

  const {
    tonal,
    color = 'default',
    maxWidth,
    actions,
    size = 'regular',

    Component = 'div',

    style,
    className,

    children,

    ...other
  } = props;

  const styles: any = {
    root: {}
  };

  other.tonal = tonal;
  other.color = color;

  if (actions) {
    other.line = true;

    other.RootProps = {};

    other.RootProps.values = {
      md: 8
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
      >
        {actions}
      </Grid>
    );
  }

  const palette = !theme.palette.color[color] && theme.methods.color(color);

  if (!classes[color] && color !== 'default') styles.root.background = !tonal ? palette.main : palette[theme.palette.light ? 95 : 10];

  if (!classes[maxWidth]) styles.root.maxWidth = maxWidth;

  return (
    <Component
      ref={ref}

      className={classNames([
        staticClassName('Banner', theme) && [
          'AmauiBanner-root',
          `AmauiBanner-color-${!classes[color] ? 'new' : color}`,
          tonal && `AmauiBanner-tonal`
        ],

        className,
        classes.root,
        classes[`color_${color}`],
        tonal && classes[`tonal_color_${color}`]
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

        classes={{
          root: classes.root_
        }}

        className={classNames([
          staticClassName('Banner', theme) && [
            'AmauiBanner-root-listItem'
          ],

          classes.listItem,
          classes[size],
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
