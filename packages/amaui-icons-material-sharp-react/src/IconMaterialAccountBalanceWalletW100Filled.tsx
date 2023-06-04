import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAccountBalanceWalletW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccountBalanceWalletW100Filled'

      short_name='AccountBalanceWallet'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 19.7V4.3h15.4v3.3h-8.1v8.8h8.1v3.3Zm8-4V8.3h8.4v7.4Zm3.7-2.2q.65 0 1.075-.425.425-.425.425-1.075 0-.65-.425-1.075Q16.65 10.5 16 10.5q-.65 0-1.075.425Q14.5 11.35 14.5 12q0 .65.425 1.075.425.425 1.075.425Z"/>
    </Icon>
  );
});

IconMaterialAccountBalanceWalletW100Filled.displayName = 'AmauiIconMaterialAccountBalanceWalletW100Filled';

export default IconMaterialAccountBalanceWalletW100Filled;
