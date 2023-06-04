import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHolidayVillageW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HolidayVillageW100'

      short_name='HolidayVillage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.1 18.7v-8.15l4.7-4.7 4.7 4.7v8.15Zm.7-.7h3.3v-2.1h1.4V18h3.3v-7.175l-4-4-4 4Zm3.3-5.3v-1.4h1.4v1.4Zm6.9 6.025v-8.8L11.925 5.85h1L16.7 9.625v9.1Zm2.2 0V9l-3.15-3.15h1.025L18.9 8.7v10.025ZM5.8 18H13.8h-8Z"/>
    </Icon>
  );
});

IconMaterialHolidayVillageW100.displayName = 'AmauiIconMaterialHolidayVillageW100';

export default IconMaterialHolidayVillageW100;
