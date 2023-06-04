import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWheelchairPickupW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WheelchairPickupW100'

      short_name='WheelchairPickup'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.5 5.75q-.65 0-1.125-.475T4.9 4.15q0-.65.475-1.125T6.5 2.55q.65 0 1.125.475T8.1 4.15q0 .65-.475 1.125T6.5 5.75Zm-1.7 15.6V14.9H3.1V7.55h6.8v4.2q-1.15.775-1.95 2.175T7.15 17q0 1.075.313 2 .312.925.737 1.5v.85Zm8.75.05q-1.8 0-3.1-1.3T9.15 17q0-1.225.65-2.3.65-1.075 1.85-1.65v.775q-.85.55-1.325 1.363Q9.85 16 9.85 17q0 1.575 1.063 2.637Q11.975 20.7 13.55 20.7q1.35 0 2.438-.912 1.087-.913 1.237-2.413h.7q-.2 1.8-1.425 2.913-1.225 1.112-2.95 1.112Zm7.55-2.6-2.3-3.45h-5.15v-6.7h.7v6h4.85l2.5 3.775Z"/>
    </Icon>
  );
});

IconMaterialWheelchairPickupW100.displayName = 'AmauiIconMaterialWheelchairPickupW100';

export default IconMaterialWheelchairPickupW100;
