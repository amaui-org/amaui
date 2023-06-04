import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShoppingBasketW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShoppingBasketW100'

      short_name='ShoppingBasket'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m5.075 19.7-2.7-9.4H8.05l3.7-5.6q.05-.075.125-.113.075-.037.15-.037t.15.037q.075.038.125.113l3.65 5.6h5.675l-2.75 9.4ZM8.9 10.3h6.2L12 5.55ZM5.5 19h13-13Zm6.5-3.3q.275 0 .488-.212.212-.213.212-.488t-.212-.488Q12.275 14.3 12 14.3t-.487.212q-.213.213-.213.488t.213.488q.212.212.487.212ZM5.5 19h13l2.2-8H3.3Z"/>
    </Icon>
  );
});

IconMaterialShoppingBasketW100.displayName = 'AmauiIconMaterialShoppingBasketW100';

export default IconMaterialShoppingBasketW100;
