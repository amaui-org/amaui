import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDoorFront = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoorFront'

      short_name='DoorFront'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21v-2h2V3h14v16h2v2Zm14-2V5H7v14Zm-3-6q.425 0 .713-.288Q15 12.425 15 12t-.287-.713Q14.425 11 14 11t-.712.287Q13 11.575 13 12t.288.712Q13.575 13 14 13ZM7 5v14Z"/>
    </Icon>
  );
});

IconMaterialDoorFront.displayName = 'AmauiIconMaterialDoorFront';

export default IconMaterialDoorFront;
