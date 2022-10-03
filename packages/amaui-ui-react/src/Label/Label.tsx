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
    position = 'start',

    size = 'regular',

    value,

    disabled,

    Component = 'label',

    TypeProps,

    className,

    children: children_,

    ...other
  } = props;

  const children: any[] = React.Children.toArray(children_);

  const padding = ['AmauiSwitch'].includes(children[0]?.type?.displayName);

  return (
    <Line
      ref={ref}

      gap={!padding ? 0 : 1}

      direction={['top', 'bottom'].includes(position) ? position === 'bottom' ? 'column-reverse' : 'column' : position === 'end' ? 'row-reverse' : 'row'}

      align='center'

      justify='center'

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
      {children[0] && React.cloneElement(children[0], {
        className: classNames([
          staticClassName('Label', theme) && [
            'AmauiLabel-input'
          ],

          classes.input
        ]),

        size,

        disabled
      })}

      {children[1] !== undefined && is('simple', children[1]) ? (
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
          {children[1]}
        </Type>
      ) : children[1]}
    </Line>
  );
});

Label.displayName = 'AmauiLabel';

export default Label;
