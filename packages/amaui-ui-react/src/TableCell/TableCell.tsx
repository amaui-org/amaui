import React from 'react';

import { clamp, is } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import LineElement from '../Line';
import IconButtonElement from '../IconButton';
import TypeElement from '../Type';
import DividerElement from '../Divider';
import IconElement from '../Icon';
import { TLineAlign, TLineJustify } from '../Line/Line';
import { getOverflowParent, staticClassName } from '../utils';
import { IBaseElement, ITonal, IColor, ISize, IPropsAny } from '../types';

const IconMaterialArrowDownwardAlt = React.forwardRef((props: any, ref) => {

  return (
    <IconElement
      ref={ref}

      name='ArrowDownwardAlt'

      short_name='ArrowDownwardAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-392v-328q0-17 11.5-28.5T480-760q17 0 28.5 11.5T520-720v328l116-116q11-11 28-11t28 11q11 11 11 28t-11 28L508-268q-12 12-28 12t-28-12L268-452q-11-11-11-28t11-28q11-11 28-11t28 11l116 116Z" />
    </IconElement>
  );
});

const useStyle = styleMethod(theme => ({
  root: {
    display: 'table-cell',
    position: 'relative',
    zIndex: '1',
    background: 'inherit',

    ...theme.typography.values.b2,

    '&::before': {
      content: "''",
      position: 'absolute',
      inset: '0',
      background: 'currentColor',
      opacity: '0',
      transition: theme.methods.transitions.make('opacity', { duration: 'xxs' }),
      zIndex: '-1'
    }
  },

  value: {

  },

  size_small: {
    padding: `${theme.methods.space.value(1, 'px')} ${theme.methods.space.value(2, 'px')}`
  },

  size_regular: {
    padding: theme.methods.space.value(2, 'px')
  },

  size_large: {
    padding: theme.methods.space.value(3, 'px')
  },

  head: {
    fontWeight: 'bold'
  },

  body: {

  },

  divider: {
    '&.amaui-Divider-root': {
      position: 'absolute',
      left: '0px',
      bottom: '0px',
      margin: '0px'
    }
  },

  noWeight: {
    fontWeight: '400'
  },

  sticky: {
    position: 'sticky',
    zIndex: '14',

    '&::after': {
      content: "''",
      position: 'absolute',
      top: '0',
      right: '-24px',
      bottom: '0',
      width: '24px',
      transition: theme.methods.transitions.make('box-shadow'),
      pointerEvents: 'none'
    }
  },

  stickyActive: {
    '&::after': {
      boxShadow: `inset 11px 0 7px -7px ${theme.palette.light ? 'rgba(0, 0, 0, 0.04)' : 'rgba(255, 255, 255, 0.14)'}`
    }
  },

  sort: {
    cursor: 'pointer',
    borderRadius: 2,

    '& > *:nth-child(1)': {
      // '&:focus': {
      //   outline: `1px solid ${theme.palette.text.default.primary}`,
      //   outlineOffset: 2
      // }
    }
  },

  sortedBy: {
    '& .amaui-Icon-root': {
      transition: theme.methods.transitions.make('transform')
    }
  },

  sortedBy_asc: {
    '& .amaui-Icon-root': {
      transform: 'rotate(180deg)'
    }
  }
}), { name: 'amaui-TableCell' });

export type ITableCellSort = 'asc' | 'desc';

export interface ITableCell extends IBaseElement {
  tonal?: ITonal;
  color?: IColor;
  size?: ISize;

  sort?: boolean;
  sortedByDefault?: ITableCellSort;
  sortedBy?: ITableCellSort;

  onSort?: (value: ITableCellSort) => any;

  position?: 'head' | 'body';
  align?: TLineAlign;
  justify?: TLineJustify;
  noWeight?: boolean;

  sticky?: boolean;
  stickyPosition?: 'left' | 'right';
  stickyOffset?: number;

  disabled?: boolean;

  IconArrow?: any;

  IconButtonSortProps?: any;
  DividerProps?: IPropsAny;
}

const TableCell: React.FC<ITableCell> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiTableCell?.props?.default, ...props_ }), [props_]);

  const Line = React.useMemo(() => theme?.elements?.Line || LineElement, [theme]);

  const Type = React.useMemo(() => theme?.elements?.Type || TypeElement, [theme]);

  const IconButton = React.useMemo(() => theme?.elements?.IconButton || IconButtonElement, [theme]);

  const Divider = React.useMemo(() => theme?.elements?.Divider || DividerElement, [theme]);

  const {
    tonal = true,
    color,
    size = 'regular',

    position = 'body',
    align = 'center',
    justify = 'flex-end',
    noWeight,

    sort,
    sortedBy: sortedBy_,
    sortedByDefault,

    onSort: onSort_,

    sticky,
    stickyPosition = 'left',
    stickyOffset,

    disabled,

    IconArrow = IconMaterialArrowDownwardAlt,

    IconButtonSortProps,
    DividerProps,

    Component = props.position === 'head' ? 'th' : 'td',

    className,

    style,

    children,

    ...other
  } = props;

  const { classes } = useStyle();

  const [root, setRoot] = React.useState<HTMLElement>();
  const [stickyActive, setStickyActive] = React.useState(false);
  const [offset, setOffset] = React.useState(0);
  const [sortedBy, setSortedBy] = React.useState(sortedByDefault);

  const refs = {
    root: React.useRef<HTMLElement>()
  };

  const init = React.useCallback(() => {
    setTimeout(() => {
      if (sticky) {
        const parent = refs.root.current?.parentElement;

        if (parent) {
          const elements = Array.from(parent.children);

          const index = elements.findIndex(item => item === refs.root.current);

          let elementsOffset = stickyPosition === 'left' ? elements.slice(0, index) : elements.slice(index + 1);

          elementsOffset = elementsOffset.filter(item => item.classList.contains('amaui-TableCell-sticky'));

          const offset_ = elementsOffset.reduce((result, item) => {
            result += item.clientWidth;

            return result;
          }, 0);

          setOffset(clamp(offset_, 0));
        }
      }
    }, 140);
  }, [sticky, stickyPosition]);

  React.useEffect(() => {
    // init
    init();
  }, []);

  React.useEffect(() => {
    if (sortedBy !== sortedBy_) setSortedBy(sortedBy_);
  }, [sortedBy_]);

  React.useEffect(() => {
    if (sticky) {
      if (root) {
        const parentOverflow = getOverflowParent(root);

        const offsetPrevious = stickyPosition === 'left' ? root.offsetLeft : (window.innerWidth - root.getBoundingClientRect().right);

        const method = () => {
          const offsetNew = stickyPosition === 'left' ? root.offsetLeft : (window.innerWidth - root.getBoundingClientRect().right);

          setStickyActive(offsetPrevious !== offsetNew);
        };

        if (parentOverflow) parentOverflow.addEventListener('scroll', method, { passive: false });

        return () => {
          parentOverflow.removeEventListener('scroll', method);
        };
      }
    }
  }, [sticky, stickyPosition, root]);

  const onSort = React.useCallback(() => {
    let valueNew: any;

    setSortedBy(item => {
      valueNew = item === 'asc' ? 'desc' : 'asc';

      return valueNew;
    });

    if (is('function', onSort_)) onSort_!(valueNew);
  }, [onSort_]);

  const stylesOther: any = {};

  if (sticky) {
    stylesOther[stickyPosition === 'left' ? 'left' : 'right'] = offset + (stickyOffset !== undefined ? stickyOffset : 0);

    if (position === 'head') stylesOther.zIndex = '17';
  }

  return (
    <Component
      ref={(item: any) => {
        if (ref) {
          if (is('function', ref)) ref(item);
          ref.current = item;
        }

        refs.root.current = item;

        setRoot(item);
      }}

      role='cell'

      className={classNames([
        staticClassName('TableCell', theme) && [
          `amaui-TableCell-root`,
          `amaui-TableCell-size-${size}`,
          sticky && `amaui-TableCell-sticky`,
          stickyPosition && `amaui-TableCell-sticky-position-${stickyPosition}`,
          stickyActive && `amaui-TableHead-sticky-active`
        ],

        className,
        classes.root,
        position === 'head' ? classes.head : classes.body,
        noWeight && classes.noWeight,
        sticky && classes.sticky,
        stickyActive && classes.stickyActive
      ])}

      style={{
        ...style,

        ...stylesOther
      }}

      {...other}
    >
      <Line
        gap={0}

        direction='row'

        align={align}

        justify={justify}

        className={classNames([
          staticClassName('TableCell', theme) && [
            `amaui-TableCell-value`
          ],

          classes.value,
          classes[`size_${size}`],
          sort !== undefined && classes.sort
        ])}
      >
        {is('string', children) ? (
          <Type
            version='l2'

            tabIndex={sort !== undefined ? 0 : undefined}
          >
            {children}
          </Type>
        ) : (
          children && React.cloneElement(children as any, {
            tabIndex: sort !== undefined ? 0 : undefined
          })
        )}

        {sort && (
          <IconButton
            size='small'

            onClick={onSort}

            disabled={disabled}

            className={classNames([
              staticClassName('TableCell', theme) && [
                `amaui-TableCell-sort-icon-button`
              ],

              classes.sortedBy,
              classes[`sortedBy_${sortedBy}`]
            ])}
          >
            <IconArrow />
          </IconButton>
        )}
      </Line>

      <Divider
        color='inherit'

        {...DividerProps}

        className={classNames([
          DividerProps?.className,
          classes.divider
        ])}
      />
    </Component>
  );
});

TableCell.displayName = 'amaui-TableCell';

export default TableCell;
