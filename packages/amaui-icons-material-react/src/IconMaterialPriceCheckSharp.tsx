import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPriceCheckSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PriceCheckSharp'
      short_name='PriceCheck'

      {...props}
    >
      <path d="M6.5 14.975V13.975H4V11.975H9V9.975H4V3.975H6.5V2.975H8.5V3.975H11V5.975H6V7.975H11V13.975H8.5V14.975ZM13.95 20.975 9.7 16.725 11.1 15.325 13.95 18.175 19.6 12.525 21 13.925Z"/>
    </Icon>
  );
});

IconMaterialPriceCheckSharp.displayName = 'AmauiIconMaterialPriceCheckSharp';

export default IconMaterialPriceCheckSharp;
