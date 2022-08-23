import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDoorFrontSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoorFrontSharpFilled'
      short_name='DoorFront'

      {...props}
    >
      <path d="M3 21V19H5V3H19V19H21V21ZM14 13Q14.425 13 14.713 12.712Q15 12.425 15 12Q15 11.575 14.713 11.287Q14.425 11 14 11Q13.575 11 13.288 11.287Q13 11.575 13 12Q13 12.425 13.288 12.712Q13.575 13 14 13Z"/>
    </Icon>
  );
});

IconMaterialDoorFrontSharpFilled.displayName = 'AmauiIconMaterialDoorFrontSharpFilled';

export default IconMaterialDoorFrontSharpFilled;
