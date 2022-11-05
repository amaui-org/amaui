import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme, AmauiTheme } from '@amaui/style-react';

import Type from '../Type';
import Button from '../Button';
import { IButton } from '../Button/Button';

import { staticClassName, TPropsAny } from '../utils';

const useStyle = styleMethod((theme: AmauiTheme) => ({
  root: {

  },

  size_small: {
    '&.AmauiButton-root': {
      width: 'unset',
      minWidth: '30px',
      paddingInline: '3px'
    }
  },

  size_regular: {
    '&.AmauiButton-root': {
      width: 'unset',
      minWidth: '40px',
      paddingInline: '7px'
    }
  },

  size_large: {
    '&.AmauiButton-root': {
      width: 'unset',
      minWidth: '50px',
      paddingInline: '10px'
    }
  }
}), { name: 'AmauiPaginationItem' });

export interface IPaginationItem extends IButton {
  TypeProps?: TPropsAny;
}

const PaginationItem = React.forwardRef((props_: IPaginationItem, ref) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...props_, ...theme?.ui?.elements?.AmauiPaginationItem?.props?.default }), [props_]);

  const { classes } = useStyle(props);

  const {
    tonal = false,
    color = 'default',
    version = 'text',
    elevation = false,
    size = 'regular',

    TypeProps = {
      version: props.size === 'large' ? 'b1' : props.size === 'small' ? 'b3' : 'b2'
    },

    className,

    children,

    ...other
  } = props;

  return (
    <Button
      ref={ref}

      tonal={tonal}

      color={color}

      version={version}

      elevation={elevation}

      size={size}

      icon

      className={classNames([
        staticClassName('PaginationItem', theme) && [
          'AmauiPaginationItem-root'
        ],

        className,
        classes.root,
        classes[`size_${size}`]
      ])}

      {...other}
    >
      {is('simple', children) ?
        (
          <Type
            {...TypeProps}
          >
            {children}
          </Type>
        ) :
        children
      }
    </Button>
  );
});

PaginationItem.displayName = 'AmauiPaginationItem';

export default PaginationItem;
