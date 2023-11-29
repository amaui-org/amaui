import React from 'react';

import is from '@amaui/utils/is';
import merge from '@amaui/utils/merge';
import hash from '@amaui/utils/hash';
import isEnvironment from '@amaui/utils/isEnvironment';
import { AmauiTheme, classNames } from '@amaui/style';
import { IAmauiTheme } from '@amaui/style/AmauiTheme';

import ThemeContext from './Context';
import useAmauiTheme from './useAmauiTheme';
import { ThemeRequired } from '../style';

export interface IThemeValue extends ThemeRequired {
  updateWithRerender: (value: IAmauiTheme) => ThemeRequired;
}

const resolveValue = (value: IAmauiTheme) => {
  const toFilterOut = ['id', 'element', 'subscriptions'];

  const valueNew: any = {};

  Object.keys(value).filter((item: any) => toFilterOut.indexOf(item) === -1).forEach((item: any) => valueNew[item] = value[item]);

  return valueNew;
};

interface ITheme extends React.HTMLAttributes<any> {
  root?: boolean;

  value?: IAmauiTheme;

  addCssVariables?: boolean;

  children?: any;
}

const Theme: React.FC<ITheme> = React.forwardRef((props, ref: any) => {
  const [init, setInit] = React.useState(false);

  const {
    root = false,

    value: valueLocal = {},

    addCssVariables = true,

    children,

    ...other
  } = props;

  const refs = {
    root: React.useRef<any>(),
    init: React.useRef<any>(),
    id: React.useId(),
    styleSheet: React.useRef<Element>()
  };

  refs.init.current = init;

  const valueParent = useAmauiTheme() as any || {};

  const [value, setValue] = React.useState<IThemeValue>(() => new AmauiTheme(merge(resolveValue(is('function', valueLocal) ? (valueLocal as any)(valueParent) : valueLocal), resolveValue(valueParent), { copy: true }) as any) as any);

  const addCssVariablesMethod = React.useCallback(() => {
    if (!refs.styleSheet.current) {
      refs.styleSheet.current = window.document.createElement('style');

      refs.styleSheet.current.setAttribute('data-amaui', 'true');
      refs.styleSheet.current.setAttribute('data-version', 'static');
      refs.styleSheet.current.setAttribute('data-name', 'vars');

      window.document.head.append(refs.styleSheet.current);
    }

    const values = [];

    const prefix = 'amaui';

    // Palette
    // Color
    Object.keys(value.palette.color).forEach(item => {
      Object.keys(value.palette.color[item]).forEach(itemValue => {
        values.push(`--${prefix}-palette-color-${item}-${itemValue}: ${value.palette.color[item][itemValue]}`);
      });
    });

    // Text
    Object.keys(value.palette.text).filter(item => !['active', 'divider', 'disabled', 'hover', 'focus', 'selected'].includes(item)).forEach(item => {
      Object.keys(value.palette.text[item]).forEach(itemValue => {
        values.push(`--${prefix}-palette-text-${item}-${itemValue}: ${value.palette.text[item][itemValue]}`);
      });
    });

    Object.keys(value.palette.text).filter(item => ['active', 'divider', 'disabled', 'hover', 'focus', 'selected'].includes(item)).forEach(item => {
      values.push(`--${prefix}-palette-text-${item}: ${value.palette.text[item]}`);
    });

    // Background
    Object.keys(value.palette.background).forEach(item => {
      Object.keys(value.palette.background[item]).forEach(itemValue => {
        values.push(`--${prefix}-palette-background-${item}-${itemValue}: ${value.palette.background[item][itemValue]}`);
      });
    });

    // Visual contrast
    Object.keys(value.palette.visual_contrast).forEach(item => {
      Object.keys(value.palette.visual_contrast[item].opacity).forEach(itemValue => {
        values.push(`--${prefix}-palette-visual-contrast-${item}-opacity-${itemValue}: ${value.palette.visual_contrast[item].opacity[itemValue]}`);
      });
    });

    // Shape
    values.push(`--${prefix}-shape-radius-unit: ${value.shape.radius.unit}`);

    Object.keys(value.shape.radius.values).forEach(item => {
      values.push(`--${prefix}-shape-radius-values-${item}: ${value.shape.radius.values[item]}`);
    });

    // Space
    values.push(`--${prefix}-space-unit: ${value.space.unit}`);

    Object.keys(value.space.values).forEach(item => {
      values.push(`--${prefix}-space-values-${item}: ${value.space.values[item]}`);
    });

    // Shadows
    Object.keys(value.shadows.values).forEach(item => {
      Object.keys(value.shadows.values[item]).forEach(itemValue => {
        values.push(`--${prefix}-shadows-${item}-${itemValue}: ${value.shadows.values[item][itemValue]}`);
      });
    });

    // Typography
    Object.keys(value.typography.font_family).forEach(item => values.push(`--${prefix}-typography-font-family-${item}: ${value.typography.font_family[item]}`));
    values.push(`--${prefix}-typography-font-size-html: ${value.typography.font_size.html}`);
    values.push(`--${prefix}-typography-unit: ${value.typography.unit}`);

    // Transitions
    Object.keys(value.transitions.duration).forEach(item => values.push(`--${prefix}-transitions-duration-${item}: ${value.transitions.duration[item]}`));
    Object.keys(value.transitions.timing_function).forEach(item => values.push(`--${prefix}-transitions-timing-function-${item}: ${value.transitions.timing_function[item]}`));

    // zIndex
    Object.keys(value.z_index).forEach(item => values.push(`--${prefix}-z-index-${item}: ${value.z_index[item]}`));

    // Add to styleSheet innerHTML
    refs.styleSheet.current.innerHTML = `
${refs.root.current ? `#${refs.id}` : ':root'} {
${values.map(item => `\t${item};`).join('\n')}
}
`;
  }, [value]);

  React.useEffect(() => {
    if (refs.root.current) {
      const amauiTheme = new AmauiTheme(value as any, { element: refs.root.current }) as any;

      amauiTheme.id = value.id;

      amauiTheme.subscriptions = value.subscriptions;

      // Init
      setValue(amauiTheme);
    }

    setInit(true);
  }, []);

  React.useEffect(() => {
    addCssVariablesMethod();
  }, [refs.root.current, valueParent, value]);

  React.useEffect(() => {
    if (init) {
      value.update(merge(resolveValue(is('function', valueLocal) ? (valueLocal as any)(valueParent) : valueLocal), resolveValue(valueParent), { copy: true }) as any);

      const amauiTheme = new AmauiTheme(value as any, { element: refs.root?.current }) as any;

      amauiTheme.id = value.id;

      amauiTheme.subscriptions = value.subscriptions;

      setValue(amauiTheme);
    }
  }, [hash(resolveValue(valueLocal as any)), valueParent?.palette?.light]);

  const update = (updateValue: IAmauiTheme) => {
    if (updateValue !== undefined) {
      // Update
      value.update(updateValue);

      const amauiTheme = new AmauiTheme(value as any, { element: refs.root?.current || (isEnvironment('browser') && window.document.body) }) as any;

      amauiTheme.id = value.id;

      amauiTheme.subscriptions = value.subscriptions;

      // Init
      setValue(amauiTheme);

      return value;
    }
  };

  // Update method
  (value as any).updateWithRerender = update;

  if (root) {
    return (
      <ThemeContext.Provider
        value={value}
      >
        <div
          ref={(item: any) => {
            refs.root.current = item;

            if (ref?.current) ref.current = item;
          }}

          {...other}

          id={refs.id}

          className={classNames(
            other?.className
          )}
        >
          {children}
        </div>
      </ThemeContext.Provider>
    );
  }

  return (
    <ThemeContext.Provider
      value={value}
    >
      {children}
    </ThemeContext.Provider>
  );
});

export default Theme;
