import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialShoppingBagSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShoppingBagSharpW100'
      short_name='ShoppingBag'

      {...props}
    >
      <path d="M5.3 20.7V7.3H8.65V6.65Q8.65 5.25 9.625 4.275Q10.6 3.3 12 3.3Q13.4 3.3 14.375 4.275Q15.35 5.25 15.35 6.65V7.3H18.7V20.7ZM9.35 6.65V7.3H14.65V6.65Q14.65 5.525 13.887 4.762Q13.125 4 12 4Q10.875 4 10.113 4.762Q9.35 5.525 9.35 6.65ZM6 20H18V8H15.35V11H14.65V8H9.35V11H8.65V8H6ZM6 20V8Z"/>
    </Icon>
  );
});

IconMaterialShoppingBagSharpW100.displayName = 'AmauiIconMaterialShoppingBagSharpW100';

export default IconMaterialShoppingBagSharpW100;
