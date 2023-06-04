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
      <path d="M5.1 18.7v-8.15l4.7-4.7 4.7 4.7v8.15h-4v-2.8H9.1v2.8Zm4-6h1.4v-1.4H9.1Zm6.9 6.025v-8.8L11.925 5.85h1L16.7 9.625v9.1Zm2.2 0V9l-3.15-3.15h1.025L18.9 8.7v10.025Z"/>
    </Icon>
  );
});

IconMaterialHolidayVillageW100Filled.displayName = 'AmauiIconMaterialHolidayVillageW100Filled';

export default IconMaterialHolidayVillageW100Filled;
