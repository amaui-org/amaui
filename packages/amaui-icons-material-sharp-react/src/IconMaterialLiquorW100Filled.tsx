import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLiquorW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LiquorW100Filled'

      short_name='Liquor'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.4 20.7V20h1.55v-3.5q-.75-.15-1.15-.662-.4-.513-.4-1.188v-6.5h3.8v6.5q0 .65-.4 1.175t-1.15.675V20H8.2v.7Zm.7-8.35h2.4v-3.5H5.1Zm7.1 8.35V10l3-1.15V3.6h2.4v5.25l3 1.125V20.7Zm3.7-15.3h1V4.3h-1Zm-3 7.5h7v-2.45l-3-1.1V6.1h-1v3.25l-3 1.1Zm0 7.1h7v-2.85h-7Z"/>
    </Icon>
  );
});

IconMaterialLiquorW100Filled.displayName = 'AmauiIconMaterialLiquorW100Filled';

export default IconMaterialLiquorW100Filled;
