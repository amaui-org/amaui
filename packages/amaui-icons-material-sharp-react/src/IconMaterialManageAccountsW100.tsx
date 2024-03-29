import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialManageAccountsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ManageAccountsW100'

      short_name='ManageAccounts'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 11.2q-1.125 0-1.912-.788Q7.3 9.625 7.3 8.5t.788-1.912Q8.875 5.8 10 5.8t1.913.788q.787.787.787 1.912t-.787 1.912q-.788.788-1.913.788Zm-6.7 7v-1.3q0-.65.325-1.088.325-.437.925-.712 1.2-.575 2.4-.938Q8.15 13.8 10 13.8h.4q-.075.2-.112.375-.038.175-.088.325H10q-1.65 0-2.85.312-1.2.313-2.25.888-.525.275-.712.55Q4 16.525 4 16.9v.6h6.3q.05.15.113.35.062.2.137.35Zm12.975.325-.1-1.05q-.45-.075-.85-.3-.4-.225-.7-.575l-.975.425-.25-.425.85-.6q-.2-.45-.2-.95 0-.5.2-.95l-.825-.65.25-.425.95.45q.275-.35.687-.563.413-.212.863-.287l.1-1.05h.5l.075 1.05q.45.075.862.287.413.213.688.563l.95-.45.25.425-.825.65q.2.45.2.95 0 .5-.2.95l.85.6-.25.425-.975-.425q-.3.35-.7.575-.4.225-.85.3l-.075 1.05ZM16.5 16.8q.725 0 1.238-.512.512-.513.512-1.238t-.512-1.238q-.513-.512-1.238-.512t-1.238.512q-.512.513-.512 1.238t.512 1.238q.513.512 1.238.512ZM10 10.5q.825 0 1.413-.588Q12 9.325 12 8.5t-.587-1.412Q10.825 6.5 10 6.5q-.825 0-1.412.588Q8 7.675 8 8.5t.588 1.412q.587.588 1.412.588Zm0-2Zm.3 9Z"/>
    </Icon>
  );
});

IconMaterialManageAccountsW100.displayName = 'AmauiIconMaterialManageAccountsW100';

export default IconMaterialManageAccountsW100;
