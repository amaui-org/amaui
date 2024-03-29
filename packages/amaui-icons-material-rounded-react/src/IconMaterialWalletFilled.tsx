import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWalletFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WalletFilled'

      short_name='Wallet'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 20q-1.65 0-2.825-1.175Q2 17.65 2 16V8q0-1.65 1.175-2.825Q4.35 4 6 4h12q1.65 0 2.825 1.175Q22 6.35 22 8v8q0 1.65-1.175 2.825Q19.65 20 18 20ZM6 8h12q.55 0 1.05.125t.95.4V8q0-.825-.587-1.412Q18.825 6 18 6H6q-.825 0-1.412.588Q4 7.175 4 8v.525q.45-.275.95-.4Q5.45 8 6 8Zm-1.85 3.25 11.125 2.7q.225.05.45 0t.425-.2l3.475-2.9q-.275-.375-.7-.612Q18.5 10 18 10H6q-.65 0-1.137.337-.488.338-.713.913Z"/>
    </Icon>
  );
});

IconMaterialWalletFilled.displayName = 'AmauiIconMaterialWalletFilled';

export default IconMaterialWalletFilled;
