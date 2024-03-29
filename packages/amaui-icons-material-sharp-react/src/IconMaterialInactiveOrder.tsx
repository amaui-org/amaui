import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInactiveOrder = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InactiveOrder'

      short_name='InactiveOrder'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16.25 20h1v-4h-1Zm2.5 0h1v-4h-1ZM6 9h12V7H6Zm12 14q-2.075 0-3.537-1.462Q13 20.075 13 18q0-2.075 1.463-3.538Q15.925 13 18 13t3.538 1.462Q23 15.925 23 18q0 2.075-1.462 3.538Q20.075 23 18 23ZM3 22V3h18v8.675q-.475-.225-.975-.375T19 11.075V5H5v14.05h6.075q.125.775.388 1.475.262.7.687 1.325L12 22l-1.5-1.5L9 22l-1.5-1.5L6 22l-1.5-1.5Zm3-5h5.075q.075-.525.225-1.025.15-.5.375-.975H6Zm0-4h7.1q.95-.925 2.212-1.463Q16.575 11 18 11H6Zm-1 6.05V5v14.05Z"/>
    </Icon>
  );
});

IconMaterialInactiveOrder.displayName = 'AmauiIconMaterialInactiveOrder';

export default IconMaterialInactiveOrder;
