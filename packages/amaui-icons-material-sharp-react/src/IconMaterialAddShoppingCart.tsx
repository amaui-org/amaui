import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddShoppingCart = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddShoppingCart'

      short_name='AddShoppingCart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 9V6H8V4h3V1h2v3h3v2h-3v3ZM7 22q-.825 0-1.412-.587Q5 20.825 5 20q0-.825.588-1.413Q6.175 18 7 18t1.412.587Q9 19.175 9 20q0 .825-.588 1.413Q7.825 22 7 22Zm10 0q-.825 0-1.412-.587Q15 20.825 15 20q0-.825.588-1.413Q16.175 18 17 18t1.413.587Q19 19.175 19 20q0 .825-.587 1.413Q17.825 22 17 22Zm2-5H3.625L6.6 11.6 3 4H1V2h3.275l4.25 9h7.025l3.875-7H21.7l-4.975 9H8.1L7 15h12Z"/>
    </Icon>
  );
});

IconMaterialAddShoppingCart.displayName = 'AmauiIconMaterialAddShoppingCart';

export default IconMaterialAddShoppingCart;
