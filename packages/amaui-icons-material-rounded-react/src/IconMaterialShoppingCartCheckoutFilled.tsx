import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShoppingCartCheckoutFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShoppingCartCheckoutFilled'

      short_name='ShoppingCartCheckout'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 22q-.825 0-1.412-.587Q5 20.825 5 20q0-.825.588-1.413Q6.175 18 7 18t1.412.587Q9 19.175 9 20q0 .825-.588 1.413Q7.825 22 7 22Zm10 0q-.825 0-1.412-.587Q15 20.825 15 20q0-.825.588-1.413Q16.175 18 17 18t1.413.587Q19 19.175 19 20q0 .825-.587 1.413Q17.825 22 17 22ZM11.3 9.3q-.275-.275-.275-.7 0-.425.275-.7l.875-.9H9q-.425 0-.712-.287Q8 6.425 8 6t.288-.713Q8.575 5 9 5h3.175l-.9-.9q-.3-.3-.287-.7.012-.4.312-.7.3-.275.7-.288.4-.012.7.288l2.6 2.6q.15.15.213.325.062.175.062.375t-.062.375q-.063.175-.213.325l-2.6 2.6q-.275.275-.687.287Q11.6 9.6 11.3 9.3ZM7 17q-1.15 0-1.737-.988-.588-.987-.013-1.962L6.6 11.6 3 4H2q-.425 0-.712-.288Q1 3.425 1 3t.288-.713Q1.575 2 2 2h1.625q.275 0 .525.15t.375.425L8.55 11h7l3.575-6.475q.125-.25.363-.388Q19.725 4 20 4q.575 0 .863.5.287.5.012 1L17.3 11.95q-.275.5-.725.775-.45.275-1.025.275H8.1L7 15h11q.425 0 .712.287.288.288.288.713t-.288.712Q18.425 17 18 17Z"/>
    </Icon>
  );
});

IconMaterialShoppingCartCheckoutFilled.displayName = 'AmauiIconMaterialShoppingCartCheckoutFilled';

export default IconMaterialShoppingCartCheckoutFilled;
