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
      <path d="M4.75 20.7q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h1.2v-3.5q-.75-.15-1.15-.662-.4-.513-.4-1.188V8.9q0-.325.213-.538.212-.212.537-.212h2.3q.325 0 .538.212.212.213.212.538v5.75q0 .65-.4 1.175t-1.15.675V20h1.2q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm.35-8.35h2.4v-3.5H5.1Zm7.8 8.35q-.3 0-.5-.2t-.2-.5v-9.55q0-.225.15-.4.15-.175.35-.25l.925-.35q.75-.275 1.163-.7.412-.425.412-1.45v-3q0-.3.2-.5t.5-.2h1q.3 0 .5.2t.2.5v3q0 1.025.425 1.45.425.425 1.175.7l.95.35q.2.075.325.25t.125.4V20q0 .3-.2.5t-.5.2Zm3-15.3h1V4.3h-1Zm-3 7.5h7v-2.45l-.95-.35q-.95-.35-1.5-.938-.55-.587-.55-1.862V6.1h-1v1.2q0 1.275-.55 1.862-.55.588-1.5.938l-.95.35Zm0 7.1h7v-2.85h-7Z"/>
    </Icon>
  );
});

IconMaterialLiquorW100Filled.displayName = 'AmauiIconMaterialLiquorW100Filled';

export default IconMaterialLiquorW100Filled;
