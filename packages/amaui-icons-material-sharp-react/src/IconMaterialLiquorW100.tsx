import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLiquorW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LiquorW100'

      short_name='Liquor'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.4 20.7V20h1.55v-3.5q-.75-.15-1.15-.662-.4-.513-.4-1.188v-6.5h3.8v6.5q0 .65-.4 1.175t-1.15.675V20H8.2v.7Zm.7-8.35h2.4v-3.5H5.1Zm1.2 3.5q.5 0 .85-.35t.35-.85v-1.6H5.1v1.6q0 .5.35.85t.85.35Zm5.9 4.85V10l3-1.15V3.6h2.4v5.25l3 1.125V20.7Zm3.7-15.3h1V4.3h-1Zm-3 7.5h7v-2.45l-3-1.1V6.1h-1v3.25l-3 1.1Zm0 7.1h7v-2.85h-7Zm0-3.55h7V13.6h-7Zm-6.6-.6Zm6.6.6V13.6v2.85Z"/>
    </Icon>
  );
});

IconMaterialLiquorW100.displayName = 'AmauiIconMaterialLiquorW100';

export default IconMaterialLiquorW100;
