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
      <path d="M5 21q-.425 0-.775-.262-.35-.263-.475-.688L.95 9.95q-.125-.35.112-.65Q1.3 9 1.7 9h5.05l4.4-6.55q.125-.2.35-.325.225-.125.475-.125.25 0 .475.125.225.125.35.325L17.2 9h5.1q.4 0 .638.3.237.3.112.65l-2.8 10.1q-.125.425-.475.688Q19.425 21 19 21ZM9.175 9H14.8l-2.825-4.2ZM12 17q.825 0 1.413-.587Q14 15.825 14 15q0-.825-.587-1.413Q12.825 13 12 13q-.825 0-1.412.587Q10 14.175 10 15q0 .825.588 1.413Q11.175 17 12 17Z"/>
    </Icon>
  );
});

IconMaterialShoppingBasketFilled.displayName = 'AmauiIconMaterialShoppingBasketFilled';

export default IconMaterialShoppingBasketFilled;
