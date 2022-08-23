import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRemoveShoppingCartRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RemoveShoppingCartRoundedFilled'
      short_name='RemoveShoppingCart'

      {...props}
    >
      <path d="M15.825 13 6.825 4H19.95Q20.525 4 20.838 4.487Q21.15 4.975 20.85 5.55L17.3 11.95Q17.025 12.45 16.588 12.725Q16.15 13 15.825 13ZM7 22Q6.175 22 5.588 21.413Q5 20.825 5 20Q5 19.175 5.588 18.587Q6.175 18 7 18Q7.825 18 8.412 18.587Q9 19.175 9 20Q9 20.825 8.412 21.413Q7.825 22 7 22ZM19.8 22.6 14.15 17H7.6Q6.5 17 5.925 16.062Q5.35 15.125 5.85 14.1L6.9 11.95L5.1 7.9L1.375 4.175Q1.1 3.9 1.113 3.487Q1.125 3.075 1.4 2.8Q1.675 2.525 2.1 2.525Q2.525 2.525 2.8 2.8L21.225 21.225Q21.5 21.5 21.488 21.913Q21.475 22.325 21.2 22.6Q20.925 22.875 20.513 22.875Q20.1 22.875 19.8 22.6ZM12.15 15 10.15 13H8.6L7.6 15Q7.6 15 7.6 15Q7.6 15 7.6 15ZM17 22Q16.175 22 15.588 21.413Q15 20.825 15 20Q15 19.175 15.588 18.587Q16.175 18 17 18Q17.825 18 18.413 18.587Q19 19.175 19 20Q19 20.825 18.413 21.413Q17.825 22 17 22Z"/>
    </Icon>
  );
});

IconMaterialRemoveShoppingCartRoundedFilled.displayName = 'AmauiIconMaterialRemoveShoppingCartRoundedFilled';

export default IconMaterialRemoveShoppingCartRoundedFilled;
