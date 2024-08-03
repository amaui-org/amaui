import React from 'react';

import { clamp } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import DividerElement from '../Divider';
import LineElement from '../Line';
import { ILine } from '../Line/Line';
import { staticClassName } from '../utils';
import { ITonal, IColor, IVersion, IPropsAny } from '../types';

const useStyle = styleMethod(theme => ({
  root: {

  },

  orientation_horizontal: {
    width: '100%'
  },

  inactive: {
    pointerEvents: 'none',
    cursor: 'default'
  },

  divider: {
    margin: '0',

    '&.amaui-Divider-root': {
      transition: theme.methods.transitions.make(['background', 'width', 'height'])
    }
  },

  divider_active: {
    '&.amaui-Divider-root': {
      opacity: '1'
    }
  },

  divider_orientation_horizontal: {
    '&.amaui-Divider-root': {
      minWidth: '14px'
    }
  },

  divider_orientation_vertical: {
    alignSelf: 'flex-start',
    transform: 'translateX(-50%)',

    '&.amaui-Divider-root': {
      minHeight: 14,
      marginInlineStart: '20px'
    }
  },

  divider_orientation_vertical_stepDirection_column: {
    alignSelf: 'center',

    '&.amaui-Divider-root': {
      margin: '0px'
    }
  },

  divider_active_orientation_horizontal: {
    '&.amaui-Divider-root': {
      height: '2px'
    }
  },

  divider_active_orientation_vertical: {
    '&.amaui-Divider-root': {
      width: '2px'
    }
  }
}), { name: 'amaui-Stepper' });

export interface IStepper extends ILine {
  tonal?: ITonal;
  color?: IColor;
  version?: IVersion;

  iconColor?: IColor;
  iconColorActive?: IColor;

  dividerColor?: IColor;
  dividerColorActive?: IColor;

  active?: number;
  completed?: Record<any, boolean>;

  stepDirection?: 'row' | 'column';
  orientation?: 'vertical' | 'horizontal';
  dividerActive?: boolean;
  individualDividers?: boolean;

  DividerProps?: IPropsAny;
}

const Stepper: React.FC<IStepper> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiStepper?.props?.default, ...props_ }), [props_]);

  const Line = React.useMemo(() => theme?.elements?.Line || LineElement, [theme]);

  const Divider = React.useMemo(() => theme?.elements?.Divider || DividerElement, [theme]);

  const {
    gap = 2,

    tonal = true,
    color = 'default',
    version = 'text',

    iconColor = 'inverted',
    iconColorActive = 'primary',

    dividerColor = 'inverted',
    dividerColorActive = 'primary',

    active = 0,
    completed,

    stepDirection = 'row',
    orientation = 'horizontal',
    dividerActive = true,
    individualDividers = props.stepDirection === 'column' && orientation !== 'vertical',
    free,

    DividerProps,

    Component = 'div',

    className,

    style,

    children,

    ...other
  } = props;

  const { classes } = useStyle();

  const steps = React.Children.toArray(children);

  const width = `calc(${100 / steps.length}% - ${(clamp(+gap - 1, 0) * 8)}px)`;

  const styleItem: any = {};

  if (orientation === 'horizontal') {
    styleItem.width = width;
  }

  return (
    <Line
      ref={ref}

      gap={gap}

      direction={orientation === 'horizontal' ? 'row' : 'column'}

      justify='space-between'

      align={orientation === 'vertical' ? 'flex-start' : 'center'}

      Component={Component}

      className={classNames([
        staticClassName('Stepper', theme) && [
          'amaui-Stepper-root'
        ],

        className,
        classes.root,
        classes[`orientation_${orientation}`]
      ])}

      style={style}

      {...other}
    >
      {steps.map((item: any, index: number) => {
        const active_ = active === index;

        const other_: any = {};

        if ((!active_ && !free)) other_.disabled = true;

        return React.cloneElement(item, {
          step: index + 1,

          tonal,

          color,

          version,

          activeStep: active,

          active: active_,

          iconColor: item.props.iconColor !== undefined ? item.props.iconColor : iconColor,

          iconColorActive: item.props.iconColorActive !== undefined ? item.props.iconColorActive : iconColorActive,

          dividerColor: item.props.dividerColor !== undefined ? item.props.dividerColor : dividerColor,

          dividerColorActive: item.props.dividerColorActive !== undefined ? item.props.dividerColorActive : dividerColorActive,

          orientation: item.props.orientation !== undefined ? item.props.orientation : orientation,

          stepDirection: item.props.stepDirection !== undefined ? item.props.stepDirection : stepDirection,

          completed: item.props.completed !== undefined ? item.props.completed : completed?.[index],

          divider: item.props.divider !== undefined ? item.props.divider : individualDividers,

          className: classNames([
            (!active_ && !free) && classes.inactive
          ]),

          style: {
            ...styleItem,

            ...item.props.style
          }
        });
      })
        .flatMap((item: any, index: number) => {
          const active_ = active >= index + 1;

          const values = [item];

          if (!individualDividers && index !== (children as any).length - 1) values.push(
            <Divider
              orientation={orientation}

              color={active_ ? dividerColorActive : dividerColor}

              flex

              {...DividerProps}

              className={classNames([
                staticClassName('Stepper', theme) && [
                  'amaui-Stepper-divider',
                  active_ && dividerActive && `amaui-Stepper-divider-active`
                ],

                DividerProps?.className,
                classes.divider,
                classes[`divider_orientation_${orientation}`],
                classes[`divider_orientation_${orientation}_stepDirection_${stepDirection}`],
                active_ && dividerActive && [
                  classes.divider_active,
                  classes[`divider_active_orientation_${orientation}`]
                ]
              ])}
            />
          );

          return values;
        })
        .map((item: any, index: number) => (
          React.cloneElement(item, {
            key: index
          })
        ))}
    </Line>
  );
});

Stepper.displayName = 'amaui-Stepper';

export default Stepper;
