import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import { staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {

  },

  // Color
  version_filled_color_themed: {
    color: theme.palette.text.default.primary,
    backgroundColor: theme.palette.light ? theme.palette.background.default.primary : theme.palette.background.default.quaternary
  },

  version_filled_color_inverted: {
    color: theme.palette.background.default.primary,
    backgroundColor: theme.palette.light ? theme.palette.background.dark.primary : theme.palette.background.light.primary
  },

  version_filled_color_default: {
    color: theme.palette.text.default.primary,
    backgroundColor: theme.palette.background.default.primary
  },

  version_filled_color_neutral: {
    color: theme.methods.palette.color.text(theme.palette.color.neutral.main, true, 'light'),
    backgroundColor: theme.palette.color.neutral.main
  },

  version_filled_color_primary: {
    color: theme.methods.palette.color.text(theme.palette.color.primary.main, true, 'light'),
    backgroundColor: theme.palette.color.primary.main
  },

  version_filled_color_secondary: {
    color: theme.methods.palette.color.text(theme.palette.color.secondary.main, true, 'light'),
    backgroundColor: theme.palette.color.secondary.main
  },

  version_filled_color_tertiary: {
    color: theme.methods.palette.color.text(theme.palette.color.tertiary.main, true, 'light'),
    backgroundColor: theme.palette.color.tertiary.main
  },

  version_filled_color_quaternary: {
    color: theme.methods.palette.color.text(theme.palette.color.quaternary.main, true, 'light'),
    backgroundColor: theme.palette.color.quaternary.main
  },

  version_filled_color_info: {
    color: theme.methods.palette.color.text(theme.palette.color.info.main, true, 'light'),
    backgroundColor: theme.palette.color.info.main
  },

  version_filled_color_success: {
    color: theme.methods.palette.color.text(theme.palette.color.success.main, true, 'light'),
    backgroundColor: theme.palette.color.success.main
  },

  version_filled_color_warning: {
    color: theme.methods.palette.color.text(theme.palette.color.warning.main, true, 'light'),
    backgroundColor: theme.palette.color.warning.main
  },

  version_filled_color_error: {
    color: theme.methods.palette.color.text(theme.palette.color.error.main, true, 'light'),
    backgroundColor: theme.palette.color.error.main
  },

  // Tonal
  version_filled_tonal_color_neutral: {
    color: theme.methods.palette.color.value('neutral', 10),
    backgroundColor: theme.methods.palette.color.value('neutral', 95)
  },

  version_filled_tonal_color_primary: {
    color: theme.methods.palette.color.value('primary', 10),
    backgroundColor: theme.methods.palette.color.value('primary', 95)
  },

  version_filled_tonal_color_secondary: {
    color: theme.methods.palette.color.value('secondary', 10),
    backgroundColor: theme.methods.palette.color.value('secondary', 95)
  },

  version_filled_tonal_color_tertiary: {
    color: theme.methods.palette.color.value('tertiary', 10),
    backgroundColor: theme.methods.palette.color.value('tertiary', 95)
  },

  version_filled_tonal_color_quaternary: {
    color: theme.methods.palette.color.value('quaternary', 10),
    backgroundColor: theme.methods.palette.color.value('quaternary', 95)
  },

  version_filled_tonal_color_info: {
    color: theme.methods.palette.color.value('info', 10),
    backgroundColor: theme.methods.palette.color.value('info', 95)
  },

  version_filled_tonal_color_success: {
    color: theme.methods.palette.color.value('success', 10),
    backgroundColor: theme.methods.palette.color.value('success', 95)
  },

  version_filled_tonal_color_warning: {
    color: theme.methods.palette.color.value('warning', 10),
    backgroundColor: theme.methods.palette.color.value('warning', 95)
  },

  version_filled_tonal_color_error: {
    color: theme.methods.palette.color.value('error', 10),
    backgroundColor: theme.methods.palette.color.value('error', 95)
  },

  version_filled_tonal_secondary_color_neutral: {
    color: theme.methods.palette.color.value('neutral', 10),
    backgroundColor: theme.methods.palette.color.value('neutral', 80)
  },

  version_filled_tonal_secondary_color_primary: {
    color: theme.methods.palette.color.value('primary', 10),
    backgroundColor: theme.methods.palette.color.value('primary', 80)
  },

  version_filled_tonal_secondary_color_secondary: {
    color: theme.methods.palette.color.value('secondary', 10),
    backgroundColor: theme.methods.palette.color.value('secondary', 80)
  },

  version_filled_tonal_secondary_color_tertiary: {
    color: theme.methods.palette.color.value('tertiary', 10),
    backgroundColor: theme.methods.palette.color.value('tertiary', 80)
  },

  version_filled_tonal_secondary_color_quaternary: {
    color: theme.methods.palette.color.value('quaternary', 10),
    backgroundColor: theme.methods.palette.color.value('quaternary', 80)
  },

  version_filled_tonal_secondary_color_info: {
    color: theme.methods.palette.color.value('info', 10),
    backgroundColor: theme.methods.palette.color.value('info', 80)
  },

  version_filled_tonal_secondary_color_success: {
    color: theme.methods.palette.color.value('success', 10),
    backgroundColor: theme.methods.palette.color.value('success', 80)
  },

  version_filled_tonal_secondary_color_warning: {
    color: theme.methods.palette.color.value('warning', 10),
    backgroundColor: theme.methods.palette.color.value('warning', 80)
  },

  version_filled_tonal_secondary_color_error: {
    color: theme.methods.palette.color.value('error', 10),
    backgroundColor: theme.methods.palette.color.value('error', 80)
  },

  // Version
  // Text
  version_text_color_themed: {
    color: theme.palette.light ? theme.palette.text.default.primary : theme.palette.text.default.secondary
  },

  version_text_color_inverted: {
    color: theme.palette.background.default.primary
  },

  version_text_color_default: {
    color: theme.palette.text.default.primary
  },

  version_text_color_neutral: {
    color: theme.palette.color.neutral.main
  },

  version_text_color_primary: {
    color: theme.palette.color.primary.main
  },

  version_text_color_secondary: {
    color: theme.palette.color.secondary.main
  },

  version_text_color_tertiary: {
    color: theme.palette.color.tertiary.main
  },

  version_text_color_quaternary: {
    color: theme.palette.color.quaternary.main
  },

  version_text_color_info: {
    color: theme.palette.color.info.main
  },

  version_text_color_success: {
    color: theme.palette.color.success.main
  },

  version_text_color_warning: {
    color: theme.palette.color.warning.main
  },

  version_text_color_error: {
    color: theme.palette.color.error.main
  },

  // Tonal
  version_text_tonal_color_neutral: {
    color: theme.methods.palette.color.value('neutral', 40)
  },

  version_text_tonal_color_primary: {
    color: theme.methods.palette.color.value('primary', 40)
  },

  version_text_tonal_color_secondary: {
    color: theme.methods.palette.color.value('secondary', 40)
  },

  version_text_tonal_color_tertiary: {
    color: theme.methods.palette.color.value('tertiary', 40)
  },

  version_text_tonal_color_quaternary: {
    color: theme.methods.palette.color.value('quaternary', 40)
  },

  version_text_tonal_color_info: {
    color: theme.methods.palette.color.value('info', 40)
  },

  version_text_tonal_color_success: {
    color: theme.methods.palette.color.value('success', 40)
  },

  version_text_tonal_color_warning: {
    color: theme.methods.palette.color.value('warning', 40)
  },

  version_text_tonal_color_error: {
    color: theme.methods.palette.color.value('error', 40)
  },

  version_text_tonal_secondary_color_neutral: {
    color: theme.methods.palette.color.value('neutral', 30)
  },

  version_text_tonal_secondary_color_primary: {
    color: theme.methods.palette.color.value('primary', 30)
  },

  version_text_tonal_secondary_color_secondary: {
    color: theme.methods.palette.color.value('secondary', 30)
  },

  version_text_tonal_secondary_color_tertiary: {
    color: theme.methods.palette.color.value('tertiary', 30)
  },

  version_text_tonal_secondary_color_quaternary: {
    color: theme.methods.palette.color.value('quaternary', 30)
  },

  version_text_tonal_secondary_color_info: {
    color: theme.methods.palette.color.value('info', 30)
  },

  version_text_tonal_secondary_color_success: {
    color: theme.methods.palette.color.value('success', 30)
  },

  version_text_tonal_secondary_color_warning: {
    color: theme.methods.palette.color.value('warning', 30)
  },

  version_text_tonal_secondary_color_error: {
    color: theme.methods.palette.color.value('error', 30)
  },

  // Outlined
  version_outlined: {
    outlineWidth: '1px',
    outlineStyle: 'solid',
    outlineOffset: '-1px'
  },

  // Color
  version_outlined_color_themed: {
    color: theme.palette.text.default.primary,
    backgroundColor: theme.palette.light ? theme.palette.background.default.primary : theme.palette.background.default.quaternary,
    outlineColor: theme.palette.color.neutral[theme.palette.light ? 40 : 60]
  },

  version_outlined_color_inverted: {
    color: theme.palette.background.default.primary,
    backgroundColor: theme.palette.light ? theme.palette.background.dark.primary : theme.palette.background.light.primary,
    outlineColor: theme.palette.color.neutral[theme.palette.light ? 60 : 40]
  },

  version_outlined_color_default: {
    color: theme.palette.text.default.primary,
    backgroundColor: theme.palette.background.default.primary,
    outlineColor: theme.palette.color.neutral[theme.palette.light ? 40 : 60]
  },

  version_outlined_color_neutral: {
    color: theme.methods.palette.color.text(theme.palette.color.neutral.main, true, 'light'),
    backgroundColor: theme.palette.color.neutral.main,
    outlineColor: theme.palette.color.neutral[10]
  },

  version_outlined_color_primary: {
    color: theme.methods.palette.color.text(theme.palette.color.primary.main, true, 'light'),
    backgroundColor: theme.palette.color.primary.main,
    outlineColor: theme.palette.color.primary[10]
  },

  version_outlined_color_secondary: {
    color: theme.methods.palette.color.text(theme.palette.color.secondary.main, true, 'light'),
    backgroundColor: theme.palette.color.secondary.main,
    outlineColor: theme.palette.color.secondary[10]
  },

  version_outlined_color_tertiary: {
    color: theme.methods.palette.color.text(theme.palette.color.tertiary.main, true, 'light'),
    backgroundColor: theme.palette.color.tertiary.main,
    outlineColor: theme.palette.color.tertiary[10]
  },

  version_outlined_color_quaternary: {
    color: theme.methods.palette.color.text(theme.palette.color.quaternary.main, true, 'light'),
    backgroundColor: theme.palette.color.quaternary.main,
    outlineColor: theme.palette.color.quaternary[10]
  },

  version_outlined_color_info: {
    color: theme.methods.palette.color.text(theme.palette.color.info.main, true, 'light'),
    backgroundColor: theme.palette.color.info.main,
    outlineColor: theme.palette.color.info[10]
  },

  version_outlined_color_success: {
    color: theme.methods.palette.color.text(theme.palette.color.success.main, true, 'light'),
    backgroundColor: theme.palette.color.success.main,
    outlineColor: theme.palette.color.success[10]
  },

  version_outlined_color_warning: {
    color: theme.methods.palette.color.text(theme.palette.color.warning.main, true, 'light'),
    backgroundColor: theme.palette.color.warning.main,
    outlineColor: theme.palette.color.warning[10]
  },

  version_outlined_color_error: {
    color: theme.methods.palette.color.text(theme.palette.color.error.main, true, 'light'),
    backgroundColor: theme.palette.color.error.main,
    outlineColor: theme.palette.color.error[10]
  },

  // Tonal
  version_outlined_tonal_color_neutral: {
    color: theme.methods.palette.color.value('neutral', 5),
    backgroundColor: theme.methods.palette.color.value('neutral', 99),
    outlineColor: theme.methods.palette.color.value('neutral', 10)
  },

  version_outlined_tonal_color_primary: {
    color: theme.methods.palette.color.value('primary', 5),
    backgroundColor: theme.methods.palette.color.value('neutral', 99),
    outlineColor: theme.methods.palette.color.value('primary', 10)
  },

  version_outlined_tonal_color_secondary: {
    color: theme.methods.palette.color.value('secondary', 5),
    backgroundColor: theme.methods.palette.color.value('secondary', 99),
    outlineColor: theme.methods.palette.color.value('secondary', 10)
  },

  version_outlined_tonal_color_tertiary: {
    color: theme.methods.palette.color.value('tertiary', 5),
    backgroundColor: theme.methods.palette.color.value('tertiary', 99),
    outlineColor: theme.methods.palette.color.value('tertiary', 10)
  },

  version_outlined_tonal_color_quaternary: {
    color: theme.methods.palette.color.value('quaternary', 5),
    backgroundColor: theme.methods.palette.color.value('quaternary', 99),
    outlineColor: theme.methods.palette.color.value('quaternary', 10)
  },

  version_outlined_tonal_color_info: {
    color: theme.methods.palette.color.value('info', 5),
    backgroundColor: theme.methods.palette.color.value('info', 99),
    outlineColor: theme.methods.palette.color.value('info', 10)
  },

  version_outlined_tonal_color_success: {
    color: theme.methods.palette.color.value('success', 5),
    backgroundColor: theme.methods.palette.color.value('success', 99),
    outlineColor: theme.methods.palette.color.value('success', 10)
  },

  version_outlined_tonal_color_warning: {
    color: theme.methods.palette.color.value('warning', 5),
    backgroundColor: theme.methods.palette.color.value('warning', 99),
    outlineColor: theme.methods.palette.color.value('warning', 10)
  },

  version_outlined_tonal_color_error: {
    color: theme.methods.palette.color.value('error', 5),
    backgroundColor: theme.methods.palette.color.value('error', 99),
    outlineColor: theme.methods.palette.color.value('error', 10)
  },

  version_outlined_tonal_secondary_color_neutral: {
    color: theme.methods.palette.color.value('neutral', 10),
    backgroundColor: theme.methods.palette.color.value('neutral', 95),
    outlineColor: theme.methods.palette.color.value('neutral', 10)
  },

  version_outlined_tonal_secondary_color_primary: {
    color: theme.methods.palette.color.value('primary', 10),
    backgroundColor: theme.methods.palette.color.value('neutral', 95),
    outlineColor: theme.methods.palette.color.value('primary', 10)
  },

  version_outlined_tonal_secondary_color_secondary: {
    color: theme.methods.palette.color.value('secondary', 10),
    backgroundColor: theme.methods.palette.color.value('secondary', 95),
    outlineColor: theme.methods.palette.color.value('secondary', 10)
  },

  version_outlined_tonal_secondary_color_tertiary: {
    color: theme.methods.palette.color.value('tertiary', 10),
    backgroundColor: theme.methods.palette.color.value('tertiary', 95),
    outlineColor: theme.methods.palette.color.value('tertiary', 10)
  },

  version_outlined_tonal_secondary_color_quaternary: {
    color: theme.methods.palette.color.value('quaternary', 10),
    backgroundColor: theme.methods.palette.color.value('quaternary', 95),
    outlineColor: theme.methods.palette.color.value('quaternary', 10)
  },

  version_outlined_tonal_secondary_color_info: {
    color: theme.methods.palette.color.value('info', 10),
    backgroundColor: theme.methods.palette.color.value('info', 95),
    outlineColor: theme.methods.palette.color.value('info', 10)
  },

  version_outlined_tonal_secondary_color_success: {
    color: theme.methods.palette.color.value('success', 10),
    backgroundColor: theme.methods.palette.color.value('success', 95),
    outlineColor: theme.methods.palette.color.value('success', 10)
  },

  version_outlined_tonal_secondary_color_warning: {
    color: theme.methods.palette.color.value('warning', 10),
    backgroundColor: theme.methods.palette.color.value('warning', 95),
    outlineColor: theme.methods.palette.color.value('warning', 10)
  },

  version_outlined_tonal_secondary_color_error: {
    color: theme.methods.palette.color.value('error', 10),
    backgroundColor: theme.methods.palette.color.value('error', 95),
    outlineColor: theme.methods.palette.color.value('error', 10)
  },

  // Outlined without backgroundColor
  'version_outlined-without-background': {
    outlineWidth: '1px',
    outlineStyle: 'solid',
    outlineOffset: '-1px'
  },

  // Color
  'version_outlined-without-background_color_themed': {
    color: theme.palette.light ? theme.palette.text.default.primary : theme.palette.background.default.secondary,
    outlineColor: theme.palette.light ? theme.palette.text.default.primary : theme.palette.background.default.secondary
  },

  'version_outlined-without-background_color_inverted': {
    color: theme.palette.background.default.primary,
    outlineColor: theme.palette.background.default.primary
  },

  'version_outlined-without-background_color_default': {
    color: theme.palette.text.default.primary,
    outlineColor: theme.palette.text.default.primary
  },

  'version_outlined-without-background_color_neutral': {
    color: theme.palette.color.neutral.main,
    outlineColor: theme.palette.color.neutral.main
  },

  'version_outlined-without-background_color_primary': {
    color: theme.palette.color.primary.main,
    outlineColor: theme.palette.color.primary.main
  },

  'version_outlined-without-background_color_secondary': {
    color: theme.palette.color.secondary.main,
    outlineColor: theme.palette.color.secondary.main
  },

  'version_outlined-without-background_color_tertiary': {
    color: theme.palette.color.tertiary.main,
    outlineColor: theme.palette.color.tertiary.main
  },

  'version_outlined-without-background_color_quaternary': {
    color: theme.palette.color.quaternary.main,
    outlineColor: theme.palette.color.quaternary.main
  },

  'version_outlined-without-background_color_info': {
    color: theme.palette.color.info.main,
    outlineColor: theme.palette.color.info.main
  },

  'version_outlined-without-background_color_success': {
    color: theme.palette.color.success.main,
    outlineColor: theme.palette.color.success.main
  },

  'version_outlined-without-background_color_warning': {
    color: theme.palette.color.warning.main,
    outlineColor: theme.palette.color.warning.main
  },

  'version_outlined-without-background_color_error': {
    color: theme.palette.color.error.main,
    outlineColor: theme.palette.color.error.main
  },

  // Tonal
  'version_outlined-without-background_tonal_color_neutral': {
    color: theme.methods.palette.color.value('neutral', 50),
    outlineColor: theme.methods.palette.color.value('neutral', 30)
  },

  'version_outlined-without-background_tonal_color_primary': {
    color: theme.methods.palette.color.value('primary', 50),
    outlineColor: theme.methods.palette.color.value('primary', 30)
  },

  'version_outlined-without-background_tonal_color_secondary': {
    color: theme.methods.palette.color.value('secondary', 50),
    outlineColor: theme.methods.palette.color.value('secondary', 30)
  },

  'version_outlined-without-background_tonal_color_tertiary': {
    color: theme.methods.palette.color.value('tertiary', 50),
    outlineColor: theme.methods.palette.color.value('tertiary', 30)
  },

  'version_outlined-without-background_tonal_color_quaternary': {
    color: theme.methods.palette.color.value('quaternary', 50),
    outlineColor: theme.methods.palette.color.value('quaternary', 30)
  },

  'version_outlined-without-background_tonal_color_info': {
    color: theme.methods.palette.color.value('info', 50),
    outlineColor: theme.methods.palette.color.value('info', 30)
  },

  'version_outlined-without-background_tonal_color_success': {
    color: theme.methods.palette.color.value('success', 50),
    outlineColor: theme.methods.palette.color.value('success', 30)
  },

  'version_outlined-without-background_tonal_color_warning': {
    color: theme.methods.palette.color.value('warning', 50),
    outlineColor: theme.methods.palette.color.value('warning', 30)
  },

  'version_outlined-without-background_tonal_color_error': {
    color: theme.methods.palette.color.value('error', 50),
    outlineColor: theme.methods.palette.color.value('error', 30)
  },

  'version_outlined-without-background_tonal_secondary_color_neutral': {
    color: theme.methods.palette.color.value('neutral', 40),
    outlineColor: theme.methods.palette.color.value('neutral', 20)
  },

  'version_outlined-without-background_tonal_secondary_color_primary': {
    color: theme.methods.palette.color.value('primary', 40),
    outlineColor: theme.methods.palette.color.value('primary', 20)
  },

  'version_outlined-without-background_tonal_secondary_color_secondary': {
    color: theme.methods.palette.color.value('secondary', 40),
    outlineColor: theme.methods.palette.color.value('secondary', 20)
  },

  'version_outlined-without-background_tonal_secondary_color_tertiary': {
    color: theme.methods.palette.color.value('tertiary', 40),
    outlineColor: theme.methods.palette.color.value('tertiary', 20)
  },

  'version_outlined-without-background_tonal_secondary_color_quaternary': {
    color: theme.methods.palette.color.value('quaternary', 40),
    outlineColor: theme.methods.palette.color.value('quaternary', 20)
  },

  'version_outlined-without-background_tonal_secondary_color_info': {
    color: theme.methods.palette.color.value('info', 40),
    outlineColor: theme.methods.palette.color.value('info', 20)
  },

  'version_outlined-without-background_tonal_secondary_color_success': {
    color: theme.methods.palette.color.value('success', 40),
    outlineColor: theme.methods.palette.color.value('success', 20)
  },

  'version_outlined-without-background_tonal_secondary_color_warning': {
    color: theme.methods.palette.color.value('warning', 40),
    outlineColor: theme.methods.palette.color.value('warning', 20)
  },

  'version_outlined-without-background_tonal_secondary_color_error': {
    color: theme.methods.palette.color.value('error', 40),
    outlineColor: theme.methods.palette.color.value('error', 20)
  },

  // Elevation
  elevation_0: {
    boxShadow: theme.shadows.values.neutral[0]
  },

  elevation_1: {
    boxShadow: theme.palette.light ? theme.shadows.values.neutral[1] : undefined,
    backgroundColorImage: !theme.palette.light ? 'linear-gradient(rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.04))' : undefined,
  },

  elevation_2: {
    boxShadow: theme.palette.light ? theme.shadows.values.neutral[2] : undefined,
    backgroundColorImage: !theme.palette.light ? 'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))' : undefined,
  },

  elevation_3: {
    boxShadow: theme.palette.light ? theme.shadows.values.neutral[3] : undefined,
    backgroundColorImage: !theme.palette.light ? 'linear-gradient(rgba(255, 255, 255, 0.07), rgba(255, 255, 255, 0.07))' : undefined,
  },

  elevation_4: {
    boxShadow: theme.palette.light ? theme.shadows.values.neutral[4] : undefined,
    backgroundColorImage: !theme.palette.light ? 'linear-gradient(rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08))' : undefined,
  },

  elevation_6: {
    boxShadow: theme.palette.light ? theme.shadows.values.neutral[6] : undefined,
    backgroundColorImage: !theme.palette.light ? 'linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1))' : undefined,
  },

  elevation_8: {
    boxShadow: theme.palette.light ? theme.shadows.values.neutral[8] : undefined,
    backgroundColorImage: !theme.palette.light ? 'linear-gradient(rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.12))' : undefined,
  },

  elevation_9: {
    boxShadow: theme.palette.light ? theme.shadows.values.neutral[9] : undefined,
    backgroundColorImage: !theme.palette.light ? 'linear-gradient(rgba(255, 255, 255, 0.13), rgba(255, 255, 255, 0.13))' : undefined,
  },

  elevation_12: {
    boxShadow: theme.palette.light ? theme.shadows.values.neutral[12] : undefined,
    backgroundColorImage: !theme.palette.light ? 'linear-gradient(rgba(255, 255, 255, 0.16), rgba(255, 255, 255, 0.16))' : undefined,
  },

  elevation_16: {
    boxShadow: theme.palette.light ? theme.shadows.values.neutral[16] : undefined,
    backgroundColorImage: !theme.palette.light ? 'linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2))' : undefined,
  },

  elevation_24: {
    boxShadow: theme.palette.light ? theme.shadows.values.neutral[24] : undefined,
    backgroundColorImage: !theme.palette.light ? 'linear-gradient(rgba(255, 255, 255, 0.28), rgba(255, 255, 255, 0.28))' : undefined,
  },

  noOutline: {
    outline: 'none'
  }
}), { name: 'AmauiSurface' });

const Surface = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiSurface?.props?.default }), [props_]);

  const { classes } = useStyle(props);

  const {
    tonal,
    color: color_ = props.tonal ? 'neutral' : 'default',
    version = 'filled',
    elevation,
    backgroundOpacity,
    noOutline,

    start,

    Component = 'div',

    AdditionalProps,

    className,
    style,

    children,

    ...other
  } = props;

  const styles: any = {
    root: {},
    children: {}
  };

  let color = color_;
  let palette: any = {};

  if (!theme.palette.color[color] && !['themed', 'inverted', 'default', 'inherit'].includes(color)) {
    palette = theme.methods.color(color);

    if (tonal) {
      styles.root.color = theme.methods.palette.color.value(color, 10, true, palette);

      if (version === 'filled') styles.root.backgroundColor = theme.methods.palette.color.value(color, tonal === 'secondary' ? 80 : 95, true, palette);

      if (version === 'outlined') {
        styles.root.color = theme.methods.palette.color.value(color, tonal === 'secondary' ? 10 : 5, true, palette);
        styles.root.backgroundColor = theme.methods.palette.color.value(color, tonal === 'secondary' ? 95 : 99, true, palette);
        styles.root.outlineColor = theme.methods.palette.color.value(color, tonal === 'secondary' ? 20 : 10, true, palette);
      }

      if (version === 'outlined-without-background') {
        styles.root.color = theme.methods.palette.color.value(color, tonal === 'secondary' ? 40 : 50, true, palette);
        styles.root.outlineColor = theme.methods.palette.color.value(color, tonal === 'secondary' ? 20 : 30, true, palette);

        delete styles.root.backgroundColor;
      }

      if (version === 'text') styles.root.color = theme.methods.palette.color.value(color, tonal === 'secondary' ? 30 : 40, true, palette);
    }
    else {
      styles.root.color = theme.methods.palette.color.text(palette.main, true);

      if (['outlined', 'filled'].includes(version)) styles.root.backgroundColor = palette.main;

      if (version === 'outlined') styles.root.outlineColor = palette[10];

      if (version === 'outlined-without-background') {
        styles.root.color = palette[40];
        styles.root.outlineColor = palette[30];
      }

      if (version === 'text') styles.root.color = palette.main;
    }

    styles.children.backgroundColor = styles.root.backgroundColor;
  }
  else {
    if (version === 'filled') {
      if (color === 'themed') {
        styles.children.color = theme.palette.text.default.primary;
        styles.children.backgroundColor = theme.palette.light ? theme.palette.background.default.primary : theme.palette.background.default.quaternary;
      }
      else if (color === 'inverted') {
        styles.children.color = theme.palette.background.default.primary;
        styles.children.backgroundColor = theme.palette.light ? theme.palette.background.dark.primary : theme.palette.background.light.primary;
      }
      else if (color === 'default') {
        styles.children.color = theme.palette.text.default.primary;
        styles.children.backgroundColor = theme.palette.background.default.primary;
      }
      else if (color === 'inherit') {
        styles.children.color = 'inherit';
      }
      else {
        if (!tonal) {
          styles.children.color = theme.methods.palette.color.text((theme.palette.color[color] as any).main, true, 'light');
          styles.children.backgroundColor = (theme.palette.color[color] as any).main;
        }
        else if (tonal === 'secondary') {
          styles.children.color = theme.methods.palette.color.value(color, 10);
          styles.children.backgroundColor = theme.methods.palette.color.value(color, 80);
        }
        else {
          styles.children.color = theme.methods.palette.color.value(color, 10);
          styles.children.backgroundColor = theme.methods.palette.color.value(color, 95);
        }
      }
    }
    else if (version === 'text') {
      if (color === 'themed') {
        styles.children.color = theme.palette.light ? theme.palette.text.default.primary : theme.palette.text.default.secondary;
      }
      else if (color === 'inverted') {
        styles.children.color = theme.palette.background.default.primary;
      }
      else if (color === 'default') {
        styles.children.color = theme.palette.text.default.primary;
      }
      else if (color === 'inherit') {
        styles.children.color = 'inherit';
      }
      else {
        if (!tonal) {
          styles.children.color = (theme.palette.color[color] as any).main;
        }
        else if (tonal === 'secondary') {
          styles.children.color = theme.methods.palette.color.value(color, 30);
        }
        else {
          styles.children.color = theme.methods.palette.color.value(color, 40);
        }
      }
    }
    else if (version === 'outlined') {
      if (color === 'themed') {
        styles.children.color = theme.palette.text.default.primary;
        styles.children.backgroundColor = theme.palette.light ? theme.palette.background.default.primary : theme.palette.background.default.quaternary;
        styles.children.outlineColor = theme.palette.color.neutral[theme.palette.light ? 40 : 60];
      }
      else if (color === 'inverted') {
        styles.children.color = theme.palette.background.default.primary;
        styles.children.backgroundColor = theme.palette.light ? theme.palette.background.dark.primary : theme.palette.background.light.primary;
        styles.children.outlineColor = theme.palette.color.neutral[theme.palette.light ? 60 : 40];
      }
      else if (color === 'default') {
        styles.children.color = theme.palette.text.default.primary;
        styles.children.backgroundColor = theme.palette.background.default.primary;
        styles.children.outlineColor = theme.palette.color.neutral[theme.palette.light ? 40 : 60];
      }
      else if (color === 'inherit') {
        styles.children.color = 'inherit';
      }
      else {
        if (!tonal) {
          styles.children.color = theme.methods.palette.color.text(theme.palette.color.neutral.main, true, 'light');
          styles.children.backgroundColor = theme.palette.color.neutral.main;
          styles.children.outlineColor = theme.palette.color.neutral[10];
        }
        else if (tonal === 'secondary') {
          styles.children.color = theme.methods.palette.color.value(color, 10);
          styles.children.backgroundColor = theme.methods.palette.color.value(color, 95);
          styles.children.outlineColor = theme.methods.palette.color.value(color, 10);
        }
        else {
          styles.children.color = theme.methods.palette.color.value(color, 5);
          styles.children.backgroundColor = theme.methods.palette.color.value(color, 99);
          styles.children.outlineColor = theme.methods.palette.color.value(color, 10);
        }
      }
    }
    else if (version === 'outlined-without-background') {
      if (color === 'themed') {
        styles.children.color = theme.palette.light ? theme.palette.text.default.primary : theme.palette.background.default.secondary;
        styles.children.outlineColor = theme.palette.light ? theme.palette.text.default.primary : theme.palette.background.default.secondary;
      }
      else if (color === 'inverted') {
        styles.children.color = theme.palette.background.default.primary;
        styles.children.outlineColor = theme.palette.background.default.primary;
      }
      else if (color === 'default') {
        styles.children.color = theme.palette.text.default.primary;
        styles.children.outlineColor = theme.palette.color.neutral[theme.palette.light ? 40 : 60];
      }
      else if (color === 'inherit') {
        styles.children.color = 'inherit';
      }
      else {
        if (!tonal) {
          styles.children.color = theme.palette.text.default.primary;
          styles.children.outlineColor = theme.palette.text.default.primary;
        }
        else if (tonal === 'secondary') {
          styles.children.color = theme.methods.palette.color.value(color, 40);
          styles.children.outlineColor = theme.methods.palette.color.value(color, 20);
        }
        else {
          styles.children.color = theme.methods.palette.color.value(color, 50);
          styles.children.outlineColor = theme.methods.palette.color.value(color, 30);
        }
      }
    }

    palette = theme.palette.color[color];
  }

  if (backgroundOpacity !== undefined) {
    if (color === 'themed') color = theme.palette.light ? theme.palette.background.default.primary : theme.palette.background.default.quaternary;
    if (color === 'inverted') color = theme.palette.light ? theme.palette.background.dark.primary : theme.palette.background.light.primary;
    if (color === 'default') color = theme.palette.background.default.primary;
    if (color === 'inherit') color = theme.palette.background.default.primary;

    palette = theme.methods.color(color);

    if (tonal) {
      if (version === 'filled') styles.root.backgroundColor = theme.methods.palette.color.value(color, tonal === 'secondary' ? 80 : 95, true, palette);

      if (version === 'outlined') {
        styles.root.backgroundColor = theme.methods.palette.color.value(color, tonal === 'secondary' ? 95 : 99, true, palette);
      }
    }
    else {
      if (['outlined', 'filled'].includes(version)) styles.root.backgroundColor = theme.methods.palette.color.value(color, 'main' as any, true, palette);
    }

    if (styles.root.backgroundColor) styles.root.backgroundColor = theme.methods.palette.color.colorToRgb(styles.root.backgroundColor, backgroundOpacity);
  }

  if (is('function', children)) return children({ ...styles.children, palette });

  return (
    <Component
      ref={ref}

      className={classNames([
        staticClassName('Surface', theme) && [
          'AmauiSurface-root',
          `AmauiSurface-color-${!theme.palette.color[color] && !['themed', 'inverted', 'default', 'inherit'].includes(color) ? 'new' : color}`,
          `AmauiSurface-version-${version}`,
          tonal && `AmauiSurface-tonal${is('string', tonal) ? `-${tonal}` : ''}`,
          elevation && `AmauiSurface-elevation-${elevation}`,
          noOutline && `AmauiSurface-noOutlined`
        ],

        className,
        classes.root,
        classes[`version_${version}`],
        classes[`version_${version}_color_${color}`],
        classes[`elevation_${elevation}`],
        tonal && classes[`version_${version}_tonal_${is('string', tonal) ? `${tonal}_` : ''}color_${color}`],
        noOutline && classes.noOutline
      ])}

      style={{
        ...style,

        ...styles.root
      }}

      {...AdditionalProps}

      {...other}
    >
      {children && React.Children.toArray(children)
        .filter(Boolean)
        .map((item: any, index: number) => {
          if (is('simple', item)) return item;

          return (
            React.cloneElement(item, {
              key: `${item.key || ''}${index}`
            })
          );
        })}
    </Component>
  );
});

Surface.displayName = 'AmauiSurface';

export default Surface;
