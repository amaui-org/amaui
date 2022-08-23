import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRemoveShoppingCartSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RemoveShoppingCartSharp'
      short_name='RemoveShoppingCart'

      {...props}
    >
      <path d="M21.7 4 16.725 13H15.825L13.825 11H15.55L18.3 6H8.825L6.825 4ZM7 22Q6.175 22 5.588 21.413Q5 20.825 5 20Q5 19.175 5.588 18.587Q6.175 18 7 18Q7.825 18 8.412 18.587Q9 19.175 9 20Q9 20.825 8.412 21.413Q7.825 22 7 22ZM20.5 23.3 14.15 17H4.425L6.9 11.95L5.1 7.9L0.7 3.5L2.1 2.1L21.9 21.9ZM12.15 15 10.15 13H8.6L7.6 15ZM13.825 11H15.55H13.825ZM17 22Q16.175 22 15.588 21.413Q15 20.825 15 20Q15 19.175 15.588 18.587Q16.175 18 17 18Q17.825 18 18.413 18.587Q19 19.175 19 20Q19 20.825 18.413 21.413Q17.825 22 17 22Z"/>
    </Icon>
  );
});

IconMaterialRemoveShoppingCartSharp.displayName = 'AmauiIconMaterialRemoveShoppingCartSharp';

export default IconMaterialRemoveShoppingCartSharp;
