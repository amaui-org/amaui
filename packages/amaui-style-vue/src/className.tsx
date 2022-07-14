import * as Vue from 'vue';

import is from '@amaui/utils/is';
import { classNames, TValue } from '@amaui/style';
import { IOptions } from '@amaui/style/style';

import { style } from '.';

// May be TValue or a string  as a string value literal
export default function className(value_: string | TValue, props_: any = {}, className_: string = '', options: IOptions = {}) {
  let value = value_;

  if (is('string', value_)) value = { a: value_ };

  const props = Vue.ref(props_);

  // Use styles
  const useStyle = style(value as TValue, options);

  const styles = useStyle(props);

  const classProp = Vue.computed(() => classNames([className_, styles.value.class]));

  return classProp;
}
