import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHotelFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HotelFilled'

      short_name='Hotel'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M1 20V5h2v10h8V7h12v13h-2v-3H3v3Zm6-6q-1.25 0-2.125-.875T4 11q0-1.25.875-2.125T7 8q1.25 0 2.125.875T10 11q0 1.25-.875 2.125T7 14Z"/>
    </Icon>
  );
});

IconMaterialHotelFilled.displayName = 'AmauiIconMaterialHotelFilled';

export default IconMaterialHotelFilled;
