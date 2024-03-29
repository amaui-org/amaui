import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCurrencyBitcoin = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CurrencyBitcoin'

      short_name='CurrencyBitcoin'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 21v-2H6v-2h2V7H6V5h3V3h2v2h2V3h2v2.125q1.3.35 2.15 1.412Q18 7.6 18 9q0 .725-.25 1.387-.25.663-.7 1.188.875.525 1.412 1.425.538.9.538 2 0 1.65-1.175 2.825Q16.65 19 15 19v2h-2v-2h-2v2Zm1-10h4q.825 0 1.413-.588Q16 9.825 16 9t-.587-1.413Q14.825 7 14 7h-4Zm0 6h5q.825 0 1.413-.587Q17 15.825 17 15q0-.825-.587-1.413Q15.825 13 15 13h-5Z"/>
    </Icon>
  );
});

IconMaterialCurrencyBitcoin.displayName = 'AmauiIconMaterialCurrencyBitcoin';

export default IconMaterialCurrencyBitcoin;
