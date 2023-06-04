import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShoppingBasketW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShoppingBasketW100Filled'

      short_name='ShoppingBasket'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m5.075 19.7-2.7-9.4H8.05l3.7-5.6q.05-.075.125-.113.075-.037.15-.037t.15.037q.075.038.125.113l3.65 5.6h5.675l-2.75 9.4ZM8.9 10.3h6.2L12 5.55Zm3.1 5.4q.275 0 .488-.212.212-.213.212-.488t-.212-.488Q12.275 14.3 12 14.3t-.487.212q-.213.213-.213.488t.213.488q.212.212.487.212Z"/>
    </Icon>
  );
});

IconMaterialShoppingBasketW100Filled.displayName = 'AmauiIconMaterialShoppingBasketW100Filled';

export default IconMaterialShoppingBasketW100Filled;
