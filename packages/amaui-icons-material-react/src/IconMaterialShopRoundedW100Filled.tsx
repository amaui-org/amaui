import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialShopRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShopRoundedW100Filled'
      short_name='Shop'

      {...props}
    >
      <path d="M10.15 15.425Q10.15 15.875 10.538 16.087Q10.925 16.3 11.3 16.05L14.325 14.125Q14.675 13.9 14.675 13.5Q14.675 13.1 14.325 12.875L11.3 10.95Q10.925 10.7 10.538 10.912Q10.15 11.125 10.15 11.575ZM4.8 19.7Q4.15 19.7 3.725 19.275Q3.3 18.85 3.3 18.2V8.8Q3.3 8.15 3.725 7.725Q4.15 7.3 4.8 7.3H9.3V6.1Q9.3 5.45 9.725 5.025Q10.15 4.6 10.8 4.6H13.2Q13.85 4.6 14.275 5.025Q14.7 5.45 14.7 6.1V7.3H19.2Q19.85 7.3 20.275 7.725Q20.7 8.15 20.7 8.8V18.2Q20.7 18.85 20.275 19.275Q19.85 19.7 19.2 19.7ZM10 7.3H14V6.1Q14 5.75 13.775 5.525Q13.55 5.3 13.2 5.3H10.8Q10.45 5.3 10.225 5.525Q10 5.75 10 6.1Z"/>
    </Icon>
  );
});

IconMaterialShopRoundedW100Filled.displayName = 'AmauiIconMaterialShopRoundedW100Filled';

export default IconMaterialShopRoundedW100Filled;
