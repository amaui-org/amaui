import React from 'react';

import { imageToPalette, is } from '@amaui/utils';
import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Type from '../Type';
import Line from '../Line';
import Icon from '../Icon';

import { staticClassName } from '../utils';
import ClickListener from '../ClickListener';

const useStyle = style(theme => ({
  root: {

  },

  item: {
    maxWidth: '140px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    padding: '8px',
    cursor: 'pointer',
    userSelect: 'none'
  },

  item_disabled: {
    opacity: theme.palette.visual_contrast.default.opacity.disabled,
    cursor: 'default',
    pointerEvents: 'none'
  },

  indicator: {
    color: [theme.palette.text.default.secondary, '!important'],
    transition: theme.methods.transitions.make('transform')
  },

  indicator_open: {
    transform: 'rotate(180deg)'
  }
}), { name: 'AmauiMenuDesktop' });

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

// to do

// Append has to be portal={false} so focus can continue to it as the child item

// Transition, in and out, transitionY up and down, with fade in and out value y

const MenuDesktop = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiMenuDesktop?.props?.default }), [props_]);

  const { classes } = useStyle(props);

  const {
    items,

    valueDefault,
    value_,

    openOnHover = true,
    openOnClick = true,
    openOnFocus = true,

    renderItem,

    indicator,

    onChange,

    IconIndicator = IconMaterialExpandMoreRounded,

    TypeProps,
    ItemProps,
    IconProps,

    className,

    ...other
  } = props;

  const [open, setOpen] = React.useState<any>();
  const [focus, setFocus] = React.useState<any>();

  const refs = {
    root: React.useRef<any>(),
    open: React.useRef<any>(),
    focus: React.useRef<any>(),
    items: React.useRef<any>()
  };

  refs.open.current = open;

  refs.focus.current = focus;

  refs.items.current = items;

  React.useEffect(() => {
    const method = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'Enter':
          if (refs.focus.current) {
            if (refs.open.current) setOpen('');
            else setOpen(refs.focus.current?.value);
          }

          break;

        case 'Escape':
          if (refs.open.current) setOpen('');

          break;

        case 'Home':
          // If any item is in the focus
          if (refs.focus.current) {
            event.preventDefault();

            const tabIndexItems: Array<HTMLElement> = Array.from(refs.root.current.querySelectorAll(`[tabindex='0']`));

            refs.items.current.reverse();

            let index = refs.items.current.findIndex(item_ => !item_.disabled);

            refs.items.current.reverse();

            if (index > -1) {
              index = refs.items.current.length - 1 - index;

              const item = refs.items.current[index];

              if (item) {
                const itemHTML: HTMLElement = tabIndexItems.find((item_: HTMLElement) => item_.dataset.value === item.value);

                setOpen(item.value);

                if (itemHTML) itemHTML.focus();
              }
            }
          }

          break;

        case 'End':
          // If any item is in the focus
          if (refs.focus.current) {
            event.preventDefault();

            const tabIndexItems: Array<HTMLElement> = Array.from(refs.root.current.querySelectorAll(`[tabindex='0']`));

            const index = refs.items.current.findIndex(item_ => !item_.disabled);

            if (index > -1) {
              const item = refs.items.current[index];

              if (item) {
                const itemHTML: HTMLElement = tabIndexItems.find((item_: HTMLElement) => item_.dataset.value === item.value);

                setOpen(item.value);

                if (itemHTML) itemHTML.focus();
              }
            }
          }

          break;

        case 'ArrowUp':
        case 'ArrowDown':
        case 'ArrowLeft':
        case 'ArrowRight':
          // If any item is in the focus
          if (refs.focus.current) {
            event.preventDefault();

            const tabIndexItems: Array<HTMLElement> = Array.from(refs.root.current.querySelectorAll(`[tabindex='0']`));

            const index = refs.items.current.findIndex(item_ => item_.value === refs.focus.current.value);

            let indexNew = undefined;
            let i = index;
            let item: any;

            while (indexNew === undefined && i >= 0 && i < refs.items.current.length) {
              ['ArrowDown', 'ArrowLeft'].includes(event.key) ? i-- : i++;

              item = refs.items.current[i];

              if (!item?.disabled) indexNew = i;
            }

            if (item) {
              const itemHTML: HTMLElement = tabIndexItems.find((item_: HTMLElement) => item_.dataset.value === item.value);

              setOpen(item.value);

              if (itemHTML) itemHTML.focus();
            }
          }

          break;

        default:
          break;
      }
    };

    window.addEventListener('keydown', method);

    return () => {
      window.removeEventListener('keydown', method);
    };
  }, []);

  const onBlur = React.useCallback((item: any) => {
    setOpen('');
    setFocus('');
  }, []);

  const onFocus = React.useCallback((item: any) => {
    if (item && !item.disabled) {
      setFocus(item);

      if (open !== item.value) setOpen(item.value);
    }
  }, [open]);

  const onMouseLeave = React.useCallback((item: any) => {
    setOpen('');
  }, []);

  const onMouseEnter = React.useCallback((item: any) => {
    if (item && !item.disabled) {
      setOpen(item.value);
    }
  }, []);

  const onClick = React.useCallback((item: any) => {
    if (item && !item.disabled) {
      open ? setOpen('') : setOpen(item.value);
    }
  }, [open]);

  const onClickOutside = React.useCallback(() => {
    if (open) setOpen('');
  }, [open]);

  // If no items don't render anything
  // not to waste html space
  if (!items?.length) return;

  return (
    <ClickListener
      onClickOutside={onClickOutside}
    >
      <Line
        ref={item => {
          if (ref) ref.current = item;

          refs.root.current = item;
        }}

        gap={0}

        direction='column'

        align='unset'

        justify='unset'

        className={classNames([
          staticClassName('MenuDesktop', theme) && [
            'AmauiMenuDesktop-root'
          ],

          className,
          classes.root
        ])}

        {...other}
      >
        <Line
          gap={0}

          direction='row'

          align='unset'

          justify='unset'
        >
          {items.map((item: any, index: number) => (
            // hovered and onClick add to the method
            is('function', renderItem) ? renderItem(item, index) : (
              <Line
                key={index}

                tabIndex={!item.disabled ? 0 : undefined}

                data-value={item.value}

                gap={0.5}

                direction='row'

                align='center'

                {...ItemProps}

                {...(openOnClick && {
                  onClick: () => onClick(item)
                })}

                {...(openOnFocus && {
                  onFocus: () => onFocus(item),

                  onBlur: () => onBlur(item)
                })}

                {...(openOnHover && {
                  onMouseEnter: () => onMouseEnter(item),

                  onMouseLeave: () => onMouseLeave(item)
                })}

                className={classNames([
                  staticClassName('MenuDesktop', theme) && [
                    'AmauiMenuDesktop-item',
                    open === item.value && `AmauiMenuDesktop-open`,
                    item.disabled && `AmauiMenuDesktop-disabled`
                  ],

                  ItemProps?.className,
                  classes.item,
                  item.disabled && classes.item_disabled
                ])}
              >
                <Type
                  version='l1'

                  {...TypeProps}
                >
                  {item.label}
                </Type>

                <IconIndicator
                  size={20}

                  className={classNames([
                    staticClassName('MenuDesktop', theme) && [
                      'AmauiMenuDesktop-indicator'
                    ],

                    classes.indicator,
                    open === item.value && classes.indicator_open
                  ])}

                  {...IconProps}
                />
              </Line>
            )
          ))}
        </Line>
      </Line>
    </ClickListener>
  );
});

MenuDesktop.displayName = 'AmauiMenuDesktop';

export default MenuDesktop;
