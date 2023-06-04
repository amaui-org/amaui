import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddShoppingCartW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddShoppingCartW100'

      short_name='AddShoppingCart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 8.35v-3h-3v-.7h3v-3h.7v3h3v.7h-3v3ZM7.4 20.85q-.575 0-.962-.388-.388-.387-.388-.962t.388-.962q.387-.388.962-.388t.963.388q.387.387.387.962t-.387.962q-.388.388-.963.388Zm9.2 0q-.575 0-.962-.388-.388-.387-.388-.962t.388-.962q.387-.388.962-.388t.962.388q.388.387.388.962t-.388.962q-.387.388-.962.388Zm1.35-5H5.075L7.75 11.1l-3.7-7.75H2.3v-.7h2.2l4.05 8.5h7l3.6-6.5h.8l-4 7.2H8.1l-1.8 3.3h11.65Z"/>
    </Icon>
  );
});

IconMaterialAddShoppingCartW100.displayName = 'AmauiIconMaterialAddShoppingCartW100';

export default IconMaterialAddShoppingCartW100;
