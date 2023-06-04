import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShoppingCartW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShoppingCartW100Filled'

      short_name='ShoppingCart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.4 20.85q-.575 0-.962-.388-.388-.387-.388-.962t.388-.962q.387-.388.962-.388t.963.388q.387.387.387.962t-.387.962q-.388.388-.963.388Zm9.2 0q-.575 0-.962-.388-.388-.387-.388-.962t.388-.962q.387-.388.962-.388t.962.388q.388.387.388.962t-.388.962q-.387.388-.962.388Zm-11.525-5L7.75 11.1l-3.7-7.75H2.3v-.7h2.2l.95 2H19.9l-3.925 7.2H8.1l-1.8 3.3h11.65v.7Z"/>
    </Icon>
  );
});

IconMaterialShoppingCartW100Filled.displayName = 'AmauiIconMaterialShoppingCartW100Filled';

export default IconMaterialShoppingCartW100Filled;
