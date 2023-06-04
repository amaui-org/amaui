import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDoorFrontFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoorFrontFilled'

      short_name='DoorFront'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21v-2h2V3h14v16h2v2Zm11-8q.425 0 .713-.288Q15 12.425 15 12t-.287-.713Q14.425 11 14 11t-.712.287Q13 11.575 13 12t.288.712Q13.575 13 14 13Z"/>
    </Icon>
  );
});

IconMaterialDoorFrontFilled.displayName = 'AmauiIconMaterialDoorFrontFilled';

export default IconMaterialDoorFrontFilled;
