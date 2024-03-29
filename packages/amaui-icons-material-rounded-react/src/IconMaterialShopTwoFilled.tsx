import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialShopTwoFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShopTwoFilled'

      short_name='ShopTwo'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 14.1q0 .3.262.425.263.125.513-.025l4.05-2.575q.225-.15.225-.425t-.225-.425L12.775 8.5q-.25-.15-.513-.025Q12 8.6 12 8.9ZM3 22q-.825 0-1.412-.587Q1 20.825 1 20V10q0-.425.288-.713Q1.575 9 2 9t.713.287Q3 9.575 3 10v10h16q.425 0 .712.288.288.287.288.712t-.288.712Q19.425 22 19 22Zm4-4q-.825 0-1.412-.587Q5 16.825 5 16V7q0-.825.588-1.412Q6.175 5 7 5h3V3q0-.825.588-1.413Q11.175 1 12 1h4q.825 0 1.413.587Q18 2.175 18 3v2h3q.825 0 1.413.588Q23 6.175 23 7v9q0 .825-.587 1.413Q21.825 18 21 18Zm5-13h4V3h-4Z"/>
    </Icon>
  );
});

IconMaterialShopTwoFilled.displayName = 'AmauiIconMaterialShopTwoFilled';

export default IconMaterialShopTwoFilled;
