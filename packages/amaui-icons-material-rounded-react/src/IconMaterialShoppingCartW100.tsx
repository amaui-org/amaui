import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShoppingCartW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShoppingCartW100'

      short_name='ShoppingCart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.4 20.85q-.575 0-.962-.388-.388-.387-.388-.962t.388-.962q.387-.388.962-.388t.963.388q.387.387.387.962t-.387.962q-.388.388-.963.388Zm9.2 0q-.575 0-.962-.388-.388-.387-.388-.962t.388-.962q.387-.388.962-.388t.962.388q.388.387.388.962t-.388.962q-.387.388-.962.388ZM5.8 5.35l2.75 5.8h7l2.8-5.1q.15-.275.025-.488-.125-.212-.425-.212Zm1.6 10.5q-.8 0-1.187-.662-.388-.663-.013-1.338l1.55-2.75-3.7-7.75H2.625q-.125 0-.225-.1T2.3 3q0-.15.1-.25t.25-.1h1.375q.225 0 .4.112.175.113.275.313l.75 1.575h12.5q.725 0 1.063.525Q19.35 5.7 19 6.3l-2.65 4.85q-.2.35-.512.525-.313.175-.688.175H8.1l-1.25 2.3q-.2.3-.012.65.187.35.562.35h10.225q.125 0 .225.1t.1.25q0 .15-.1.25t-.25.1Zm1.15-4.7h7Z"/>
    </Icon>
  );
});

IconMaterialShoppingCartW100.displayName = 'AmauiIconMaterialShoppingCartW100';

export default IconMaterialShoppingCartW100;
