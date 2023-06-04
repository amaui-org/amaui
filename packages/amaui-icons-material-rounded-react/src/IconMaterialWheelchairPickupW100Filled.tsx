import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWheelchairPickupW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WheelchairPickupW100Filled'

      short_name='WheelchairPickup'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.5 5.75q-.65 0-1.125-.475T4.9 4.15q0-.65.475-1.125T6.5 2.55q.65 0 1.125.475T8.1 4.15q0 .65-.475 1.125T6.5 5.75Zm-.95 15.6q-.325 0-.537-.212-.213-.213-.213-.538v-5.7h-.95q-.325 0-.538-.212-.212-.213-.212-.538v-5.1q0-.625.438-1.063.437-.437 1.062-.437h3.8q.625 0 1.063.437.437.438.437 1.063v2.7q-1.15.775-1.95 2.175T7.15 17q0 1.075.313 2 .312.925.737 1.5v.85Zm8 .05q-1.8 0-3.1-1.3T9.15 17q0-1.225.65-2.3.65-1.075 1.85-1.65v.775q-.85.55-1.325 1.363Q9.85 16 9.85 17q0 1.575 1.063 2.637Q11.975 20.7 13.55 20.7q1.35 0 2.438-.912 1.087-.913 1.237-2.413h.7q-.2 1.8-1.425 2.913-1.225 1.112-2.95 1.112Zm7.35-2.9-2.1-3.15h-4.4q-.325 0-.537-.213-.213-.212-.213-.537V9q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v5.65h4.45q.2 0 .35.088.15.087.275.237l2.075 3.15q.075.125.05.262-.025.138-.15.213-.125.075-.275.05-.15-.025-.225-.15Z"/>
    </Icon>
  );
});

IconMaterialWheelchairPickupW100Filled.displayName = 'AmauiIconMaterialWheelchairPickupW100Filled';

export default IconMaterialWheelchairPickupW100Filled;
