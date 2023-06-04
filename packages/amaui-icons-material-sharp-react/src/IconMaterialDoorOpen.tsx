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
      <path d="M11 13q.425 0 .713-.288Q12 12.425 12 12t-.287-.713Q11.425 11 11 11t-.712.287Q10 11.575 10 12t.288.712Q10.575 13 11 13Zm-4 8v-2l6-1V5.975L7 5V3l8 1.3v15.35Zm0-2h10V5H7Zm-4 2v-2h2V3h14v16h2v2Z"/>
    </Icon>
  );
});

IconMaterialDoorOpen.displayName = 'AmauiIconMaterialDoorOpen';

export default IconMaterialDoorOpen;
