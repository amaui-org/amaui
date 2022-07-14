import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSellSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SellSharpW100'
      short_name='Sell'

      {...props}
    >
      <path d="M12.85 21 3.3 11.45V3.3H11.45L21 12.85ZM12.85 20 20 12.85 11.15 4H4V11.15ZM6.5 7.35Q6.85 7.35 7.1 7.1Q7.35 6.85 7.35 6.5Q7.35 6.15 7.1 5.9Q6.85 5.65 6.5 5.65Q6.15 5.65 5.9 5.9Q5.65 6.15 5.65 6.5Q5.65 6.85 5.9 7.1Q6.15 7.35 6.5 7.35ZM4 4Z"/>
    </Icon>
  );
});

export default IconMaterialSellSharpW100;
