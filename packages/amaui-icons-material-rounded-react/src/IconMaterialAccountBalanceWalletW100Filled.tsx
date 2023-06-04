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
      <path d="M16 13.5q.65 0 1.075-.425.425-.425.425-1.075 0-.65-.425-1.075Q16.65 10.5 16 10.5q-.65 0-1.075.425Q14.5 11.35 14.5 12q0 .65.425 1.075.425.425 1.075.425Zm-2.2 2.2q-.65 0-1.075-.425-.425-.425-.425-1.075V9.8q0-.65.425-1.075Q13.15 8.3 13.8 8.3h5.4q.65 0 1.075.425.425.425.425 1.075v4.4q0 .65-.425 1.075-.425.425-1.075.425Zm-8 4q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3h12.4q.65 0 1.075.425.425.425.425 1.075v1.8h-5.9q-1.025 0-1.612.587-.588.588-.588 1.613v4.4q0 1.025.588 1.612.587.588 1.612.588h5.9v1.8q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialAccountBalanceWalletW100Filled.displayName = 'AmauiIconMaterialAccountBalanceWalletW100Filled';

export default IconMaterialAccountBalanceWalletW100Filled;
