import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialShoppingBasketSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShoppingBasketSharpW100Filled'
      short_name='ShoppingBasket'

      {...props}
    >
      <path d="M5.075 19.7 2.375 10.3H8.05L11.75 4.7Q11.8 4.625 11.875 4.587Q11.95 4.55 12.025 4.55Q12.1 4.55 12.175 4.587Q12.25 4.625 12.3 4.7L15.95 10.3H21.625L18.875 19.7ZM8.9 10.3H15.1L12 5.55ZM12 15.7Q12.275 15.7 12.488 15.488Q12.7 15.275 12.7 15Q12.7 14.725 12.488 14.512Q12.275 14.3 12 14.3Q11.725 14.3 11.513 14.512Q11.3 14.725 11.3 15Q11.3 15.275 11.513 15.488Q11.725 15.7 12 15.7Z"/>
    </Icon>
  );
});

IconMaterialShoppingBasketSharpW100Filled.displayName = 'AmauiIconMaterialShoppingBasketSharpW100Filled';

export default IconMaterialShoppingBasketSharpW100Filled;
