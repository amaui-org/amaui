import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShoppingCartCheckoutW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShoppingCartCheckoutW100'

      short_name='ShoppingCartCheckout'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.4 20.85q-.575 0-.962-.388-.388-.387-.388-.962t.388-.962q.387-.388.962-.388t.963.388q.387.387.387.962t-.387.962q-.388.388-.963.388Zm9.2 0q-.575 0-.962-.388-.388-.387-.388-.962t.388-.962q.387-.388.962-.388t.962.388q.388.387.388.962t-.388.962q-.387.388-.962.388ZM11.775 8.825q-.1-.1-.1-.238 0-.137.1-.237l2-2H9q-.15 0-.25-.1T8.65 6q0-.15.1-.25t.25-.1h4.775L11.75 3.625q-.1-.1-.087-.238.012-.137.112-.237.1-.1.237-.1.138 0 .238.1l2.3 2.325q.125.125.175.25.05.125.05.275 0 .15-.05.275-.05.125-.175.25L12.225 8.85q-.1.1-.225.088-.125-.013-.225-.113ZM7.4 15.85q-.8 0-1.187-.662-.388-.663-.013-1.338l1.55-2.75-3.7-7.75h-1.4q-.15 0-.25-.1T2.3 3q0-.15.1-.25t.25-.1h1.375q.225 0 .4.112.175.113.275.313l3.85 8.075h7l3.5-6.325q.05-.075.125-.125t.175-.05q.2 0 .3.162.1.163 0 .363l-3.3 5.975q-.2.35-.512.525-.313.175-.688.175H8.1l-1.25 2.3q-.175.325 0 .662.175.338.55.338h10.2q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialShoppingCartCheckoutW100.displayName = 'AmauiIconMaterialShoppingCartCheckoutW100';

export default IconMaterialShoppingCartCheckoutW100;
