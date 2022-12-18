import React from 'react';

import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Surface from '../Surface';
import { ISurface } from '../Surface/Surface';

import { staticClassName, TElement, TElementReference, TPropsAny, TSize } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {
    display: 'table',
    borderRadius: `${theme.shape.radius.unit * 2}px`,
    width: '100%',
    overflow: 'hidden',

    ...theme.typography.values.b2
  },

  table: {
    display: 'table',
    width: '100%',
    borderCollapse: 'collapse',
    borderSpacing: '0px'
  }
}), { name: 'amaui-Table' });

export interface ITable extends ISurface {
  size?: TSize;

  header?: TElement;
  footer?: TElement;

  WrapperComponentProps?: TPropsAny;

  TableComponent?: TElementReference;
  WrapperComponent?: TElementReference;
}

const Table = React.forwardRef((props_: ITable, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiTable?.props?.default, ...props_ }), [props_]);

  const {
    tonal = true,
    color = 'themed',
    size = 'regular',
    elevation = 1,

    header,
    footer,

    WrapperComponentProps,

    TableComponent = 'table',
    WrapperComponent = 'div',

    Component = 'div',

    className,

    children,

    ...other
  } = props;

  const { classes } = useStyle(props);

  return (
    <Surface
      ref={ref}

      tonal={tonal}

      color={color}

      elevation={elevation}

      Component={Component}

      className={classNames([
        staticClassName('Table', theme) && [
          `amaui-Table-root`
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      {header && React.cloneElement(header as any, {
        tonal: (header as any).props.tonal !== undefined ? (header as any).props.tonal : tonal,

        color: (header as any).props.color !== undefined ? (header as any).props.color : color,

        size: (header as any).props.size !== undefined ? (header as any).props.size : size
      })}

      <WrapperComponent
        {...WrapperComponentProps}

        className={classNames([
          staticClassName('Table', theme) && [
            `amaui-Table-wrapper`
          ],

          WrapperComponentProps?.className,
          classes.wrapper
        ])}
      >
        <TableComponent
          className={classNames([
            staticClassName('Table', theme) && [
              `amaui-Table-table`,
              header && `amaui-Table-header`,
              footer && `amaui-Table-footer`
            ],

            classes.table
          ])}
        >
          {React.Children.toArray(children).map((item: any) => (
            React.cloneElement(item, {
              tonal: item.props.tonal !== undefined ? item.props.tonal : tonal,

              color: item.props.color !== undefined ? item.props.color : color,

              size: item.props.size !== undefined ? item.props.size : size
            })
          ))}
        </TableComponent>
      </WrapperComponent>

      {footer && React.cloneElement(footer as any, {
        tonal: (footer as any).props.tonal !== undefined ? (footer as any).props.tonal : tonal,

        color: (footer as any).props.color !== undefined ? (footer as any).props.color : color,

        size: (footer as any).props.size !== undefined ? (footer as any).props.size : size
      })}
    </Surface>
  );
});

Table.displayName = 'amaui-Table';

export default Table;
