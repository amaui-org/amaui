import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialManageAccountsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ManageAccountsW100Filled'

      short_name='ManageAccounts'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 11.2q-1.125 0-1.912-.788Q7.3 9.625 7.3 8.5t.788-1.912Q8.875 5.8 10 5.8t1.913.788q.787.787.787 1.912t-.787 1.912q-.788.788-1.913.788Zm-6.7 7v-1.3q0-.575.35-1.05.35-.475.9-.75 1.275-.625 2.65-.963Q8.575 13.8 10 13.8h.4q-.425 1.075-.387 2.212.037 1.138.537 2.188Zm12.975.325-.1-1.05q-.45-.075-.85-.3-.4-.225-.7-.575l-.975.425-.25-.425.85-.6q-.2-.45-.2-.95 0-.5.2-.95l-.825-.65.25-.425.95.45q.275-.35.687-.563.413-.212.863-.287l.1-1.05h.5l.075 1.05q.45.075.862.287.413.213.688.563l.95-.45.25.425-.825.65q.2.45.2.95 0 .5-.2.95l.85.6-.25.425-.975-.425q-.3.35-.7.575-.4.225-.85.3l-.075 1.05ZM16.5 16.8q.725 0 1.238-.512.512-.513.512-1.238t-.512-1.238q-.513-.512-1.238-.512t-1.238.512q-.512.513-.512 1.238t.512 1.238q.513.512 1.238.512Z"/>
    </Icon>
  );
});

IconMaterialManageAccountsW100Filled.displayName = 'AmauiIconMaterialManageAccountsW100Filled';

export default IconMaterialManageAccountsW100Filled;
