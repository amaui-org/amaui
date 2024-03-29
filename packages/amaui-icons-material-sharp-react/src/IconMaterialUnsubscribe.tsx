import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUnsubscribe = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Unsubscribe'

      short_name='Unsubscribe'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 20V4h20v7.7q-.45-.225-.962-.375-.513-.15-1.038-.225V8l-8 5-8-5v10h8q0 .525.075 1.012.075.488.225.988Zm10-9 8-5H4Zm7 12q-2.075 0-3.537-1.462Q14 20.075 14 18q0-2.075 1.463-3.538Q16.925 13 19 13t3.538 1.462Q24 15.925 24 18q0 2.075-1.462 3.538Q21.075 23 19 23Zm-3-4.5h6v-1h-6ZM4 18Z"/>
    </Icon>
  );
});

IconMaterialUnsubscribe.displayName = 'AmauiIconMaterialUnsubscribe';

export default IconMaterialUnsubscribe;
