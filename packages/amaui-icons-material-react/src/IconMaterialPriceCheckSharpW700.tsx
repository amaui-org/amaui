import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPriceCheckSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PriceCheckSharpW700'
      short_name='PriceCheck'

      {...props}
    >
      <path d="M5.725 15.375V14H3.225V11.225H8.225V10H3.225V3.225H5.725V1.85H8.5V3.225H11V6H6V7.225H11V14H8.5V15.375ZM14.325 21.925 9.7 17.275 11.8 15.2 14.325 17.725 19.675 12.4 21.775 14.475Z"/>
    </Icon>
  )
});

export default IconMaterialPriceCheckSharpW700;
