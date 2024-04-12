import React from 'react';

import { classNames, style as styleMethod, useAmauiTheme } from '@amaui/style-react';

import IconElement from '../Icon';
import IconButtonElement from '../IconButton';
import Menu, { IMenu } from '../Menu/Menu';
import { staticClassName } from '../utils';
import { IPropsAny } from '../types';

const IconMaterialMoreVert = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MoreVert'

      short_name='MoreVert'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20q-.825 0-1.412-.587Q10 18.825 10 18q0-.825.588-1.413Q11.175 16 12 16t1.413.587Q14 17.175 14 18q0 .825-.587 1.413Q12.825 20 12 20Zm0-6q-.825 0-1.412-.588Q10 12.825 10 12t.588-1.413Q11.175 10 12 10t1.413.587Q14 11.175 14 12q0 .825-.587 1.412Q12.825 14 12 14Zm0-6q-.825 0-1.412-.588Q10 6.825 10 6t.588-1.412Q11.175 4 12 4t1.413.588Q14 5.175 14 6t-.587 1.412Q12.825 8 12 8Z" />
    </Icon>
  );
});

const useStyle = styleMethod(theme => ({
  root: {

  },

  iconButton: {
    flex: '0 0 auto'
  }
}), { name: 'amaui-MoreOptions' });

export interface IMoreOptions extends IMenu {
  Icon?: any;

  IconButtonProps?: IPropsAny;
}

const MoreOptions: React.FC<IMoreOptions> = React.forwardRef((props_, ref: any) => {
  const theme = useAmauiTheme();

  const props = React.useMemo(() => ({ ...theme?.ui?.elements?.all?.props?.default, ...theme?.ui?.elements?.amauiMoreOptions?.props?.default, ...props_ }), [props_]);

  const {
    menuItems,

    Icon: Icon_ = IconMaterialMoreVert,

    IconButtonProps,

    className,

    ...other
  } = props;

  const { classes } = useStyle();

  const onClick = React.useCallback((event: MouseEvent) => {
    //  event.stopPropagation();
  }, []);

  return (
    <Menu
      alignment='center'

      onClick={onClick}

      menuItems={menuItems}

      {...other}

      ListProps={{
        color: 'themed',
        size: 'small',

        ...other?.ListProps
      }}

      className={classNames([
        staticClassName('MoreOptions', theme) && [
          'amaui-MoreOptions-root'
        ],

        className,
        classes.root
      ])}
    >
      <IconButton
        color='inherit'

        size='small'

        disabled={!menuItems?.length}

        onClick={onClick}

        {...IconButtonProps}

        className={classNames([
          staticClassName('MoreOptions', theme) && [
            'amaui-MoreOptions-icon-button'
          ],

          IconButtonProps?.className,
          classes.iconButton
        ])}
      >
        <Icon_ />
      </IconButton>
    </Menu>
  );
});

MoreOptions.displayName = 'amaui-MoreOptions';

export default MoreOptions;
