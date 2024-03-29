import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShoppingBag = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShoppingBag'

      short_name='ShoppingBag'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 22V6h4q0-1.65 1.175-2.825Q10.35 2 12 2q1.65 0 2.825 1.175Q16 4.35 16 6h4v16Zm6-16h4q0-.825-.587-1.412Q12.825 4 12 4q-.825 0-1.412.588Q10 5.175 10 6ZM6 20h12V8h-2v3h-2V8h-4v3H8V8H6Zm0 0V8Z"/>
    </Icon>
  );
});

IconMaterialShoppingBag.displayName = 'AmauiIconMaterialShoppingBag';

export default IconMaterialShoppingBag;
