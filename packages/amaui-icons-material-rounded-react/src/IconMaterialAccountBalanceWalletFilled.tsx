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
      <path d="M16 13.5q.65 0 1.075-.425.425-.425.425-1.075 0-.65-.425-1.075Q16.65 10.5 16 10.5q-.65 0-1.075.425Q14.5 11.35 14.5 12q0 .65.425 1.075.425.425 1.075.425ZM13 17q-.825 0-1.412-.587Q11 15.825 11 15V9q0-.825.588-1.413Q12.175 7 13 7h7q.825 0 1.413.587Q22 8.175 22 9v6q0 .825-.587 1.413Q20.825 17 20 17Zm-8 4q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5h-8q-1.775 0-2.887 1.112Q9 7.225 9 9v6q0 1.775 1.113 2.887Q11.225 19 13 19h8q0 .825-.587 1.413Q19.825 21 19 21Z"/>
    </Icon>
  );
});

IconMaterialAccountBalanceWalletFilled.displayName = 'AmauiIconMaterialAccountBalanceWalletFilled';

export default IconMaterialAccountBalanceWalletFilled;
