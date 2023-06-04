import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAccountBalanceWalletW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccountBalanceWalletW100'

      short_name='AccountBalanceWallet'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16 13.5q.65 0 1.075-.425.425-.425.425-1.075 0-.65-.425-1.075Q16.65 10.5 16 10.5q-.65 0-1.075.425Q14.5 11.35 14.5 12q0 .65.425 1.075.425.425 1.075.425ZM5 16.4V19 5v2.6Zm-.7 3.3V4.3h15.4v4.575H19V5H5v14h14v-3.875h.7V19.7Zm8-11.4h8.4v7.4h-8.4Z"/>
    </Icon>
  );
});

IconMaterialAccountBalanceWalletW100.displayName = 'AmauiIconMaterialAccountBalanceWalletW100';

export default IconMaterialAccountBalanceWalletW100;
