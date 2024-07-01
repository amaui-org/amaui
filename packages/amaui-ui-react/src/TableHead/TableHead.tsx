import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import SurfaceElement from '../Surface';
import { ISurface } from '../Surface/Surface';
import { getOverflowParent, staticClassName } from '../utils';
import { ISize } from '../types';
import TableRowElement from '../TableRow';
import LinearProgressElement from '../LinearProgress';

const useStyle = styleMethod(theme => ({
  root: {
    display: 'table-header-group',
    background: 'inherit'
  },

  sticky: {
    position: 'sticky',
    top: '0',
    zIndex: '114',
    transition: theme.methods.transitions.make('box-shadow')
  },

  stickyActive: {
    boxShadow: `0px 0px 16px ${theme.palette.light ? 'rgba(0, 0, 0, 0.04)' : 'rgba(255, 255, 255, 0.14)'}`
  },

  rowLoader: {

  },

  tdLoader: {
    '&.amaui-LinearProgress-root': {
      position: 'absolute',
      inset: 0
    }
  }
}), { name: 'amaui-TableHead' });

export interface ITableHead extends ISurface {
  size?: ISize;

  sticky?: boolean;

  stickyOffset?: number;

  loading?: boolean;

  LinearGradientProps?: any;
  TableRowLoaderProps?: any;
}

const TableHead: React.FC<ITableHead> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiTableHead?.props?.default, ...props_ }), [props_]);

  const Surface = React.useMemo(() => theme?.elements?.Surface || SurfaceElement, [theme]);

  const TableRow = React.useMemo(() => theme?.elements?.TableRow || TableRowElement, [theme]);

  const LinearProgress = React.useMemo(() => theme?.elements?.LinearProgress || LinearProgressElement, [theme]);

  const {
    tonal = true,
    color = 'themed',
    size = 'regular',

    sticky,
    stickyOffset = 0,

    loading,

    LinearGradientProps,

    TableRowLoaderProps,

    Component = 'thead',

    className,

    style,

    children,

    ...other
  } = props;

  const { classes } = useStyle();

  const [root, setRoot] = React.useState<HTMLElement>();
  const [stickyActive, setStickyActive] = React.useState(false);

  const refs = {
    root: React.useRef<HTMLElement>()
  };

  const styleOther: any = {};

  if (sticky && stickyOffset !== undefined) styleOther.top = stickyOffset;

  React.useEffect(() => {
    if (sticky) {
      if (root) {
        const parentOverflow = getOverflowParent(root);

        const offsetPrevious = root.offsetTop;

        const method = () => {
          const offsetNew = root.offsetTop;

          setStickyActive(offsetPrevious !== offsetNew);
        };

        if (parentOverflow) parentOverflow.addEventListener('scroll', method, { passive: false });

        return () => {
          parentOverflow.removeEventListener('scroll', method);
        };
      }
    }
  }, [sticky, root]);

  return (
    <Surface
      ref={(item: any) => {
        if (ref) {
          if (is('function', ref)) ref(item);
          ref.current = item;
        }

        refs.root.current = item;

        setRoot(item);
      }}

      tonal={tonal}

      color={color}

      role='rowgroup'

      Component={Component}

      className={classNames([
        staticClassName('TableHead', theme) && [
          `amaui-TableHead-root`,
          `amaui-TableHead-size-${size}`,
          sticky && `amaui-TableHead-sticky`,
          stickyActive && `amaui-TableHead-sticky-active`
        ],

        className,
        classes.root,
        sticky && classes.sticky,
        stickyActive && classes.stickyActive
      ])}

      style={{
        ...style,

        ...styleOther
      }}

      {...other}
    >
      {React.Children.toArray(children).map((item: any, index: number) => (
        React.cloneElement(item, {
          key: index,

          tonal: item.props.tonal !== undefined ? item.props.tonal : tonal,

          color: item.props.color !== undefined ? item.props.color : color,

          size: item.props.size !== undefined ? item.props.size : size,

          position: 'head'
        })
      ))}

      {loading && (
        <TableRow
          {...TableRowLoaderProps}

          className={classNames([
            staticClassName('TableHead', theme) && [
              `amaui-TableHead-row-loader`
            ],

            TableRowLoaderProps?.className,
            classes.rowLoader
          ])}
        >
          <LinearProgress
            tonal

            color='primary'

            colspan='100%'

            Component='td'

            {...LinearGradientProps}

            className={classNames([
              staticClassName('TableHead', theme) && [
                `amaui-TableHead-td-loader`
              ],

              LinearGradientProps?.className,
              classes.tdLoader
            ])}
          />
        </TableRow>
      )}
    </Surface>
  );
});

TableHead.displayName = 'amaui-TableHead';

export default TableHead;
