import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRemoveShoppingCart = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RemoveShoppingCart'

      short_name='RemoveShoppingCart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m15.825 13-2-2h1.725l2.75-5H8.825l-2-2H19.95q.575 0 .888.487.312.488.012 1.063l-3.55 6.4q-.275.5-.712.775-.438.275-.763.275ZM7 22q-.825 0-1.412-.587Q5 20.825 5 20q0-.825.588-1.413Q6.175 18 7 18t1.412.587Q9 19.175 9 20q0 .825-.588 1.413Q7.825 22 7 22Zm12.8.6L14.15 17H7.6q-1.1 0-1.675-.938-.575-.937-.075-1.962l1.05-2.15L5.1 7.9 1.375 4.175Q1.1 3.9 1.113 3.487q.012-.412.287-.687.275-.275.7-.275.425 0 .7.275l18.425 18.425q.275.275.263.688-.013.412-.288.687-.275.275-.687.275-.413 0-.713-.275ZM12.15 15l-2-2H8.6l-1 2Zm3.4-4h-1.725 1.725ZM17 22q-.825 0-1.412-.587Q15 20.825 15 20q0-.825.588-1.413Q16.175 18 17 18t1.413.587Q19 19.175 19 20q0 .825-.587 1.413Q17.825 22 17 22Z"/>
    </Icon>
  );
});

IconMaterialRemoveShoppingCart.displayName = 'AmauiIconMaterialRemoveShoppingCart';

export default IconMaterialRemoveShoppingCart;
