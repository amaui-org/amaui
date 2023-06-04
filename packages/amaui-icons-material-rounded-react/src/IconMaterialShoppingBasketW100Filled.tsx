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
      <path d="M5.65 19.7q-.275 0-.488-.162-.212-.163-.262-.438l-2.35-8.2q-.075-.225.1-.413.175-.187.45-.187h4.95l3.7-5.6q.05-.075.125-.113.075-.037.15-.037t.15.037q.075.038.125.113l3.65 5.6h4.95q.275 0 .45.187.175.188.1.413l-2.4 8.2q-.1.275-.35.438-.25.162-.55.162Zm3.25-9.4h6.2L12 5.55Zm3.1 5.4q.275 0 .488-.212.212-.213.212-.488t-.212-.488Q12.275 14.3 12 14.3t-.487.212q-.213.213-.213.488t.213.488q.212.212.487.212Z"/>
    </Icon>
  );
});

IconMaterialShoppingBasketW100Filled.displayName = 'AmauiIconMaterialShoppingBasketW100Filled';

export default IconMaterialShoppingBasketW100Filled;
