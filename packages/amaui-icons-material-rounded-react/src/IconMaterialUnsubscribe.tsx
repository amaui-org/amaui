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
      <path d="M4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v5.7q-.45-.225-.962-.375-.513-.15-1.038-.225V8l-7.475 4.675q-.125.075-.263.112-.137.038-.262.038t-.262-.038q-.138-.037-.263-.112L4 8v10h8q0 .525.075 1.012.075.488.225.988Zm8-9 8-5H4Zm7 12q-2.075 0-3.537-1.462Q14 20.075 14 18q0-2.075 1.463-3.538Q16.925 13 19 13t3.538 1.462Q24 15.925 24 18q0 2.075-1.462 3.538Q21.075 23 19 23Zm-2.5-4.5h5q.2 0 .35-.15.15-.15.15-.35 0-.2-.15-.35-.15-.15-.35-.15h-5q-.2 0-.35.15-.15.15-.15.35 0 .2.15.35.15.15.35.15ZM4 18v-7 .075V8v.25V6.8q0-.275 0 0V6v.8-.013V8.25 8v10Z"/>
    </Icon>
  );
});

IconMaterialUnsubscribe.displayName = 'AmauiIconMaterialUnsubscribe';

export default IconMaterialUnsubscribe;
