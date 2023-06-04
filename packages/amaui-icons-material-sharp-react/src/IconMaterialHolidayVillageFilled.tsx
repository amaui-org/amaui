import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHolidayVillageFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HolidayVillageFilled'

      short_name='HolidayVillage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 20V10l6-6 6 6v10H9v-5H7v5Zm5-7h2v-2H7Zm9 7V9.175L10.825 4h2.825L18 8.35V20Zm4 0V7.525L16.475 4H19.3L22 6.7V20Z"/>
    </Icon>
  );
});

IconMaterialHolidayVillageFilled.displayName = 'AmauiIconMaterialHolidayVillageFilled';

export default IconMaterialHolidayVillageFilled;
