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
      <path d="M16 13.5q.65 0 1.075-.425.425-.425.425-1.075 0-.65-.425-1.075Q16.65 10.5 16 10.5q-.65 0-1.075.425Q14.5 11.35 14.5 12q0 .65.425 1.075.425.425 1.075.425ZM5 16.4V19 5v11.4Zm.8 3.3q-.65 0-1.075-.425Q4.3 18.85 4.3 18.2V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3h12.4q.65 0 1.075.425.425.425.425 1.075v3.075H19V5.8q0-.35-.225-.575Q18.55 5 18.2 5H5.8q-.35 0-.575.225Q5 5.45 5 5.8v12.4q0 .35.225.575Q5.45 19 5.8 19h12.4q.35 0 .575-.225Q19 18.55 19 18.2v-3.075h.7V18.2q0 .65-.425 1.075-.425.425-1.075.425Zm8-4q-.65 0-1.075-.425-.425-.425-.425-1.075V9.8q0-.65.425-1.075Q13.15 8.3 13.8 8.3h5.4q.65 0 1.075.425.425.425.425 1.075v4.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialAccountBalanceWalletW100.displayName = 'AmauiIconMaterialAccountBalanceWalletW100';

export default IconMaterialAccountBalanceWalletW100;
