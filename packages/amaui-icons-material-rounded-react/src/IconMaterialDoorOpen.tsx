import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDoorOpen = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoorOpen'

      short_name='DoorOpen'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 13q.425 0 .713-.288Q12 12.425 12 12t-.287-.713Q11.425 11 11 11t-.712.287Q10 11.575 10 12t.288.712Q10.575 13 11 13Zm-4 8v-2l6-1V6.875q0-.375-.225-.675-.225-.3-.575-.35L7 5V3l5.5.9q1.1.2 1.8 1.025T15 6.85v11.1q0 .725-.475 1.288-.475.562-1.2.687Zm0-2h10V5H7Zm-3 2q-.425 0-.712-.288Q3 20.425 3 20t.288-.712Q3.575 19 4 19h1V5q0-.85.588-1.425Q6.175 3 7 3h10q.85 0 1.425.575Q19 4.15 19 5v14h1q.425 0 .712.288.288.287.288.712t-.288.712Q20.425 21 20 21Z"/>
    </Icon>
  );
});

IconMaterialDoorOpen.displayName = 'AmauiIconMaterialDoorOpen';

export default IconMaterialDoorOpen;
