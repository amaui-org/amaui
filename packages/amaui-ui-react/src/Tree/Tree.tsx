import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Surface from '../Surface';
import Type from '../Type';
import Fade from '../Fade';
import Expand from '../Expand';
import Interaction from '../Interaction';
import Line from '../Line';
import Icon from '../Icon';

import { staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {
  },

  main: {
    position: 'relative',
    color: 'inherit',
    padding: '2px 8px',
    borderRadius: `${theme.shape.radius.unit * 0.5}px`
  },

  middle: {
    flex: '1 1 auto'
  },

  indicator: {
    transition: theme.methods.transitions.make('transform')
  },

  indicator_open: {
    transform: 'rotate(180deg)'
  },

  button: {
    userSelect: 'none',
    cursor: 'pointer'
  }
}), { name: 'AmauiTree' });

const IconMaterialExpandMoreRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExpandMoreRounded'
      short_name='ExpandMore'

      {...props}
    >
      <path d="M12 14.95Q11.8 14.95 11.625 14.887Q11.45 14.825 11.3 14.675L6.675 10.05Q6.4 9.775 6.413 9.362Q6.425 8.95 6.7 8.675Q6.975 8.4 7.4 8.4Q7.825 8.4 8.1 8.675L12 12.575L15.925 8.65Q16.2 8.375 16.613 8.387Q17.025 8.4 17.3 8.675Q17.575 8.95 17.575 9.375Q17.575 9.8 17.3 10.075L12.7 14.675Q12.55 14.825 12.375 14.887Q12.2 14.95 12 14.95Z" />
    </Icon>
  );
});

// To do
// Icon end
// Line
// Checkbox
// Orientation vertical
// Keyboard and focus value y

const Tree = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiTree?.props?.default }), [props_]);

  const { classes } = useStyle(props);

  const {
    tonal,
    color = 'default',
    version = 'text',

    open: open_,
    openDefault,
    onChange,

    indicator = true,
    checkbox,
    IconArrow = IconMaterialExpandMoreRounded,
    indicatorPosition = 'start',

    level = 0,

    icon,
    iconOpen,
    start: start_,
    middle,
    end: end_,

    button = true,
    noTransition,
    noExpand,

    disabled,

    Component = 'div',
    ExpandProps,
    TransitionComponent: TransitionComponent_ = Fade,
    TransitionComponentProps: TransitionComponentProps_ = { add: true },
    MainProps: MainProps_,
    StartProps,
    MiddleProps,
    MiddleTypeProps,
    EndProps,

    className,
    style,

    children: children_,

    ...other
  } = props;

  const [init, setInit] = React.useState(false);
  const [focus, setFocus] = React.useState(false);
  const [open, setOpen] = React.useState(openDefault !== undefined ? openDefault : open_);

  const styles: any = {
    root: {}
  };

  let TransitionComponent = TransitionComponent_;
  let TransitionComponentProps = TransitionComponentProps_;

  React.useEffect(() => {
    setInit(true);
  }, []);

  React.useEffect(() => {
    if (init) {
      if (open_ !== open) setOpen(open_);
    }
  }, [open_]);

  const onClick = React.useCallback(() => {
    if (!disabled) {
      const valueNew = !open;

      // Update inner or controlled
      if (!props.hasOwnProperty('open')) setOpen(valueNew);

      if (is('function', onChange)) onChange(valueNew);
    }
  }, [open, disabled]);

  if (!noTransition) TransitionComponentProps.in = open;
  else {
    TransitionComponent = React.Fragment;
    TransitionComponentProps = {};
  }

  const onBlur = React.useCallback((event: React.FocusEvent<any>) => {
    if (!disabled) setFocus(false);
  }, [disabled]);

  const onFocus = React.useCallback((event: React.FocusEvent<any>) => {
    if (!disabled) setFocus(true);
  }, [disabled]);

  const start = React.Children.toArray(start_);

  // Icon
  start.push(!open ? icon : iconOpen || icon);

  const end = React.Children.toArray(end_);

  if (indicator && button && children_ && !noExpand) {
    if (indicatorPosition === 'start') start.unshift(
      <IconArrow
        className={classNames([
          classes.indicator,
          open && classes.indicator_open
        ])}
      />
    );
    else if (indicatorPosition === 'end') end.push(
      <IconArrow
        className={classNames([
          classes.indicator,
          open && classes.indicator_open
        ])}
      />
    );
  }

  const MainProps = {
    ...MainProps_
  };

  if (button && children_) {
    MainProps.onClick = onClick;
    MainProps.onBlur = onBlur;
    MainProps.onFocus = onFocus;
  }

  if (level > 0) {
    styles.root.marginInlineStart = `${theme.space.unit * 2.5}px`;
  }

  const children = (
    React.Children.toArray(children_).map((item: any) => (
      React.cloneElement(item, {
        tonal: item.props.tonal !== undefined ? item.props.tonal : tonal,

        color: item.props.color !== undefined ? item.props.color : color,

        version: item.props.version !== undefined ? item.props.version : version,

        checkbox: item.props.checkbox !== undefined ? item.props.checkbox : checkbox,

        IconArrow: item.props.IconArrow !== undefined ? item.props.IconArrow : IconArrow,

        indicator: item.props.indicator !== undefined ? item.props.indicator : indicator,

        indicatorPosition: item.props.indicatorPosition !== undefined ? item.props.indicatorPosition : indicatorPosition,

        noExpand: item.props.noExpand !== undefined ? item.props.noExpand : noExpand,

        noTransition: item.props.noTransition !== undefined ? item.props.noTransition : noTransition,

        level: level + 1
      })
    ))
  );

  return (
    <Surface
      ref={ref}

      tonal={tonal}

      color={color}

      version={version}

      gap={0}

      align='unset'

      justify='unset'

      Component={Line}

      className={classNames([
        staticClassName('Tree', theme) && [
          'AmauiTree-root',
          !children && `AmauiTree-empty`,
          button && `AmauiTree-button`
        ],

        className,
        classes.root
      ])}

      AdditionalProps={{
        Component
      }}

      style={{
        ...styles.root,

        ...style
      }}

      {...other}
    >
      <Line
        gap={1}

        tabIndex={(button && children_) ? 0 : -1}

        direction='row'

        align='center'

        justify='unset'

        Component={(button && children) ? 'button' : 'div'}

        className={classNames([
          staticClassName('Tree', theme) && [
            'AmauiTree-main'
          ],

          classes.main,
          button && classes.button
        ])}

        {...MainProps}
      >
        {button && (
          <Interaction
            pulse={focus}
          />
        )}

        {!!start.length && (
          <Line
            gap={0}

            direction='row'

            align='center'

            justify='unset'

            className={classNames([
              staticClassName('Tree', theme) && [
                'AmauiTree-item',
                'AmauiTree-aside',
                'AmauiTree-start'
              ],

              classes.item,
              classes.aside,
              classes.start
            ])}

            {...StartProps}
          >
            {start}
          </Line>
        )}

        {middle && (
          <Line
            gap={0}

            Component={is('simple', middle) ? Type : undefined}

            className={classNames([
              staticClassName('Tree', theme) && [
                'AmauiTree-item',
                'AmauiTree-middle',
                'AmauiTree-end'
              ],

              classes.item,
              classes.middle
            ])}

            {...MiddleProps}
          >
            {middle}
          </Line>
        )}

        {!!end.length && (
          <Line
            gap={0}

            direction='row'

            align='center'

            justify='unset'

            className={classNames([
              staticClassName('Tree', theme) && [
                'AmauiTree-item',
                'AmauiTree-aside',
                'AmauiTree-end'
              ],

              classes.item,
              classes.aside,
              classes.end
            ])}

            {...EndProps}
          >
            {end}
          </Line>
        )}
      </Line>

      {noExpand && children}

      {children && !noExpand && (
        <Expand
          in={open}

          {...ExpandProps}
        >
          <TransitionComponent
            {...TransitionComponentProps}
          >
            <Line
              gap={0}

              align='unset'

              justify='unset'

              className={classNames([
                staticClassName('Tree', theme) && [
                  'AmauiTree-tree'
                ],

                classes.tree
              ])}
            >
              {children}
            </Line>
          </TransitionComponent>
        </Expand>
      )}
    </Surface>
  );
});

Tree.displayName = 'AmauiTree';

export default Tree;
