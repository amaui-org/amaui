import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWalletW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WalletW100'

      short_name='Wallet'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 18.7q-1.125 0-1.912-.787Q3.3 17.125 3.3 16V8q0-1.125.788-1.912Q4.875 5.3 6 5.3h12q1.125 0 1.913.788.787.787.787 1.912v8q0 1.125-.787 1.913-.788.787-1.913.787ZM6 8.65h12q.6 0 1.113.225.512.225.887.65V8q0-.825-.587-1.412Q18.825 6 18 6H6q-.825 0-1.412.588Q4 7.175 4 8v1.525q.375-.425.888-.65Q5.4 8.65 6 8.65Zm-2 2.575L15.4 14q.175.05.363.012.187-.037.312-.162l3.8-3.225q-.2-.575-.712-.925-.513-.35-1.163-.35H6q-.8 0-1.375.537-.575.538-.625 1.338Z"/>
    </Icon>
  );
});

IconMaterialWalletW100.displayName = 'AmauiIconMaterialWalletW100';

export default IconMaterialWalletW100;
