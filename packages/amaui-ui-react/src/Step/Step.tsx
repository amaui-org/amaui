import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Divider from '../Divider';
import Interaction from '../Interaction';
import { IconDoneAnimated } from '../Buttons/Buttons';
import PaginationItem from '../PaginationItem';
import Surface from '../Surface';
import ListItem from '../ListItem';
import Line from '../Line';

import { staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {
    position: 'relative',
    transition: theme.methods.transitions.make('opacity'),

    '&.AmauiLine-root': {
      width: 'unset'
    }
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

    '& .AmauiListItem-text': {
      textAlign: 'center'
    }
  },

  button: {
    userSelect: 'none',
    cursor: 'pointer'
  },

  divider: {
    position: 'absolute',

    '&.AmauiDivider-root': {
      margin: 0,
      transition: theme.methods.transitions.make(['background', 'height'])
    }
  },

  divider_orientation_horizontal: {
    top: '20px',
    right: 0,
    transform: 'translate(calc(-50% - 70px), -50%)',

    '&.AmauiDivider-root': {
      width: 'calc(100% - 62px)'
    }
  },

  divider_orientation_vertical: {
    left: '50%',
    top: 0,
    transform: 'translate(-50%, calc(-50% - 16px))',

    '&.AmauiDivider-root': {
      height: '50%'
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
}), { name: 'AmauiStep' });

const Step = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiStep?.props?.default }), [props_]);

  const { classes } = useStyle(props);

  const {
    tonal = true,
    color = 'default',
    version = 'text',

    iconColor = 'inverted',
    iconColorActive = 'primary',

    dividerColor = 'default',
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

    Component = Surface,
    ListItemProps,

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
            'AmauiStep-icon'
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

      Component={Component}

      className={classNames([
        staticClassName('Step', theme) && [
          'AmauiStep-root',
          `AmauiStep-orientation-${orientation}`,
          `AmauiStep-direction-${stepDirection}`,
          active && `AmauiStep-active`,
          completed && `AmauiStep-completed`,
          (!active && !completed) && `AmauiStep-inactive`,
          button && `AmauiStep-button`
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

          tonal={tonal}

          color={activeDivider ? dividerColorActive : dividerColor}

          flex

          className={classNames([
            staticClassName('Stepper', theme) && [
              'AmauiStepper-divider',
              activeDivider && `AmauiStepper-divider-active`
            ],

            classes.divider,
            classes[`divider_orientation_${orientation}`],
            activeDivider && classes[`divider_active_orientation_${orientation}`]
          ])}
        />
      )}
    </Line>
  );
});

Step.displayName = 'AmauiStep';

export default Step;
