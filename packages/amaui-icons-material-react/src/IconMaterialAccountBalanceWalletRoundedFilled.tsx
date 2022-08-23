import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAccountBalanceWalletRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccountBalanceWalletRoundedFilled'
      short_name='AccountBalanceWallet'

      {...props}
    >
      <path d="M16 13.5Q16.65 13.5 17.075 13.075Q17.5 12.65 17.5 12Q17.5 11.35 17.075 10.925Q16.65 10.5 16 10.5Q15.35 10.5 14.925 10.925Q14.5 11.35 14.5 12Q14.5 12.65 14.925 13.075Q15.35 13.5 16 13.5ZM13 17Q12.175 17 11.588 16.413Q11 15.825 11 15V9Q11 8.175 11.588 7.587Q12.175 7 13 7H20Q20.825 7 21.413 7.587Q22 8.175 22 9V15Q22 15.825 21.413 16.413Q20.825 17 20 17ZM5 21Q4.175 21 3.587 20.413Q3 19.825 3 19V5Q3 4.175 3.587 3.587Q4.175 3 5 3H19Q19.825 3 20.413 3.587Q21 4.175 21 5H13Q11.225 5 10.113 6.112Q9 7.225 9 9V15Q9 16.775 10.113 17.887Q11.225 19 13 19H21Q21 19.825 20.413 20.413Q19.825 21 19 21Z"/>
    </Icon>
  );
});

IconMaterialAccountBalanceWalletRoundedFilled.displayName = 'AmauiIconMaterialAccountBalanceWalletRoundedFilled';

export default IconMaterialAccountBalanceWalletRoundedFilled;
