import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Type from '../Type';
import Line from '../Line';

import { staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {
    cursor: 'pointer',
    userSelect: 'none'
  },

  text_disabled: {
    opacity: theme.palette.visual_contrast.default.opacity.disabled
  },

  disabled: {
    cursor: 'default',
    pointerEvents: 'none'
  }
}), { name: 'AmauiLabel' });

const Label = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiLabel?.props?.default }), [props_]);

  const { classes } = useStyle(props);

  const {
    tonal,
    color,
    colorUnchecked,
    version,

    position: position_,

    size = 'regular',

    input,
    label,

    value,

    checked,

    disabled,

    Component = 'label',

    TypeProps,

    className,

    children: children_,

    ...other
  } = props;

  let position = position_;

  const children: any[] = React.Children.toArray(children_);

  const Input = input !== undefined ? input : children[0];

  const Text = label !== undefined ? label : children[1];

  const inlineElement = ['AmauiCheckbox', 'AmauiRadio', 'AmauiSwitch'].includes(Input?.type?.displayName);

  const padding = !['AmauiCheckbox', 'AmauiRadio'].includes(Input?.type?.displayName);

  let align = 'center';

  let justify = 'center';

  if (!inlineElement) align = 'flex-start';

  if (position === undefined) position = inlineElement ? 'start' : 'bottom';

  return (
    <Line
      ref={ref}

      gap={!padding ? 0 : 1}

      direction={['top', 'bottom'].includes(position) ? position === 'bottom' ? 'column-reverse' : 'column' : position === 'end' ? 'row-reverse' : 'row'}

      align={align}

      justify={justify}

      Component={Component}

      className={classNames([
        staticClassName('Label', theme) && [
          'AmauiLabel-root',
          `AmauiLabel-position-${position}`,
          disabled && `AmauiLabel-disabled`
        ],

        className,
        classes.root,
        disabled && classes.disabled
      ])}

      disabled={disabled}

      {...other}
    >
      {Input && React.cloneElement(Input, {
        className: classNames([
          staticClassName('Label', theme) && [
            'AmauiLabel-input'
          ],

          classes.input
        ]),

        tonal,
        color,
        colorUnchecked,
        version,

        size,

        checked,

        disabled
      })}

      {Text !== undefined && is('simple', Text) ? (
        <Type
          version={size === 'regular' ? 'b2' : size === 'large' ? 'b1' : 'b3'}

          className={classNames([
            staticClassName('Label', theme) && [
              'AmauiLabel-text'
            ],

            classes.text,
            disabled && classes.text_disabled
          ])}

          {...TypeProps}
        >
          {Text}
        </Type>
      ) : Text}
    </Line>
  );
});

Label.displayName = 'AmauiLabel';

export default Label;
