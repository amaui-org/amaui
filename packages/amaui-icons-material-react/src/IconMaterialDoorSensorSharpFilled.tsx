import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDoorSensorSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoorSensorSharpFilled'
      short_name='DoorSensor'

      {...props}
    >
      <path d="M7 21v-4h7v-4H7V3h10v18Zm-3-5v-2h9v2Zm8-6q.425 0 .713-.288Q13 9.425 13 9t-.287-.713Q12.425 8 12 8t-.712.287Q11 8.575 11 9t.288.712Q11.575 10 12 10Zm7-1V3h2v6Z"/>
    </Icon>
  );
});

export default IconMaterialDoorSensorSharpFilled;
