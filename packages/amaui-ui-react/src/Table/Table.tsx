import React from 'react';

import { classNames, style, useAmauiTheme } from '@amaui/style-react';

import Surface from '../Surface';

import { staticClassName } from '../utils';

const useStyle = style(theme => ({
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
}), { name: 'AmauiTable' });

const Table = React.forwardRef((props_: any, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiTable?.props?.default }), [props_]);

  const {
    tonal,
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
          `AmauiTable-root`,
          `AmauiTable-size-${size}`
        ],

        className,
        classes.root
      ])}

      {...other}
    >
      {header && React.cloneElement(header, {
        tonal: header.props.tonal !== undefined ? header.props.tonal : tonal,

        color: header.props.color !== undefined ? header.props.color : color,

        size: header.props.size !== undefined ? header.props.size : size
      })}

      <WrapperComponent
        {...WrapperComponentProps}

        className={classNames([
          staticClassName('Table', theme) && [
            `AmauiTable-wrapper`
          ],

          WrapperComponentProps?.className,
          classes.wrapper
        ])}
      >
        <TableComponent
          className={classNames([
            staticClassName('Table', theme) && [
              `AmauiTable-table`,
              header && `AmauiTable-header`,
              footer && `AmauiTable-footer`
            ],

            classes.table
          ])}
        >
          {React.Children.toArray(children).map((item: any) => (
            React.cloneElement(item, {
              tonal: item.props.tonal !== undefined ? item.props.tonal : tonal,

              color: item.props.color !== undefined ? item.props.color : color,

              size: header.props.size !== undefined ? header.props.size : size
            })
          ))}
        </TableComponent>
      </WrapperComponent>

      {footer && React.cloneElement(footer, {
        tonal: footer.props.tonal !== undefined ? footer.props.tonal : tonal,

        color: footer.props.color !== undefined ? footer.props.color : color,

        size: header.props.size !== undefined ? header.props.size : size
      })}
    </Surface>
  );
});

Table.displayName = 'AmauiTable';

export default Table;
