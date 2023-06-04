import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHolidayVillage = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HolidayVillage'

      short_name='HolidayVillage'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 20V10l6-6 6 6v10Zm2-2h3v-3h2v3h3v-7.175l-4-4-4 4Zm3-5v-2h2v2Zm9 7V9.175L10.825 4h2.825L18 8.35V20Zm4 0V7.525L16.475 4H19.3L22 6.7V20ZM4 18h8-8Z"/>
    </Icon>
  );
});

IconMaterialHolidayVillage.displayName = 'AmauiIconMaterialHolidayVillage';

export default IconMaterialHolidayVillage;
