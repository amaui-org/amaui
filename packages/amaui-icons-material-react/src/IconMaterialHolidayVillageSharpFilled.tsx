import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHolidayVillageSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HolidayVillageSharpFilled'
      short_name='HolidayVillage'

      {...props}
    >
      <path d="M2 20V10L8 4L14 10V20H9V15H7V20ZM7 13H9V11H7ZM16 20V9.175L10.825 4H13.65L18 8.35V20ZM20 20V7.525L16.475 4H19.3L22 6.7V20Z"/>
    </Icon>
  );
});

IconMaterialHolidayVillageSharpFilled.displayName = 'AmauiIconMaterialHolidayVillageSharpFilled';

export default IconMaterialHolidayVillageSharpFilled;
