import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShoppingCartCheckoutW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShoppingCartCheckoutW100Filled'

      short_name='ShoppingCartCheckout'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.4 20.85q-.575 0-.962-.388-.388-.387-.388-.962t.388-.962q.387-.388.962-.388t.963.388q.387.387.387.962t-.387.962q-.388.388-.963.388Zm9.2 0q-.575 0-.962-.388-.388-.387-.388-.962t.388-.962q.387-.388.962-.388t.962.388q.388.387.388.962t-.388.962q-.387.388-.962.388Zm-11.525-5L7.75 11.1l-3.7-7.75H2.3v-.7h2.2l4.05 8.5h7l3.6-6.5h.8l-4 7.2H8.1l-1.8 3.3h11.65v.7ZM12 9.075l-.475-.475 2.25-2.25H8.65v-.7h5.125l-2.25-2.25.475-.475L15.075 6Z"/>
    </Icon>
  );
});

IconMaterialShoppingCartCheckoutW100Filled.displayName = 'AmauiIconMaterialShoppingCartCheckoutW100Filled';

export default IconMaterialShoppingCartCheckoutW100Filled;
