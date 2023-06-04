import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRemoveShoppingCartW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RemoveShoppingCartW100'

      short_name='RemoveShoppingCart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m19.85 4.65-3.875 7.2H14.65l-.7-.7h1.6l3.125-5.8H8.15l-.7-.7ZM7.4 20.85q-.575 0-.962-.388-.388-.387-.388-.962t.388-.962q.387-.388.962-.388t.963.388q.387.387.387.962t-.387.962q-.388.388-.963.388Zm12.85.4-5.4-5.4H5.075L7.75 11.1 5.6 6.6 2.7 3.7l.5-.5 17.55 17.55Zm-6.1-6.1-3.3-3.3H8.1l-1.8 3.3Zm-.2-4h1.6-1.6Zm2.65 9.7q-.55 0-.95-.388-.4-.387-.4-.962t.4-.962q.4-.388.95-.388.55 0 .95.388.4.387.4.962t-.4.962q-.4.388-.95.388Z"/>
    </Icon>
  );
});

IconMaterialRemoveShoppingCartW100.displayName = 'AmauiIconMaterialRemoveShoppingCartW100';

export default IconMaterialRemoveShoppingCartW100;
