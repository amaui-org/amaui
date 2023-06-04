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
      <path d="M4 21q-.425 0-.712-.288Q3 20.425 3 20t.288-.712Q3.575 19 4 19h1V5q0-.825.588-1.413Q6.175 3 7 3h10q.825 0 1.413.587Q19 4.175 19 5v14h1q.425 0 .712.288.288.287.288.712t-.288.712Q20.425 21 20 21Zm13-2V5H7v14Zm-3-6q.425 0 .713-.288Q15 12.425 15 12t-.287-.713Q14.425 11 14 11t-.712.287Q13 11.575 13 12t.288.712Q13.575 13 14 13ZM7 5v14V5Z"/>
    </Icon>
  );
});

IconMaterialDoorFront.displayName = 'AmauiIconMaterialDoorFront';

export default IconMaterialDoorFront;
