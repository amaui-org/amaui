import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialShoppingBasketRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShoppingBasketRounded'
      short_name='ShoppingBasket'

      {...props}
    >
      <path d="M5 21Q4.575 21 4.225 20.738Q3.875 20.475 3.75 20.05L0.95 9.95Q0.825 9.6 1.062 9.3Q1.3 9 1.7 9H6.75L11.15 2.45Q11.275 2.25 11.5 2.125Q11.725 2 11.975 2Q12.225 2 12.45 2.125Q12.675 2.25 12.8 2.45L17.2 9H22.3Q22.7 9 22.938 9.3Q23.175 9.6 23.05 9.95L20.25 20.05Q20.125 20.475 19.775 20.738Q19.425 21 19 21ZM9.175 9H14.8L11.975 4.8ZM5.5 19H18.5H5.5ZM12 17Q12.825 17 13.413 16.413Q14 15.825 14 15Q14 14.175 13.413 13.587Q12.825 13 12 13Q11.175 13 10.588 13.587Q10 14.175 10 15Q10 15.825 10.588 16.413Q11.175 17 12 17ZM5.5 19H18.5L20.7 11H3.3Z"/>
    </Icon>
  );
});

IconMaterialShoppingBasketRounded.displayName = 'AmauiIconMaterialShoppingBasketRounded';

export default IconMaterialShoppingBasketRounded;
