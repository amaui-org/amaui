import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAccountBalanceWalletSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccountBalanceWalletSharpW100'
      short_name='AccountBalanceWallet'

      {...props}
    >
      <path d="M16 13.5Q16.65 13.5 17.075 13.075Q17.5 12.65 17.5 12Q17.5 11.35 17.075 10.925Q16.65 10.5 16 10.5Q15.35 10.5 14.925 10.925Q14.5 11.35 14.5 12Q14.5 12.65 14.925 13.075Q15.35 13.5 16 13.5ZM5 16.4V19V5V7.6ZM4.3 19.7V4.3H19.7V8.875H19V5H5V19H19V15.125H19.7V19.7ZM12.3 8.3H20.7V15.7H12.3Z"/>
    </Icon>
  );
});

IconMaterialAccountBalanceWalletSharpW100.displayName = 'AmauiIconMaterialAccountBalanceWalletSharpW100';

export default IconMaterialAccountBalanceWalletSharpW100;
