import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHolidayVillageW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HolidayVillageW100Filled'

      short_name='HolidayVillage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.8 12.7q.275 0 .488-.213.212-.212.212-.487t-.212-.488q-.213-.212-.488-.212t-.488.212Q9.1 11.725 9.1 12q0 .3.2.5t.5.2Zm6.55 6.025q-.15 0-.25-.1t-.1-.25V10.1q0-.025-.125-.3l-3.35-3.35q-.175-.175-.087-.388.087-.212.337-.212.075 0 .138.025.062.025.112.075l3.45 3.45q.125.125.175.25.05.125.05.275v8.45q0 .15-.1.25t-.25.1Zm2.2 0q-.15 0-.25-.1t-.1-.25v-9.2q0-.025-.125-.3l-2.4-2.4q-.175-.175-.087-.4.087-.225.337-.225.075 0 .137.025.063.025.113.075l2.5 2.525q.125.125.175.25.05.125.05.275v9.375q0 .15-.1.25t-.25.1ZM5.85 18.7q-.325 0-.538-.213-.212-.212-.212-.537v-7.1q0-.15.05-.275.05-.125.175-.25l3.95-3.95q.125-.125.25-.175.125-.05.275-.05.15 0 .275.05.125.05.25.175l3.95 3.95q.125.125.175.25.05.125.05.275v7.1q0 .325-.212.537-.213.213-.538.213H10.5v-2.1q0-.275-.212-.487-.213-.213-.488-.213-.3 0-.5.213-.2.212-.2.487v2.1Z"/>
    </Icon>
  );
});

IconMaterialHolidayVillageW100Filled.displayName = 'AmauiIconMaterialHolidayVillageW100Filled';

export default IconMaterialHolidayVillageW100Filled;
