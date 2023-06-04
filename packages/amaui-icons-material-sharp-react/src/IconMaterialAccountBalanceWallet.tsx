import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAccountBalanceWallet = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AccountBalanceWallet'

      short_name='AccountBalanceWallet'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16 13.5q.65 0 1.075-.425.425-.425.425-1.075 0-.65-.425-1.075Q16.65 10.5 16 10.5q-.65 0-1.075.425Q14.5 11.35 14.5 12q0 .65.425 1.075.425.425 1.075.425ZM5 19V5Zm-2 2V3h18v4.5h-2V5H5v14h14v-2.5h2V21Zm8-14h11v10H11Z"/>
    </Icon>
  );
});

IconMaterialAccountBalanceWallet.displayName = 'AmauiIconMaterialAccountBalanceWallet';

export default IconMaterialAccountBalanceWallet;
