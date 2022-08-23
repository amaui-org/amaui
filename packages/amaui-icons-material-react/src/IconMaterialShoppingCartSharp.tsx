import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialShoppingCartSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShoppingCartSharp'
      short_name='ShoppingCart'

      {...props}
    >
      <path d="M7 22Q6.175 22 5.588 21.413Q5 20.825 5 20Q5 19.175 5.588 18.587Q6.175 18 7 18Q7.825 18 8.412 18.587Q9 19.175 9 20Q9 20.825 8.412 21.413Q7.825 22 7 22ZM17 22Q16.175 22 15.588 21.413Q15 20.825 15 20Q15 19.175 15.588 18.587Q16.175 18 17 18Q17.825 18 18.413 18.587Q19 19.175 19 20Q19 20.825 18.413 21.413Q17.825 22 17 22ZM6.15 6 8.55 11H15.55L18.3 6ZM3.625 17 6.6 11.6 3 4H1V2H4.25L5.2 4H21.7L16.725 13H8.1L7 15H19V17ZM8.55 11H15.55Z"/>
    </Icon>
  );
});

IconMaterialShoppingCartSharp.displayName = 'AmauiIconMaterialShoppingCartSharp';

export default IconMaterialShoppingCartSharp;
