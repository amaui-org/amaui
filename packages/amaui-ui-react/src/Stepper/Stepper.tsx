import React from 'react';

import { classNames, style as styleMethod, useAmauiTheme, AmauiTheme } from '@amaui/style-react';

import Divider from '../Divider';
import Line from '../Line';
import { ILine } from '../Line/Line';

import { staticClassName, TColor, TPropsAny, TTonal, TVersion } from '../utils';

const useStyle = styleMethod((theme: AmauiTheme) => ({
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

    '&.AmauiDivider-root': {
      transition: theme.methods.transitions.make(['background', 'width', 'height'])
    }
  },

  divider_orientation_horizontal: {

  },

  divider_orientation_vertical: {
    alignSelf: 'flex-start',
    transform: 'translateX(-50%)',

    '&.AmauiDivider-root': {
      marginInlineStart: '20px'
    }
  },

  divider_orientation_vertical_stepDirection_column: {
    alignSelf: 'center',

    '&.AmauiDivider-root': {
      margin: '0px'
    }
  },

  divider_active_orientation_horizontal: {
    '&.AmauiDivider-root': {
      height: '4px'
    }
  },

  divider_active_orientation_vertical: {
    '&.AmauiDivider-root': {
      width: '4px'
    }
  }
}), { name: 'AmauiStepper' });

export interface IStepper extends ILine {
  tonal?: TTonal;
  color?: TColor;
  version?: TVersion;

  iconColor?: TColor;
  iconColorActive?: TColor;

  dividerColor?: TColor;
  dividerColorActive?: TColor;

  active?: number;
  completed?: boolean;

  stepDirection?: 'row' | 'column';
  orientation?: 'vertical' | 'horizontal';
  dividerActive?: boolean;
  individualDividers?: boolean;

  DividerProps?: TPropsAny;
}

const Stepper = React.forwardRef((props_: IStepper, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiStepper?.props?.default }), [props_]);

  const { classes } = useStyle(props);

  const {
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

    children,

    ...other
  } = props;

  return (
    <Line
      ref={ref}

      direction={orientation === 'horizontal' ? 'row' : 'column'}

      justify='space-between'

      align='center'

      Component={Component}

      className={classNames([
        staticClassName('Stepper', theme) && [
          'AmauiStepper-root',
          `AmauiStep-orientation-${orientation}`,
          `AmauiStep-direction-${stepDirection}`,
          dividerActive && `AmauiStep-divider-active`,
          individualDividers && `AmauiStep-individual-dividers`,
          free && `AmauiStep-free`
        ],

        className,
        classes.root,
        classes[`orientation_${orientation}`]
      ])}

      {...other}
    >
      {React.Children.toArray(children)
        .map((item: any, index: number) => {
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

            ...other
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
                  'AmauiStepper-divider',
                  active_ && dividerActive && `AmauiStepper-divider-active`
                ],

                DividerProps?.className,
                classes.divider,
                classes[`divider_orientation_${orientation}`],
                classes[`divider_orientation_${orientation}_stepDirection_${stepDirection}`],
                active_ && dividerActive && classes[`divider_active_orientation_${orientation}`]
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

Stepper.displayName = 'AmauiStepper';

export default Stepper;
