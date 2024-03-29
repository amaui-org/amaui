import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAccountBalanceWalletFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccountBalanceWalletFilled'

      short_name='AccountBalanceWallet'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21V3h18v2H9v14h12v2Zm8-4V7h11v10Zm5-3.5q.65 0 1.075-.425.425-.425.425-1.075 0-.65-.425-1.075Q16.65 10.5 16 10.5q-.65 0-1.075.425Q14.5 11.35 14.5 12q0 .65.425 1.075.425.425 1.075.425Z"/>
    </Icon>
  );
});

IconMaterialAccountBalanceWalletFilled.displayName = 'AmauiIconMaterialAccountBalanceWalletFilled';

export default IconMaterialAccountBalanceWalletFilled;
