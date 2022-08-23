import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialShoppingBasketSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShoppingBasketSharp'
      short_name='ShoppingBasket'

      {...props}
    >
      <path d="M4.025 21 0.675 9H6.75L11.15 2.45Q11.275 2.25 11.5 2.125Q11.725 2 11.975 2Q12.225 2 12.45 2.125Q12.675 2.25 12.8 2.45L17.2 9H23.325L19.975 21ZM9.175 9H14.8L11.975 4.8ZM5.5 19H18.5H5.5ZM12 17Q12.825 17 13.413 16.413Q14 15.825 14 15Q14 14.175 13.413 13.587Q12.825 13 12 13Q11.175 13 10.588 13.587Q10 14.175 10 15Q10 15.825 10.588 16.413Q11.175 17 12 17ZM5.5 19H18.5L20.7 11H3.3Z"/>
    </Icon>
  );
});

IconMaterialShoppingBasketSharp.displayName = 'AmauiIconMaterialShoppingBasketSharp';

export default IconMaterialShoppingBasketSharp;
