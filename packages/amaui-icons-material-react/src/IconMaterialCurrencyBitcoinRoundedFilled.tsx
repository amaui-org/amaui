import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCurrencyBitcoinRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CurrencyBitcoinRoundedFilled'
      short_name='CurrencyBitcoin'

      {...props}
    >
      <path d="M10 21Q9.575 21 9.288 20.712Q9 20.425 9 20V19H7Q6.575 19 6.287 18.712Q6 18.425 6 18Q6 17.575 6.287 17.288Q6.575 17 7 17H8V7H7Q6.575 7 6.287 6.713Q6 6.425 6 6Q6 5.575 6.287 5.287Q6.575 5 7 5H9V4Q9 3.575 9.288 3.287Q9.575 3 10 3Q10.425 3 10.713 3.287Q11 3.575 11 4V5H13V4Q13 3.575 13.288 3.287Q13.575 3 14 3Q14.425 3 14.713 3.287Q15 3.575 15 4V5.125Q16.3 5.475 17.15 6.537Q18 7.6 18 9Q18 9.725 17.75 10.387Q17.5 11.05 17.05 11.575Q17.925 12.1 18.462 13Q19 13.9 19 15Q19 16.65 17.825 17.825Q16.65 19 15 19V20Q15 20.425 14.713 20.712Q14.425 21 14 21Q13.575 21 13.288 20.712Q13 20.425 13 20V19H11V20Q11 20.425 10.713 20.712Q10.425 21 10 21ZM10 11H14Q14.825 11 15.413 10.412Q16 9.825 16 9Q16 8.175 15.413 7.587Q14.825 7 14 7H10ZM10 17H15Q15.825 17 16.413 16.413Q17 15.825 17 15Q17 14.175 16.413 13.587Q15.825 13 15 13H10Z"/>
    </Icon>
  );
});

IconMaterialCurrencyBitcoinRoundedFilled.displayName = 'AmauiIconMaterialCurrencyBitcoinRoundedFilled';

export default IconMaterialCurrencyBitcoinRoundedFilled;
