import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Divider from '../Divider';
import Interaction from '../Interaction';
import { IconDoneAnimated } from '../Buttons/Buttons';
import PaginationItem from '../PaginationItem';
import Surface from '../Surface';
import ListItem from '../ListItem';
import Line from '../Line';
import { ILine } from '../Line/Line';
import { staticClassName } from '../utils';
import { ITonal, IColor, IVersion, IElement, IPropsAny } from '../types';

const useStyle = styleMethod(theme => ({
  root: {
    position: 'relative',
    transition: theme.methods.transitions.make('opacity')
  },

  icon: {
    pointerEvents: 'none'
  },

  inactive: {
    userSelect: 'none',
    opacity: theme.palette.visual_contrast.default.opacity.disabled
  },

  direction_row: {

  },

  direction_column: {
    flex: '1 1 auto',

    '& .amaui-ListItem-text': {
      textAlign: 'center'
    }
  },

  button: {
    userSelect: 'none',
    cursor: 'pointer'
  },

  divider: {
    position: 'absolute',

    '&.amaui-Divider-root': {
      margin: '0',
      transition: theme.methods.transitions.make(['background', 'height'])
    }
  },

  divider_orientation_horizontal: {
    top: '20px',
    right: '0',
    transform: 'translate(calc(-50% - 70px), -50%)',

    '&.amaui-Divider-root': {
      width: 'calc(100% - 62px)'
    }
  },

  divider_orientation_vertical: {
    left: '50%',
    top: '0',
    transform: 'translate(-50%, calc(-50% - 16px))',

    '&.amaui-Divider-root': {
      height: '50%'
    }
  },

  divider_active_orientation_horizontal: {
    '&.amaui-Divider-root': {
      height: '4px'
    }
  },

  divider_active_orientation_vertical: {
    '&.amaui-Divider-root': {
      width: '4px'
    }
  }
}), { name: 'amaui-Step' });

export interface IStep extends ILine {
  tonal?: ITonal;
  color?: IColor;
  version?: IVersion;

  iconColor?: IColor;
  iconColorActive?: IColor;

  dividerColor?: IColor;
  dividerColorActive?: IColor;

  step?: number;
  activeStep?: number;
  active?: boolean;
  completed?: boolean;
  primary?: IElement;
  secondary?: IElement;
  stepDirection?: 'row' | 'column';
  orientation?: 'vertical' | 'horizontal';
  button?: boolean;
  divider?: boolean;

  renderIcon?: (step: number, active: boolean, completed: boolean, activeStep: number) => IElement;

  ListItemProps?: IPropsAny;
  DividerProps?: IPropsAny;
}

const Step: React.FC<IStep> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiStep?.props?.default, ...props_ }), [props_]);

  const { classes } = useStyle(props);

  const {
    tonal = true,
    color = 'default',
    version = 'text',

    iconColor = 'inverted',
    iconColorActive = 'primary',

    dividerColor = 'inverted',
    dividerColorActive = 'primary',

    step = 0,
    activeStep,
    active,
    completed,
    primary,
    secondary,
    stepDirection = 'row',
    orientation = 'horizontal',
    button,
    divider,

    renderIcon: renderIcon_,

    ListItemProps,
    DividerProps,

    Component = Surface,

    className,

    children,

    ...other
  } = props;

  const activeDivider = activeStep >= step - 1;

  const renderIcon = is('function', renderIcon_) ? renderIcon_ : (() => {
    return (
      <PaginationItem
        tonal={tonal}

        color={!(active || completed) ? iconColor : iconColorActive}

        version='filled'

        className={classNames([
          staticClassName('Step', theme) && [
            'amaui-Step-icon'
          ],

          classes.icon
        ])}
      >
        {!completed ? step : <IconDoneAnimated in add />}
      </PaginationItem>
    );
  });

  return (
    <Line
      ref={ref}

      version={version}

      tonal={tonal}

      color={color}

      gap={0}

      direction={stepDirection}

      align='center'

      justify='center'

      Component={Component as any}

      className={classNames([
        staticClassName('Step', theme) && [
          'amaui-Step-root',
          active && `amaui-Step-active`,
          completed && `amaui-Step-completed`,
          (!active && !completed) && `amaui-Step-inactive`
        ],

        className,
        classes.root,
        classes[`direction_${stepDirection}`],
        (!active && !completed) && classes.inactive,
        button && classes.button
      ])}

      {...other}
    >
      {button && (
        <Interaction
          border={false}
        />
      )}

      {renderIcon(step, active, completed, activeStep)}

      <ListItem
        Component='div'

        version={version}

        tonal={tonal}

        color={color}

        primary={primary}

        secondary={secondary}

        {...ListItemProps}
      />

      {step > 1 && divider && (
        <Divider
          orientation={orientation}

          color={activeDivider ? dividerColorActive : dividerColor}

          flex

          {...DividerProps}

          className={classNames([
            staticClassName('Step', theme) && [
              'amaui-Step-divider',
              activeDivider && `amaui-Step-divider-active`
            ],

            DividerProps?.className,
            classes.divider,
            classes[`divider_orientation_${orientation}`],
            activeDivider && classes[`divider_active_orientation_${orientation}`]
          ])}
        />
      )}
    </Line>
  );
});

Step.displayName = 'amaui-Step';

export default Step;
