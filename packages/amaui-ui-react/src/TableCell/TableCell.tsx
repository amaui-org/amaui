import React from 'react';

import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import { clamp, is } from '@amaui/utils';
import LineElement from '../Line';
import Divider from '../Divider';
import { TLineAlign, TLineJustify } from '../Line/Line';
import { getOverflowParent, staticClassName } from '../utils';
import { IBaseElement, ITonal, IColor, ISize, IPropsAny } from '../types';

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
  }
}), { name: 'amaui-TableCell' });

export interface ITableCell extends IBaseElement {
  tonal?: ITonal;
  color?: IColor;
  size?: ISize;

  position?: 'head' | 'body';
  align?: TLineAlign;
  justify?: TLineJustify;
  noWeight?: boolean;

  sticky?: boolean;
  stickyPosition?: 'left' | 'right';
  stickyOffset?: number;

  DividerProps?: IPropsAny;
}

const TableCell: React.FC<ITableCell> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiTableCell?.props?.default, ...props_ }), [props_]);

  const {
    tonal = true,
    color,
    size = 'regular',

    position = 'body',
    align = 'center',
    justify = 'flex-end',
    noWeight,

    sticky,
    stickyPosition = 'left',
    stickyOffset,

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

  const refs = {
    root: React.useRef<HTMLElement>()
  };

  const init = React.useCallback(() => {
    setTimeout(() => {
      if (sticky) {
        const parent = refs.root.current.parentElement;

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
        direction='row'

        align={align}

        justify={justify}

        className={classNames([
          staticClassName('TableCell', theme) && [
            `amaui-TableCell-value`
          ],

          classes.value,
          classes[`size_${size}`]
        ])}
      >
        {children}
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
