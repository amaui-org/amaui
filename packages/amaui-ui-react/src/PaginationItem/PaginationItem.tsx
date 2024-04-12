import React from 'react';

import { is } from '@amaui/utils';
import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import Type from '../Type';
import Button from '../Button';
import { IButton } from '../Button/Button';
import { staticClassName } from '../utils';
import { IPropsAny } from '../types';

const useStyle = styleMethod(theme => ({
  root: {

  },

  size_small: {
    '&.amaui-Button-root': {
      width: 'unset',
      minWidth: '30px',
      paddingInline: theme.methods.space.value(0.5, 'px')
    }
  },

  size_regular: {
    '&.amaui-Button-root': {
      width: 'unset',
      minWidth: '40px',
      paddingInline: theme.methods.space.value(1, 'px')
    }
  },

  size_large: {
    '&.amaui-Button-root': {
      width: 'unset',
      minWidth: '50px',
      paddingInline: theme.methods.space.value(1.25, 'px')
    }
  }
}), { name: 'amaui-PaginationItem' });

export interface IPaginationItem extends IButton {
  TypeProps?: IPropsAny;
}

const PaginationItem: React.FC<IPaginationItem> = React.forwardRef((props_, ref) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiPaginationItem?.props?.default, ...props_ }), [props_]);

  const { classes } = useStyle();

  const {
    tonal = false,
    color = 'default',
    version = 'text',
    elevation = false,
    size = 'regular',

    TypeProps,

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

      noFontSize

      className={classNames([
        staticClassName('PaginationItem', theme) && [
          'amaui-PaginationItem-root'
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

PaginationItem.displayName = 'amaui-PaginationItem';

export default PaginationItem;
