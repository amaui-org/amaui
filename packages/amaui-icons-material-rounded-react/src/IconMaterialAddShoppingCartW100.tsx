import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddShoppingCartW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddShoppingCartW100'

      short_name='AddShoppingCart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 8.35q-.15 0-.25-.1t-.1-.25V5.35H9q-.15 0-.25-.1T8.65 5q0-.15.1-.25t.25-.1h2.65V2q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v2.65H15q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1h-2.65V8q0 .15-.1.25t-.25.1Zm-4.6 12.5q-.575 0-.962-.388-.388-.387-.388-.962t.388-.962q.387-.388.962-.388t.963.388q.387.387.387.962t-.387.962q-.388.388-.963.388Zm9.2 0q-.575 0-.962-.388-.388-.387-.388-.962t.388-.962q.387-.388.962-.388t.962.388q.388.387.388.962t-.388.962q-.387.388-.962.388Zm-9.2-5q-.8 0-1.187-.662-.388-.663-.013-1.338l1.55-2.75-3.7-7.75h-1.4q-.15 0-.25-.1T2.3 3q0-.15.1-.25t.25-.1h1.375q.225 0 .4.112.175.113.275.313l3.85 8.075h7l3.5-6.325q.05-.075.125-.125t.175-.05q.2 0 .3.162.1.163 0 .363l-3.3 5.975q-.2.35-.512.525-.313.175-.688.175H8.1l-1.25 2.3q-.175.325 0 .662.175.338.55.338h10.2q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialAddShoppingCartW100.displayName = 'AmauiIconMaterialAddShoppingCartW100';

export default IconMaterialAddShoppingCartW100;
