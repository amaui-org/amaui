import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCurrencyBitcoinSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CurrencyBitcoinSharp'
      short_name='CurrencyBitcoin'

      {...props}
    >
      <path d="M9 21V19H6V17H8V7H6V5H9V3H11V5H13V3H15V5.125Q16.3 5.475 17.15 6.537Q18 7.6 18 9Q18 9.725 17.75 10.387Q17.5 11.05 17.05 11.575Q17.925 12.1 18.462 13Q19 13.9 19 15Q19 16.65 17.825 17.825Q16.65 19 15 19V21H13V19H11V21ZM10 11H14Q14.825 11 15.413 10.412Q16 9.825 16 9Q16 8.175 15.413 7.587Q14.825 7 14 7H10ZM10 17H15Q15.825 17 16.413 16.413Q17 15.825 17 15Q17 14.175 16.413 13.587Q15.825 13 15 13H10Z"/>
    </Icon>
  );
});

IconMaterialCurrencyBitcoinSharp.displayName = 'AmauiIconMaterialCurrencyBitcoinSharp';

export default IconMaterialCurrencyBitcoinSharp;
