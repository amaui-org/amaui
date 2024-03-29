import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHotel = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Hotel'

      short_name='Hotel'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M1 20V5h2v10h8V7h12v13h-2v-3H3v3Zm6-6q-1.25 0-2.125-.875T4 11q0-1.25.875-2.125T7 8q1.25 0 2.125.875T10 11q0 1.25-.875 2.125T7 14Zm6 1h8V9h-8Zm-6-3q.425 0 .713-.288Q8 11.425 8 11t-.287-.713Q7.425 10 7 10t-.713.287Q6 10.575 6 11t.287.712Q6.575 12 7 12Zm0-1Zm6 4V9v6Z"/>
    </Icon>
  );
});

IconMaterialHotel.displayName = 'AmauiIconMaterialHotel';

export default IconMaterialHotel;
