import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShoppingBasketFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShoppingBasketFilled'

      short_name='ShoppingBasket'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.025 21 .675 9H6.75l4.4-6.55q.125-.2.35-.325.225-.125.475-.125.25 0 .475.125.225.125.35.325L17.2 9h6.125l-3.35 12Zm5.15-12H14.8l-2.825-4.2ZM12 17q.825 0 1.413-.587Q14 15.825 14 15q0-.825-.587-1.413Q12.825 13 12 13q-.825 0-1.412.587Q10 14.175 10 15q0 .825.588 1.413Q11.175 17 12 17Z"/>
    </Icon>
  );
});

IconMaterialShoppingBasketFilled.displayName = 'AmauiIconMaterialShoppingBasketFilled';

export default IconMaterialShoppingBasketFilled;
