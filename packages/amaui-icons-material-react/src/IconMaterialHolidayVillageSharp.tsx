import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHolidayVillageSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HolidayVillageSharp'
      short_name='HolidayVillage'

      {...props}
    >
      <path d="M2 20V10L8 4L14 10V20ZM4 18H7V15H9V18H12V10.825L8 6.825L4 10.825ZM7 13V11H9V13ZM16 20V9.175L10.825 4H13.65L18 8.35V20ZM20 20V7.525L16.475 4H19.3L22 6.7V20ZM4 18H7H9H12H8H4Z"/>
    </Icon>
  )
});

export default IconMaterialHolidayVillageSharp;
