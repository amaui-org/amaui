import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDoorSensor = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoorSensor'

      short_name='DoorSensor'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 15V5v14-4Zm-2 1h2v3h6V5H9v9H7V5q0-.825.588-1.413Q8.175 3 9 3h6q.825 0 1.413.587Q17 4.175 17 5v14q0 .825-.587 1.413Q15.825 21 15 21H9q-.825 0-1.412-.587Q7 19.825 7 19Zm5-6q.425 0 .713-.288Q13 9.425 13 9t-.287-.713Q12.425 8 12 8t-.712.287Q11 8.575 11 9t.288.712Q11.575 10 12 10Zm8-1q-.425 0-.712-.288Q19 8.425 19 8V4q0-.425.288-.713Q19.575 3 20 3t.712.287Q21 3.575 21 4v4q0 .425-.288.712Q20.425 9 20 9ZM5 16q-.425 0-.713-.288Q4 15.425 4 15t.287-.713Q4.575 14 5 14h7q.425 0 .713.287.287.288.287.713t-.287.712Q12.425 16 12 16Z"/>
    </Icon>
  );
});

IconMaterialDoorSensor.displayName = 'AmauiIconMaterialDoorSensor';

export default IconMaterialDoorSensor;
