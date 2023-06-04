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
      <path d="M3.3 18.7V5.3h17.4v13.4ZM4 8.65h16V6H4Zm11.775 5.45L20 10.525V9.35H4v1.875Z"/>
    </Icon>
  );
});

IconMaterialWalletW100.displayName = 'AmauiIconMaterialWalletW100';

export default IconMaterialWalletW100;
