import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDoorOpenSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoorOpenSharpFilled'
      short_name='DoorOpen'

      {...props}
    >
      <path d="M3 21v-2h2V3h14v16h2v2Zm12-2h2V5h-2Zm-4-6q.425 0 .713-.288Q12 12.425 12 12t-.287-.713Q11.425 11 11 11t-.712.287Q10 11.575 10 12t.288.712Q10.575 13 11 13Z"/>
    </Icon>
  )
});

export default IconMaterialDoorOpenSharpFilled;
