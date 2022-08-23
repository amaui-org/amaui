import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialShoppingBasketRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShoppingBasketRoundedW100'
      short_name='ShoppingBasket'

      {...props}
    >
      <path d="M5.65 19.7Q5.375 19.7 5.162 19.538Q4.95 19.375 4.9 19.1L2.55 10.9Q2.475 10.675 2.65 10.487Q2.825 10.3 3.1 10.3H8.05L11.75 4.7Q11.8 4.625 11.875 4.587Q11.95 4.55 12.025 4.55Q12.1 4.55 12.175 4.587Q12.25 4.625 12.3 4.7L15.95 10.3H20.9Q21.175 10.3 21.35 10.487Q21.525 10.675 21.45 10.9L19.05 19.1Q18.95 19.375 18.7 19.538Q18.45 19.7 18.15 19.7ZM8.9 10.3H15.1L12 5.55ZM5.5 19H18.5H5.5ZM12 15.7Q12.275 15.7 12.488 15.488Q12.7 15.275 12.7 15Q12.7 14.725 12.488 14.512Q12.275 14.3 12 14.3Q11.725 14.3 11.513 14.512Q11.3 14.725 11.3 15Q11.3 15.275 11.513 15.488Q11.725 15.7 12 15.7ZM5.5 19H18.5L20.7 11H3.3Z"/>
    </Icon>
  );
});

IconMaterialShoppingBasketRoundedW100.displayName = 'AmauiIconMaterialShoppingBasketRoundedW100';

export default IconMaterialShoppingBasketRoundedW100;
