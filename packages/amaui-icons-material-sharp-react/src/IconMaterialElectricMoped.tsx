import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialElectricMoped = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ElectricMoped'

      short_name='ElectricMoped'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7 17q-1.25 0-2.125-.875T4 14H2V7h8v5h3.5L17 7.65V5h-3V3h5v5.35L14.5 14H10q0 1.25-.875 2.125T7 17Zm0-2q.425 0 .713-.288Q8 14.425 8 14H6q0 .425.287.712Q6.575 15 7 15ZM5 6V4h5v2Zm14 11q-1.25 0-2.125-.875T16 14q0-1.25.875-2.125T19 11q1.25 0 2.125.875T22 14q0 1.25-.875 2.125T19 17Zm0-2q.425 0 .712-.288Q20 14.425 20 14t-.288-.713Q19.425 13 19 13t-.712.287Q18 13.575 18 14t.288.712Q18.575 15 19 15Zm-6 8-6-3h4v-2l6 3h-4ZM8 12Zm-4 0h4V9H4Z"/>
    </Icon>
  );
});

IconMaterialElectricMoped.displayName = 'AmauiIconMaterialElectricMoped';

export default IconMaterialElectricMoped;
