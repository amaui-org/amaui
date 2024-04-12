import React from 'react';

import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import SurfaceElement from '../Surface';
import Divider from '../Divider';
import LineElement from '../Line';
import { ILine } from '../Line/Line';
import { staticClassName } from '../utils';
import { IElement, IPropsAny, IElementReference } from '../types';

const useStyle = styleMethod(theme => ({
  root: {
    '&:last-of-type': {
      '& $divider': {
        display: 'none'
      }
    }
  },

  orientation_vertical: {
    minHeight: '77px'
  },

  orientation_horizontal: {
    minWidth: '114px'
  },

  icon: {
    display: 'inline-block',
    width: '12px',
    height: '12px',
    borderRadius: theme.methods.shape.radius.value(40, 'px')
  },

  aside_orientation_vertical: {
    padding: `${theme.methods.space.value(0.5, 'px')} ${theme.methods.space.value(3, 'px')}`
  },

  aside_orientation_horizontal: {
    padding: `${theme.methods.space.value(3, 'px')} ${theme.methods.space.value(0.5, 'px')}`
  },

  iconWrapper: {
    lineHeight: '0'
  },

  iconWrapper_orientation_vertical: {
    marginBlock: '8px'
  },

  iconWrapper_orientation_horizontal: {
    marginInline: '8px'
  },

  divider: {
    '&.amaui-Divider-root': {
      margin: '0px'
    }
  },

  divider_orientation_vertical: {
    '&.amaui-Divider-root': {
      width: '2px'
    }
  },

  divider_orientation_horizontal: {
    '&.amaui-Divider-root': {
      height: '2px'
    }
  }
}), { name: 'amaui-TimelineItem' });

export interface ITimelineItem extends ILine {
  orientation?: 'vertical' | 'horizontal';

  start?: IElement;
  end?: IElement;

  DividerProps?: IPropsAny;
  IconProps?: IPropsAny;

  Icon?: IElementReference;
  Divider?: any;
}

const TimelineItem: React.FC<ITimelineItem> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiTimelineItem?.props?.default, ...props_ }), [props_]);

  const { classes } = useStyle();

  const {
    orientation = 'vertical',

    start,
    end,

    DividerProps: DividerProps_ = !props.Divider ? {
      tonal: 'secondary',
      color: 'neutral'
    } : undefined,
    IconProps = !props.Icon ? {
      tonal: 'secondary',
      color: 'neutral',
      version: 'filled'
    } : undefined,

    Icon,
    Divider: Divider_,

    Component = 'li',

    className,

    children,

    ...other
  } = props;

  const direction = orientation === 'vertical' ? 'row' : 'column';

  const lineDirection = orientation === 'vertical' ? 'column' : 'row';

  const DividerProps = {
    ...DividerProps_
  };

  if (!Divider_) {
    DividerProps.orientation = orientation;
  }

  return (
    <Line
      ref={ref}

      gap={0}

      align='unset'

      justify='unset'

      direction={direction}

      Component={Component}

      className={classNames([
        staticClassName('TimelineItem', theme) && [
          'amaui-TimelineItem-root'
        ],

        className,
        classes.root,
        classes[`orientation_${orientation}`]
      ])}

      {...other}
    >
      {start && (
        <div
          className={classNames([
            staticClassName('TimelineItem', theme) && [
              'amaui-TimelineItem-aside',
              'amaui-TimelineItem-item',
              'amaui-TimelineItem-start'
            ],

            classes.aside,
            classes.item,
            classes.start,
            classes[`aside_orientation_${orientation}`]
          ])}
        >
          {start}
        </div>
      )}

      <Line
        gap={0}

        direction={lineDirection}

        align='center'

        justify='flex-start'

        className={classNames([
          staticClassName('TimelineItem', theme) && [
            'amaui-TimelineItem-item',
            'amaui-TimelineItem-middle'
          ],

          classes.item,
          classes.middle
        ])}
      >
        <div
          className={classNames([
            staticClassName('TimelineItem', theme) && [
              'amaui-TimelineItem-icon-wrapper'
            ],

            classes.iconWrapper,
            classes[`iconWrapper_orientation_${orientation}`]
          ])}
        >
          {Icon ? Icon as any : (
            <Surface
              {...IconProps}

              className={classNames([
                staticClassName('TimelineItem', theme) && [
                  'amaui-TimelineItem-icon'
                ],

                IconProps?.className,
                classes.icon
              ])}
            />
          )}
        </div>

        {Divider_ ? Divider_ : (
          <Divider
            {...DividerProps}

            className={classNames([
              staticClassName('TimelineItem', theme) && [
                'amaui-TimelineItem-divider'
              ],

              DividerProps?.className,
              classes.divider,
              classes[`divider_orientation_${orientation}`]
            ])}

            flex
          />
        )}
      </Line>

      {(end || children) && (
        <div
          className={classNames([
            staticClassName('TimelineItem', theme) && [
              'amaui-TimelineItem-aside',
              'amaui-TimelineItem-item',
              'amaui-TimelineItem-end'
            ],

            classes.aside,
            classes.item,
            classes.end,
            classes[`aside_orientation_${orientation}`]
          ])}
        >
          {end || children}
        </div>
      )}
    </Line>
  );
});

TimelineItem.displayName = 'amaui-TimelineItem';

export default TimelineItem;
