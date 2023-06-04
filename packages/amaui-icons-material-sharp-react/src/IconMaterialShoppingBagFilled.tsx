import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShoppingBagFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShoppingBagFilled'

      short_name='ShoppingBag'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 22V6h4q0-1.65 1.175-2.825Q10.35 2 12 2q1.65 0 2.825 1.175Q16 4.35 16 6h4v16Zm8-18q-.825 0-1.412.588Q10 5.175 10 6h4q0-.825-.587-1.412Q12.825 4 12 4Zm-4 7h2V8H8Zm6 0h2V8h-2Z"/>
    </Icon>
  );
});

IconMaterialShoppingBagFilled.displayName = 'AmauiIconMaterialShoppingBagFilled';

export default IconMaterialShoppingBagFilled;
