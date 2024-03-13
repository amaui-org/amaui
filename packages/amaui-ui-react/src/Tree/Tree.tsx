import React from 'react';

import { clamp, is, isEnvironment } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Checkbox from '../Checkbox';
import Surface from '../Surface';
import Type from '../Type';
import Fade from '../Fade';
import Expand from '../Expand';
import Interaction from '../Interaction';
import Line from '../Line';
import Icon from '../Icon';
import { TTransitionStatus } from '../Transition';
import { staticClassName } from '../utils';
import { IBaseElement, IElement, IPropsAny, IElementReference } from '../types';

const useStyle = styleMethod(theme => ({
  root: {
    position: 'relative'
  },

  line: {
    '&::before': {
      content: "''",
      position: 'absolute',
      insetInlineStart: '-12px',
      height: '100%',
      width: '2px',
      background: theme.palette.light ? theme.palette.color.neutral['90'] : theme.palette.color.neutral['20']
    },

    '&:last-of-type': {
      '&::before': {
        height: '2px'
      }
    }
  },

  main: {
    // Reset
    fontFamily: 'inherit',
    background: 'transparent',
    border: 'none',
    fontSize: '100%',
    lineHeight: '1.15',
    margin: '0',

    position: 'relative',
    color: 'inherit',
    padding: '2px 8px',
    borderRadius: `${theme.shape.radius.unit * 0.5}px`
  },

  main_line: {
    '&::before': {
      content: "''",
      position: 'absolute',
      top: 'calc(50% - 15px)',
      insetInlineStart: '-12px',
      width: '10px',
      height: '14px',
      borderLeft: '2px solid',
      borderBottom: '2px solid',
      borderColor: theme.palette.light ? theme.palette.color.neutral['90'] : theme.palette.color.neutral['20'],
      borderBottomLeftRadius: '6px',
      transform: `rotateY(${theme.direction === 'ltr' ? 0 : 180}deg)`
    }
  },

  item: {
    padding: '2px 0'
  },

  middle: {
    flex: '1 1 auto'
  },

  indicator: {
    transition: theme.methods.transitions.make('transform')
  },

  indicator_open: {
    transform: 'rotate(-180deg)'
  },

  button: {
    // Reset
    fontFamily: 'inherit',
    '-webkit-appearance': 'none',
    appearance: 'none',
    background: 'transparent',
    border: 'none',
    fontSize: '100%',
    lineHeight: '1.15',
    padding: '0',
    margin: '0',
    overflow: 'visible',
    textTransform: 'none',

    userSelect: 'none',
    cursor: 'pointer'
  },

  disabled: {
    pointerEvents: 'none',
    cursor: 'default',
    opacity: theme.palette.visual_contrast.default.opacity.disabled
  }
}), { name: 'amaui-Tree' });

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

export interface ITree extends Omit<IBaseElement, 'children'> {
  open?: boolean;
  openDefault?: boolean;

  onChange?: (value: boolean) => any;

  selected?: boolean;

  line?: boolean;
  indicator?: boolean;
  arrow?: boolean;
  checkbox?: boolean;
  indicatorPosition?: 'start' | 'end';

  level?: number;

  icon?: IElement;
  iconOpen?: IElement;
  start?: IElement;
  middle?: IElement;
  end?: IElement;

  button?: boolean;
  noTransition?: boolean;
  noExpand?: boolean;

  noPadding?: boolean;

  parent?: HTMLElement;
  parentDisabled?: boolean;
  disabled?: boolean;

  ExpandProps?: IPropsAny;
  MainProps?: IPropsAny;
  StartProps?: IPropsAny;
  MiddleProps?: IPropsAny;
  EndProps?: IPropsAny;
  IndicatorProps?: IPropsAny;
  TransitionComponentProps?: IPropsAny;

  IconArrow?: IElementReference;
  TransitionComponent?: IElementReference;

  children?: any;
}

const TreeDelays = {
  Transition: {
    enter: 70
  }
};

const Tree: React.FC<ITree> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiTree?.props?.default, ...props_ }), [props_]);

  const {
    tonal = true,
    color = 'default',
    version = 'text',

    open: open_,
    openDefault,
    onChange,

    selected,

    line,
    indicator,
    arrow = true,
    checkbox,
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

    noPadding,

    parentDisabled,
    disabled,

    ExpandProps,
    MainProps: MainProps_,
    StartProps,
    MiddleProps,
    EndProps,
    IndicatorProps,
    TransitionComponentProps: TransitionComponentProps_,
    TreeProps,

    IconArrow = IconMaterialExpandMoreRounded,
    TransitionComponent: TransitionComponent_ = Fade,

    Component = 'div',

    className,
    style,

    children: children_,

    ...other
  } = props;

  const [init, setInit] = React.useState(false);
  const [focus, setFocus] = React.useState(false);
  const [open, setOpen] = React.useState(openDefault !== undefined ? openDefault : open_);

  const refs = {
    root: React.useRef<any>(),
    ids: {
      middle: React.useId()
    },
    inProgressTransition: React.useRef<boolean>()
  };

  const { classes } = useStyle(props);

  const styles: any = {
    root: {

    }
  };

  let TransitionComponent = TransitionComponent_;
  let TransitionComponentProps: any = {
    add: true,

    delay: {
      enter: TreeDelays.Transition.enter
    },

    ...TransitionComponentProps_
  };

  React.useEffect(() => {
    setInit(true);
  }, []);

  React.useEffect(() => {
    if (init) {
      if (open_ !== open) setOpen(open_);
    }
  }, [open_]);

  const onKeyDown = (event: React.KeyboardEvent<any>) => {
    const rootDocument = isEnvironment('browser') ? (refs.root.current?.ownerDocument || window.document) : undefined;

    if (level === 0) {
      let allElements = [];

      let index = 0;

      if (['ArrowUp', 'ArrowDown'].includes(event.key)) {
        allElements = Array.from(refs.root.current.querySelectorAll(`[tabindex='0']`));
      }

      switch (event.key) {
        case 'ArrowUp':
        case 'ArrowDown':
          index = clamp(allElements.findIndex(item => item === rootDocument.activeElement), 0);

          event.key === 'ArrowDown' ? index++ : index--;

          allElements[clamp(index, 0, allElements.length - 1)].focus();

          event.preventDefault();

          return;

        default:
          break;
      }
    }
  };

  const onClick = React.useCallback((event: React.MouseEvent<any>) => {
    if (is('function', MiddleProps?.onClick)) MiddleProps.onClick(event);

    if (refs.inProgressTransition.current) return;

    if (!disabled && !noExpand && children_) {
      const valueNew = !open;

      // Update inner or controlled
      if (!props.hasOwnProperty('open')) setOpen(valueNew);

      if (is('function', onChange)) onChange(valueNew);
    }
  }, [open, noExpand, children_, disabled]);

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
  if (!open ? icon : iconOpen || icon) start.push((!open ? icon : iconOpen || icon) as any);

  const end = React.Children.toArray(end_);

  if (indicator && button && children_ && !noExpand) {
    let Indicator: any;

    if (arrow) {
      Indicator = (
        <IconArrow
          className={classNames([
            classes.indicator,
            open && classes.indicator_open
          ])}

          {...IndicatorProps}
        />
      );
    }

    if (checkbox) {
      Indicator = (
        <Checkbox
          size='small'

          checked={open}

          {...IndicatorProps}
        />
      );
    }

    if (indicatorPosition === 'start') start.unshift(Indicator);
    else if (indicatorPosition === 'end') end.push(Indicator);
  }

  const MainProps = {
    ...MainProps_
  };

  if (!disabled) {
    MainProps.onBlur = onBlur;
    MainProps.onFocus = onFocus;
  }

  if (level > 0 && !noPadding) {
    styles.root.marginInlineStart = `${theme.space.unit * 2.5}px`;
  }

  const children = (
    React.Children.toArray(children_).map((item: any) => (
      React.cloneElement(item, {
        tonal: item.props.tonal !== undefined ? item.props.tonal : tonal,

        color: item.props.color !== undefined ? item.props.color : color,

        version: item.props.version !== undefined ? item.props.version : version,

        line: item.props.line !== undefined ? item.props.line : line,

        checkbox: item.props.checkbox !== undefined ? item.props.checkbox : checkbox,

        IconArrow: item.props.IconArrow !== undefined ? item.props.IconArrow : IconArrow,

        indicator: item.props.indicator !== undefined ? item.props.indicator : indicator,

        indicatorPosition: item.props.indicatorPosition !== undefined ? item.props.indicatorPosition : indicatorPosition,

        noExpand: item.props.noExpand !== undefined ? item.props.noExpand : noExpand,

        noTransition: item.props.noTransition !== undefined ? item.props.noTransition : noTransition,

        parentDisabled: item.props.parentDisabled !== undefined ? item.props.parentDisabled : parentDisabled || disabled,

        level: level + 1
      })
    ))
  );

  return (
    <Surface
      ref={item => {
        if (ref) {
          if (is('function', ref)) ref(item);
          else if (ref?.current) ref.current = item;
        }

        refs.root.current = item;
      }}

      tonal={tonal}

      color={color}

      version={version}

      gap={0}

      align='unset'

      justify='unset'

      onKeyDown={onKeyDown}

      role={level === 0 ? 'tree' : 'treeitem'}

      aria-labelledby={refs.ids.middle}

      aria-expanded={open}

      aria-selected={selected}

      Component={Line}

      AdditionalProps={{
        Component
      }}

      className={classNames([
        staticClassName('Tree', theme) && [
          'amaui-Tree-root',
          children ? `amaui-Tree-children` : `amaui-Tree-empty`,
          parentDisabled && `amaui-Tree-parent-disabled`,
          disabled && `amaui-Tree-disabled`
        ],

        className,
        classes.root,
        (level > 0 && line) && classes.line,
        disabled && classes.disabled
      ])}

      style={{
        ...styles.root,

        ...style
      }}

      {...other}
    >
      <Line
        gap={1}

        tabIndex={(!disabled && !parentDisabled) ? 0 : -1}

        onClick={onClick}

        direction='row'

        align='center'

        justify='unset'

        role={(button && children) ? 'button' : undefined}

        Component={(button && children) ? 'button' : 'div'}

        {...MainProps}

        className={classNames([
          staticClassName('Tree', theme) && [
            'amaui-Tree-main'
          ],

          MainProps?.className,
          classes.main,
          button && classes.button,
          (level > 0 && line) && classes.main_line
        ])}
      >
        {button && (
          <Interaction
            selected={selected}

            pulse={focus}
          />
        )}

        {!!start.length && (
          <Line
            gap={0}

            direction='row'

            align='center'

            justify='unset'

            {...StartProps}

            className={classNames([
              staticClassName('Tree', theme) && [
                'amaui-Tree-item',
                'amaui-Tree-aside',
                'amaui-Tree-start'
              ],

              StartProps?.className,
              classes.item,
              classes.aside,
              classes.start
            ])}
          >
            {start.map((item: any, index: number) => (
              React.cloneElement(item, {
                key: index
              })
            ))}
          </Line>
        )}

        {middle && (
          <Line
            gap={0}

            id={refs.ids.middle}

            Component={is('simple', middle) ? Type : undefined}

            {...MiddleProps}

            className={classNames([
              staticClassName('Tree', theme) && [
                'amaui-Tree-item',
                'amaui-Tree-middle',
                'amaui-Tree-end'
              ],

              MiddleProps?.className,
              classes.item,
              classes.middle
            ])}
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

            {...EndProps}

            className={classNames([
              staticClassName('Tree', theme) && [
                'amaui-Tree-item',
                'amaui-Tree-aside',
                'amaui-Tree-end'
              ],

              EndProps?.className,
              classes.item,
              classes.aside,
              classes.end
            ])}
          >
            {end.map((item: any, index: number) => (
              React.cloneElement(item, {
                key: index
              })
            ))}
          </Line>
        )}
      </Line>

      {noExpand && children}

      {!noExpand && children && (
        <Expand
          in={open}

          parent={parent || refs.root.current}

          onTransition={(element: any, status: TTransitionStatus) => {
            refs.inProgressTransition.current = !['entered', 'removed'].includes(status);
          }}

          {...ExpandProps}
        >
          <TransitionComponent
            {...TransitionComponentProps}
          >
            <Line
              gap={0}

              align='unset'

              justify='unset'

              role='group'

              {...TreeProps}

              className={classNames([
                staticClassName('Tree', theme) && [
                  'amaui-Tree-tree'
                ],

                TreeProps?.className,
                classes.tree
              ])}
            >
              {children.map((item: any, index: number) => (
                React.cloneElement(item, {
                  key: index
                })
              ))}
            </Line>
          </TransitionComponent>
        </Expand>
      )}
    </Surface>
  );
});

Tree.displayName = 'amaui-Tree';

export default Tree;
