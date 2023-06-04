import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShoppingBagW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShoppingBagW100Filled'

      short_name='ShoppingBag'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.3 20.7V7.3h3.35v-.65q0-1.4.975-2.375Q10.6 3.3 12 3.3t2.375.975q.975.975.975 2.375v.65h3.35v13.4ZM12 4q-1.125 0-1.887.762-.763.763-.763 1.888v.65h5.3v-.65q0-1.125-.763-1.888Q13.125 4 12 4Zm-3.35 7h.7V8h-.7Zm6 0h.7V8h-.7Z"/>
    </Icon>
  );
});

IconMaterialShoppingBagW100Filled.displayName = 'AmauiIconMaterialShoppingBagW100Filled';

export default IconMaterialShoppingBagW100Filled;
