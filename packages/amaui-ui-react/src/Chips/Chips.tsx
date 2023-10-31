import React from 'react';

import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Line from '../Line';
import Chip, { IChip } from '../Chip/Chip';

import { staticClassName, TElement, TPropsAny } from '../utils';

const useStyle = styleMethod(theme => ({
  root: {
    width: '100%',
    padding: '1px',

    '&:not($wrap)': {
      overflowX: 'auto',

      '&$small': {
        paddingRight: '6px'
      },

      '&$regular': {
        paddingRight: '8px'
      },

      '&$large': {
        paddingRight: '10px'
      },
    }
  },

  size_small: {
    // columnGap: '6px'
  },

  size_regular: {
    // columnGap: '8px'
  },

  size_large: {
    // columnGap: '10px'
  },

  wrap: {
    flexWrap: 'wrap'
  },

  wrap_small: {
    // rowGap: '12px'
  },

  wrap_regular: {
    // rowGap: '16px'
  },

  wrap_large: {
    // rowGap: '20px'
  }
}), { name: 'amaui-Chips' });

export interface IChips extends IChip {
  total?: number;
  max?: number;

  AdditionalChip?: TElement;

  AdditionalChipProps?: TPropsAny;
}

const Chips = React.forwardRef((props_: IChips, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiChips?.props?.default, ...props_ }), [props_]);

  const { classes } = useStyle(props);

  const {
    size = 'regular',

    gap = 1,
    align = 'flex-start',
    justify = 'flex-start',
    direction = 'row',
    wrap,

    total,
    max,

    showAllDefault,

    onMoreShowAll = true,

    AdditionalChip,

    AdditionalChipProps = {},

    Component = 'div',

    className,

    style,

    children: children_,

    ...other
  } = props;

  const [showAll, setShowAll] = React.useState(showAllDefault !== undefined ? showAllDefault : false);

  const onClickMore = React.useCallback(() => {
    setShowAll(true);
  }, []);

  let children = React.Children.toArray(children_);

  if (!showAll) {
    children = children.slice(0, max || (children_ as any).length);

    if ((total !== undefined && total - (children_ as any).length >= 1) || max < (children_ as any).length) {
      let value: any;

      if ((total !== undefined && total - (children_ as any).length >= 1)) value = `+${total - (children_ as any).length}`;
      else value = `+${Math.abs((children_ as any).length - max)}`;

      if (!AdditionalChipProps.TypeProps) AdditionalChipProps.TypeProps = {};

      AdditionalChipProps.TypeProps.size = '0.44em';

      children.push(
        (AdditionalChip as any) ||

        <Chip
          color='neutral'

          {...other}

          {...AdditionalChipProps}

          onClick={onMoreShowAll ? onClickMore : undefined}
        >
          {value}
        </Chip>
      );
    }
  }

  return (
    <Line
      ref={ref}

      gap={gap}

      justify={justify}

      align={align}

      direction={direction}

      wrap={wrap}

      Component={Component}

      className={classNames([
        staticClassName('Chips', theme) && [
          'amaui-Chips-root'
        ],

        className,
        classes.root,
        classes[`size_${size}`],
        wrap === 'wrap' && [
          classes.wrap,
          classes[`wrap_${size}`]
        ]
      ])}

      style={style}
    >
      {React.Children.toArray(children).map((item: any, index: number) => React.cloneElement(item, {
        key: index,

        size,

        ...other,

        ...item.props
      }))}
    </Line>
  );
});

Chips.displayName = 'amaui-Chips';

export default Chips;
