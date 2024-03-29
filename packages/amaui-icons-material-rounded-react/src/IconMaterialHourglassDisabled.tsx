import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHourglassDisabled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HourglassDisabled'

      short_name='HourglassDisabled'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 22q-.425 0-.713-.288Q4 21.425 4 21t.287-.712Q4.575 20 5 20h1v-3q0-1.525.713-2.863Q7.425 12.8 8.7 12q-.8-.5-1.362-1.2-.563-.7-.913-1.55L1.375 4.2q-.3-.3-.3-.713 0-.412.3-.712t.725-.3q.425 0 .725.3l18.375 18.4q.3.3.3.7 0 .4-.3.7-.3.3-.712.3-.413 0-.713-.3l-.6-.575Zm10.05-9.85-1.5-1.475q1.075-.45 1.762-1.437Q16 8.25 16 7V4H8v1.125L6.875 4l-2-2H19q.425 0 .712.287Q20 2.575 20 3t-.288.712Q19.425 4 19 4h-1v3q0 1.6-.775 2.975T15.05 12.15ZM8 20h8v-1.175L10.475 13.3q-1.1.45-1.787 1.45Q8 15.75 8 17Zm10 0Z"/>
    </Icon>
  );
});

IconMaterialHourglassDisabled.displayName = 'AmauiIconMaterialHourglassDisabled';

export default IconMaterialHourglassDisabled;
