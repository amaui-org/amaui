import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCurrencyBitcoinW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CurrencyBitcoinW100Filled'

      short_name='CurrencyBitcoin'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.05 19.7v-2h-3V17h2V7h-2v-.7h3v-2h.7v2H13v-2h.7v2q1.325 0 2.163.837.837.838.837 2.188 0 .825-.325 1.45t-.825 1q1.025.275 1.587 1.062.563.788.563 1.838 0 1.35-.837 2.187-.838.838-2.188.838H13.7v2H13v-2h-2.25v2Zm-.3-8.05h3.925q1.025 0 1.675-.65.65-.65.65-1.675t-.65-1.675Q14.7 7 13.675 7H9.75Zm0 5.35h4.925q1.025 0 1.675-.65.65-.65.65-1.675T16.35 13q-.65-.65-1.675-.65H9.75Z"/>
    </Icon>
  );
});

IconMaterialCurrencyBitcoinW100Filled.displayName = 'AmauiIconMaterialCurrencyBitcoinW100Filled';

export default IconMaterialCurrencyBitcoinW100Filled;
