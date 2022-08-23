import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialShopRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShopRoundedFilled'
      short_name='Shop'

      {...props}
    >
      <path d="M9.5 16.175Q9.5 16.775 10.025 17.05Q10.55 17.325 11.05 17L15.2 14.35Q15.65 14.05 15.65 13.5Q15.65 12.95 15.2 12.65L11.05 10Q10.55 9.675 10.025 9.95Q9.5 10.225 9.5 10.825ZM4 21Q3.175 21 2.588 20.413Q2 19.825 2 19V8Q2 7.175 2.588 6.588Q3.175 6 4 6H8V4Q8 3.175 8.588 2.587Q9.175 2 10 2H14Q14.825 2 15.413 2.587Q16 3.175 16 4V6H20Q20.825 6 21.413 6.588Q22 7.175 22 8V19Q22 19.825 21.413 20.413Q20.825 21 20 21ZM10 6H14V4Q14 4 14 4Q14 4 14 4H10Q10 4 10 4Q10 4 10 4Z"/>
    </Icon>
  );
});

IconMaterialShopRoundedFilled.displayName = 'AmauiIconMaterialShopRoundedFilled';

export default IconMaterialShopRoundedFilled;
