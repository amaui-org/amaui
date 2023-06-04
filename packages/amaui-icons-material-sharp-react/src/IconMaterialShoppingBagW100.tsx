import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShoppingBagW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShoppingBagW100'

      short_name='ShoppingBag'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.3 20.7V7.3h3.35v-.65q0-1.4.975-2.375Q10.6 3.3 12 3.3t2.375.975q.975.975.975 2.375v.65h3.35v13.4ZM9.35 6.65v.65h5.3v-.65q0-1.125-.763-1.888Q13.125 4 12 4t-1.887.762q-.763.763-.763 1.888ZM6 20h12V8h-2.65v3h-.7V8h-5.3v3h-.7V8H6Zm0 0V8Z"/>
    </Icon>
  );
});

IconMaterialShoppingBagW100.displayName = 'AmauiIconMaterialShoppingBagW100';

export default IconMaterialShoppingBagW100;
