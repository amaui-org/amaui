import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Surface from '../Surface';
import Line from '../Line';
import Icon from '../Icon';
import IconButton from '../IconButton';
import useMediaQuery from '../useMediaQuery';

import { staticClassName } from '../utils';

const useStyle = style(theme => ({
  root: {
    minHeight: '44px',
    overflow: 'hidden'
  },

  tabs: {
    position: 'relative'
  },

  orientation_horizontal: {
    width: '100%'
  },

  tabs_orientation_horizontal: {
    height: '100%',
    overflowX: 'auto'
  },

  tabs_orientation_vertical: {
    width: '100%',
    overflowY: 'auto'
  },

  arrow: {
    flex: '0 0 auto',
    alignSelf: 'center',
    justifySelf: 'center'
  },

  line: {
    position: 'absolute',
    borderRadius: '16px 16px 0 0',
    background: 'currentColor',
    zIndex: 1,
    transition: theme.methods.transitions.make(['top', 'left', 'width'])
  },

  line_orientation_horizontal: {
    height: '3px',
    bottom: 0,
  },

  line_orientation_vertical: {
    width: '3px',
    insetInlineEnd: 0
  },

  fixed: {
    position: 'fixed',
    top: 0,
    insetInline: 0
  }
}), { name: 'AmauiTabs' });

const IconMaterialExpandLessRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExpandLessRounded'
      short_name='ExpandLess'

      {...props}
    >
      <path d="M6.7 14.675Q6.425 14.4 6.425 13.975Q6.425 13.55 6.7 13.275L11.3 8.675Q11.45 8.525 11.625 8.462Q11.8 8.4 12 8.4Q12.2 8.4 12.375 8.462Q12.55 8.525 12.7 8.675L17.325 13.3Q17.6 13.575 17.6 13.975Q17.6 14.375 17.3 14.675Q17.025 14.95 16.6 14.95Q16.175 14.95 15.9 14.675L12 10.775L8.075 14.7Q7.8 14.975 7.4 14.975Q7 14.975 6.7 14.675Z" />
    </Icon>
  );
});

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

const IconMaterialNavigateNextRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NavigateNextRounded'
      short_name='NavigateNext'

      {...props}
    >
      <path d="M8.7 17.3Q8.425 17.025 8.425 16.6Q8.425 16.175 8.7 15.9L12.6 12L8.7 8.1Q8.425 7.825 8.425 7.4Q8.425 6.975 8.7 6.7Q8.975 6.425 9.4 6.425Q9.825 6.425 10.1 6.7L14.7 11.3Q14.85 11.45 14.913 11.625Q14.975 11.8 14.975 12Q14.975 12.2 14.913 12.375Q14.85 12.55 14.7 12.7L10.1 17.3Q9.825 17.575 9.4 17.575Q8.975 17.575 8.7 17.3Z" />
    </Icon>
  );
});

const IconMaterialNavigateBeforeRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NavigateBeforeRounded'
      short_name='NavigateBefore'

      {...props}
    >
      <path d="M13.3 17.3 8.7 12.7Q8.55 12.55 8.488 12.375Q8.425 12.2 8.425 12Q8.425 11.8 8.488 11.625Q8.55 11.45 8.7 11.3L13.3 6.7Q13.575 6.425 14 6.425Q14.425 6.425 14.7 6.7Q14.975 6.975 14.975 7.4Q14.975 7.825 14.7 8.1L10.8 12L14.7 15.9Q14.975 16.175 14.975 16.6Q14.975 17.025 14.7 17.3Q14.425 17.575 14 17.575Q13.575 17.575 13.3 17.3Z" />
    </Icon>
  );
});

const Tabs = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiTabs?.props?.default }), [props_]);

  const {
    tonal = true,
    color = 'primary',

    value: value_ = 0,
    valueDefault,

    activateOnFocus,

    onChange: onChange_,

    align = 'flex-start',
    justify = 'flex-start',
    orientation = 'horizontal',

    arrows,
    arrowsMobile,
    fixed,

    IconStart = IconMaterialNavigateBeforeRounded,
    IconEnd = IconMaterialNavigateNextRounded,

    IconTop = IconMaterialExpandLessRounded,
    IconBottom = IconMaterialExpandMoreRounded,

    Component = 'div',

    className,

    children,

    ...other
  } = props;

  const mobile = useMediaQuery('(max-width: 767px)');

  const setMoveValue = React.useState<any>({})[1];
  const [lineValues, setLineValues] = React.useState<any>({});
  const [value, setValue] = React.useState(valueDefault !== undefined ? valueDefault : value_);

  const { classes } = useStyle(props);

  const refs = {
    root: React.useRef<any>(),
    tabsRoot: React.useRef<any>(),
    tabs: React.useRef<any>([]),
    value: React.useRef<any>(),
    props: React.useRef<any>(),
    mobile: React.useRef<any>()
  };

  refs.value.current = value;
  refs.props.current = props;
  refs.mobile.current = mobile;

  React.useEffect(() => {
    // Update lineValues value
    // with the first tab
    updateLine(refs.tabs.current[0]?.value);

    const observerMethod = () => updateLine(refs.value.current);

    // Mutation observer
    const observerMutation = new ResizeObserver(observerMethod);

    observerMutation.observe(refs.tabsRoot.current);

    return () => {
      observerMutation.disconnect();
    };
  }, []);

  const onScroll = React.useCallback((event: React.EventHandler<any>) => {
    const useArrows_ = refs.props.current.arrows && (!refs.mobile.current || refs.props.current.arrowsMobile);

    if (useArrows_) {
      setMoveValue({
        left: refs.tabsRoot.current.scrollLeft,
        top: refs.tabsRoot.current.scrollTop,
      });
    }
  }, []);

  React.useEffect(() => {
    if (value_ !== value) setValue(value_);
  }, [value_]);

  const onChange = (valueItem: number, index: number) => {
    // Update inner or controlled
    if (!props.hasOwnProperty('value')) setValue(valueItem);

    // Update line
    updateLine(valueItem);

    if (is('function', onChange_)) onChange_(valueItem);
  };

  const move = (forward = true) => {
    const rect = refs.tabsRoot.current.getBoundingClientRect();

    let moveValue_: any;

    if (orientation === 'horizontal') moveValue_ = {
      left: refs.tabsRoot.current.scrollLeft + (forward ? 1 : -1) * rect.width,
      behavior: 'smooth'
    };
    else moveValue_ = {
      top: refs.tabsRoot.current.scrollTop + (forward ? 1 : -1) * rect.height,
      behavior: 'smooth'
    };

    refs.tabsRoot.current.scrollTo(moveValue_);
  };

  const updateLine = (valueItem: number) => {
    const tab: HTMLElement = refs.tabs.current.find(item => String(item.value) === String(valueItem));

    if (tab) {
      const rect = {
        parent: refs.tabsRoot.current.getBoundingClientRect(),
        tab: tab.getBoundingClientRect(),
        line: tab.children[1]?.getBoundingClientRect()
      };

      // Update left scroll
      if (orientation === 'horizontal') {
        if ((rect.tab.x < rect.parent.x) || (rect.parent.x + rect.parent.width < rect.tab.x + rect.tab.width)) {
          let left = refs.tabsRoot.current.scrollLeft;

          if (rect.tab.x < rect.parent.x) left += rect.tab.x - rect.parent.x;
          else left += (rect.tab.x + rect.tab.width) - (rect.parent.x + rect.parent.width);

          // Update
          refs.tabsRoot.current.scrollTo({ left, behavior: 'smooth' });
        }
      }
      else {
        if ((rect.tab.y < rect.parent.y) || (rect.parent.y + rect.parent.height < rect.tab.y + rect.tab.height)) {
          let top = refs.tabsRoot.current.scrollTop;

          if (rect.tab.y < rect.parent.y) top += rect.tab.y - rect.parent.y;
          else top += (rect.tab.y + rect.tab.height) - (rect.parent.y + rect.parent.height);

          // Update
          refs.tabsRoot.current.scrollTo({ top, behavior: 'smooth' });
        }
      }

      // Update lineValues value
      setLineValues({
        x: rect.line.x - rect.parent.x + refs.tabsRoot.current.scrollLeft,
        y: rect.line.y - rect.parent.y + refs.tabsRoot.current.scrollTop,
        width: rect.line.width,
        height: rect.line.height
      });
    }
  };

  const direction = orientation === 'horizontal' ? 'row' : 'column';

  const propPosition = orientation === 'horizontal' ? 'left' : 'top';

  const propMain = orientation === 'horizontal' ? 'width' : 'height';

  const useArrows = arrows && (!mobile || arrowsMobile);

  const ArrowPre = (
    <IconButton
      color='inherit'

      onClick={() => move(false)}

      className={classNames([
        staticClassName('Tabs', theme) && [
          'AmauiTabs-arrow'
        ],

        classes.arrow
      ])}

      disabled={refs.tabsRoot.current?.[orientation === 'horizontal' ? 'scrollLeft' : 'scrollTop'] === 0}
    >
      {orientation === 'horizontal' ? <IconStart /> : <IconTop />}
    </IconButton>
  );

  const ArrowPost = (
    <IconButton
      color='inherit'

      onClick={() => move()}

      className={classNames([
        staticClassName('Tabs', theme) && [
          'AmauiTabs-arrow'
        ],

        classes.arrow
      ])}

      disabled={orientation === 'horizontal' ? Math.ceil(refs.tabsRoot.current?.clientWidth + refs.tabsRoot.current?.scrollLeft) === refs.tabsRoot.current?.scrollWidth : Math.ceil(refs.tabsRoot.current?.clientHeight + refs.tabsRoot.current?.scrollTop) === refs.tabsRoot.current?.scrollHeight}
    >
      {orientation === 'horizontal' ? <IconEnd /> : <IconBottom />}
    </IconButton>
  );

  return (
    <Surface
      ref={ref}

      tonal={tonal}

      color={color}

      gap={0}

      direction={direction}

      align={align}

      justify={justify}

      Component={Line}

      className={classNames([
        staticClassName('Tabs', theme) && [
          'AmauiTabs-root',
          `AmauiTabs-orientation-horizontal`,
          fixed && `AmauiTabs-fixed`
        ],

        className,
        classes.root,
        classes[`orientation_${orientation}`],
        fixed && classes.fixed
      ])}

      {...other}
    >
      {useArrows && ArrowPre}

      <Line
        ref={refs.tabsRoot}

        gap={0}

        direction={direction}

        align='flex-start'

        justify='flex-start'

        onScroll={onScroll}

        className={classNames([
          staticClassName('Tabs', theme) && [
            'AmauiTabs-tabs'
          ],

          classes.tabs,
          classes[`tabs_orientation_${orientation}`]
        ])}
      >
        <div
          className={classNames([
            staticClassName('Tabs', theme) && [
              'AmauiTabs-line'
            ],

            classes.line,
            classes[`line_orientation_${orientation}`]
          ])}

          style={{
            [propPosition]: orientation === 'horizontal' ? lineValues.x : lineValues.y,

            [propMain]: lineValues[propMain]
          }}
        />

        {React.Children.toArray(children).map((item: any, index: number) => {
          const valueItem = item.props.value !== undefined ? item.props.value : index;

          return (
            React.cloneElement(item, {
              ref: item => {
                if (children.length !== refs.tabs.current.length) {
                  if (!refs.tabs.current.includes(item)) {
                    item.value = valueItem;

                    refs.tabs.current.push(item);
                  }

                  refs.tabs.current = refs.tabs.current.filter(Boolean);
                }
              },

              tonal: item.props.tonal !== undefined ? item.props.tonal : tonal,

              color: item.props.color !== undefined ? item.props.color : color,

              index,

              onChange,

              activateOnFocus: item.props.activateOnFocus !== undefined ? item.props.activateOnFocus : activateOnFocus,

              active: valueItem === value,

              onClick: (event: React.MouseEvent<any>) => {
                onChange(valueItem, index);

                if (is('function', item.props.onClick)) item.props.onClick(event);
              }
            })
          );
        })}
      </Line>

      {useArrows && ArrowPost}
    </Surface>
  );
});

Tabs.displayName = 'AmauiTabs';

export default Tabs;
