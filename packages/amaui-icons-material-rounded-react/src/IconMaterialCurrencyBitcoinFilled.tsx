import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCurrencyBitcoinFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CurrencyBitcoinFilled'

      short_name='CurrencyBitcoin'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 21q-.425 0-.712-.288Q9 20.425 9 20v-1H7q-.425 0-.713-.288Q6 18.425 6 18t.287-.712Q6.575 17 7 17h1V7H7q-.425 0-.713-.287Q6 6.425 6 6t.287-.713Q6.575 5 7 5h2V4q0-.425.288-.713Q9.575 3 10 3t.713.287Q11 3.575 11 4v1h2V4q0-.425.288-.713Q13.575 3 14 3t.713.287Q15 3.575 15 4v1.125q1.3.35 2.15 1.412Q18 7.6 18 9q0 .725-.25 1.387-.25.663-.7 1.188.875.525 1.412 1.425.538.9.538 2 0 1.65-1.175 2.825Q16.65 19 15 19v1q0 .425-.287.712Q14.425 21 14 21t-.712-.288Q13 20.425 13 20v-1h-2v1q0 .425-.287.712Q10.425 21 10 21Zm0-10h4q.825 0 1.413-.588Q16 9.825 16 9t-.587-1.413Q14.825 7 14 7h-4Zm0 6h5q.825 0 1.413-.587Q17 15.825 17 15q0-.825-.587-1.413Q15.825 13 15 13h-5Z"/>
    </Icon>
  );
});

IconMaterialCurrencyBitcoinFilled.displayName = 'AmauiIconMaterialCurrencyBitcoinFilled';

export default IconMaterialCurrencyBitcoinFilled;
