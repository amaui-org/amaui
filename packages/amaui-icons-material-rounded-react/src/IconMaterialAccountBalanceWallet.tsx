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
      <path d="M16 13.5q.65 0 1.075-.425.425-.425.425-1.075 0-.65-.425-1.075Q16.65 10.5 16 10.5q-.65 0-1.075.425Q14.5 11.35 14.5 12q0 .65.425 1.075.425.425 1.075.425ZM5 19V5v14Zm0 2q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v2.5h-2V5H5v14h14v-2.5h2V19q0 .825-.587 1.413Q19.825 21 19 21Zm8-4q-.825 0-1.412-.587Q11 15.825 11 15V9q0-.825.588-1.413Q12.175 7 13 7h7q.825 0 1.413.587Q22 8.175 22 9v6q0 .825-.587 1.413Q20.825 17 20 17Z"/>
    </Icon>
  );
});

IconMaterialAccountBalanceWallet.displayName = 'AmauiIconMaterialAccountBalanceWallet';

export default IconMaterialAccountBalanceWallet;
