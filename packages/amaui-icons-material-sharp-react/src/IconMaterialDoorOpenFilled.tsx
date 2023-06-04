import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDoorOpenFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoorOpenFilled'

      short_name='DoorOpen'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21v-2h2V3h14v16h2v2Zm12-2h2V5h-2Zm-4-6q.425 0 .713-.288Q12 12.425 12 12t-.287-.713Q11.425 11 11 11t-.712.287Q10 11.575 10 12t.288.712Q10.575 13 11 13Z"/>
    </Icon>
  );
});

IconMaterialDoorOpenFilled.displayName = 'AmauiIconMaterialDoorOpenFilled';

export default IconMaterialDoorOpenFilled;
