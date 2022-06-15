import * as AllAmauiStyle from '@amaui/style';

// Export amauiStyle methods as lvl 1 variables
export const AmauiStyle = AllAmauiStyle.AmauiStyle;
export const AmauiTheme = AllAmauiStyle.AmauiTheme;

export * from '@amaui/style/utils';

export const colors = AllAmauiStyle.colors;
export const classNames = AllAmauiStyle.classNames;

export const makeClassName = AllAmauiStyle.makeClassName;
export const prefix = AllAmauiStyle.prefix;
export const rtl = AllAmauiStyle.rtl;
export const sort = AllAmauiStyle.sort;
export const unit = AllAmauiStyle.unit;
export const valueObject = AllAmauiStyle.valueObject;

// Export all other
export { default as AmauiStyleProvider } from './AmauiStyleProvider';

export { default as AmauiThemeProvider } from './AmauiThemeProvider';

export { default as reset } from './reset';
// Alias
export { default as r } from './reset';

export { default as pure } from './pure';
// Alias
export { default as p } from './pure';

export { default as style } from './style';
// Alias
export { default as s } from './style';

export { default as inline } from './inline';
// Alias
export { default as i } from './inline';

export { default as string } from './string';
// Alias
export { default as sr } from './string';

export { default as className } from './className';
// Alias
export { default as c } from './className';
export { default as cs } from './className';

export { default as withStyle } from '../../amaui-style-vue/src/withStyle';
// Alias
export { default as w } from '../../amaui-style-vue/src/withStyle';

export { default as styled } from './styled';
// Alias
export { default as sy } from './styled';
