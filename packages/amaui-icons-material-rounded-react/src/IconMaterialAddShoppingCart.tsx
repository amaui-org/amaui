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
      <path d="M12 9q-.425 0-.712-.288Q11 8.425 11 8V6H9q-.425 0-.712-.287Q8 5.425 8 5t.288-.713Q8.575 4 9 4h2V2q0-.425.288-.713Q11.575 1 12 1t.713.287Q13 1.575 13 2v2h2q.425 0 .713.287Q16 4.575 16 5t-.287.713Q15.425 6 15 6h-2v2q0 .425-.287.712Q12.425 9 12 9ZM7 22q-.825 0-1.412-.587Q5 20.825 5 20q0-.825.588-1.413Q6.175 18 7 18t1.412.587Q9 19.175 9 20q0 .825-.588 1.413Q7.825 22 7 22Zm10 0q-.825 0-1.412-.587Q15 20.825 15 20q0-.825.588-1.413Q16.175 18 17 18t1.413.587Q19 19.175 19 20q0 .825-.587 1.413Q17.825 22 17 22ZM7 17q-1.15 0-1.737-.988-.588-.987-.013-1.962L6.6 11.6 3 4H2q-.425 0-.712-.288Q1 3.425 1 3t.288-.713Q1.575 2 2 2h1.65q.275 0 .525.15t.375.425L8.525 11h7.025l3.6-6.5q.125-.225.35-.363Q19.725 4 20 4q.575 0 .863.487.287.488.012.988L17.3 11.95q-.275.5-.738.775Q16.1 13 15.55 13H8.1L7 15h11q.425 0 .712.287.288.288.288.713t-.288.712Q18.425 17 18 17Z"/>
    </Icon>
  );
});

IconMaterialAddShoppingCart.displayName = 'AmauiIconMaterialAddShoppingCart';

export default IconMaterialAddShoppingCart;
