// import { classNames, TValue } from '@amaui/style';
// import { IOptions } from '@amaui/style/style';
// import { is } from '@amaui/utils';

// import { style } from '.';

// // May be TValue or a string  as a string value literal
// export default function className(value_: string | TValue, className_: string = '', props: any = {}, options_: IOptions = {}) {
//   let value = value_;

//   if (is('string', value_)) value = { a: value_ };

//   // Use styles
//   const useStyle = style(value as TValue, options_);

//   const styles = useStyle(props);

//   return classNames([className_, styles.class]);
// }
