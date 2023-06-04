import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRemoveShoppingCartW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RemoveShoppingCartW100Filled'

      short_name='RemoveShoppingCart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15.15 11.85h-.5l-7.2-7.2h10.5q.675 0 .988.55.312.55-.038 1.2l-2.55 4.75q-.2.375-.437.538-.238.162-.763.162Zm-7.75 9q-.55 0-.95-.388-.4-.387-.4-.962t.4-.962q.4-.388.95-.388.55 0 .95.388.4.387.4.962t-.4.962q-.4.388-.95.388ZM20 21l-5.15-5.15H7.4q-.8 0-1.187-.662-.388-.663-.013-1.338l1.55-2.75L5.6 6.6 2.925 3.925q-.1-.1-.087-.238.012-.137.112-.237.125-.125.25-.125t.25.125l17.075 17.075q.1.1.088.237-.013.138-.113.238-.125.125-.25.125T20 21Zm-5.85-5.85-3.3-3.3H8.1l-1.25 2.3q-.2.375-.012.688.187.312.562.312Zm2.45 5.7q-.55 0-.95-.388-.4-.387-.4-.962t.4-.962q.4-.388.95-.388.55 0 .95.388.4.387.4.962t-.4.962q-.4.388-.95.388Z"/>
    </Icon>
  );
});

IconMaterialRemoveShoppingCartW100Filled.displayName = 'AmauiIconMaterialRemoveShoppingCartW100Filled';

export default IconMaterialRemoveShoppingCartW100Filled;
