import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialShoppingCartSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShoppingCartSharpW100Filled'
      short_name='ShoppingCart'

      {...props}
    >
      <path d="M7.4 20.85Q6.825 20.85 6.438 20.462Q6.05 20.075 6.05 19.5Q6.05 18.925 6.438 18.538Q6.825 18.15 7.4 18.15Q7.975 18.15 8.363 18.538Q8.75 18.925 8.75 19.5Q8.75 20.075 8.363 20.462Q7.975 20.85 7.4 20.85ZM16.6 20.85Q16.025 20.85 15.638 20.462Q15.25 20.075 15.25 19.5Q15.25 18.925 15.638 18.538Q16.025 18.15 16.6 18.15Q17.175 18.15 17.562 18.538Q17.95 18.925 17.95 19.5Q17.95 20.075 17.562 20.462Q17.175 20.85 16.6 20.85ZM5.075 15.85 7.75 11.1 4.05 3.35H2.3V2.65H4.5L5.45 4.65H19.9L15.975 11.85H8.1L6.3 15.15H17.95V15.85Z"/>
    </Icon>
  );
});

IconMaterialShoppingCartSharpW100Filled.displayName = 'AmauiIconMaterialShoppingCartSharpW100Filled';

export default IconMaterialShoppingCartSharpW100Filled;
