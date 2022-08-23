import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialShoppingBagSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShoppingBagSharp'
      short_name='ShoppingBag'

      {...props}
    >
      <path d="M4 22V6H8Q8 4.35 9.175 3.175Q10.35 2 12 2Q13.65 2 14.825 3.175Q16 4.35 16 6H20V22ZM10 6H14Q14 5.175 13.413 4.588Q12.825 4 12 4Q11.175 4 10.588 4.588Q10 5.175 10 6ZM6 20H18V8H16V11H14V8H10V11H8V8H6ZM6 20V8Z"/>
    </Icon>
  );
});

IconMaterialShoppingBagSharp.displayName = 'AmauiIconMaterialShoppingBagSharp';

export default IconMaterialShoppingBagSharp;
