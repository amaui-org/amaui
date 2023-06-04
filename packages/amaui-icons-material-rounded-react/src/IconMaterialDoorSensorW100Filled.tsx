import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDoorSensorW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoorSensorW100Filled'

      short_name='DoorSensor'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.8 19.7q-.625 0-1.062-.438Q8.3 18.825 8.3 18.2v-2.15h4.05q.425 0 .738-.312.312-.313.312-.738t-.312-.738q-.313-.312-.738-.312H8.3V5.8q0-.625.438-1.063Q9.175 4.3 9.8 4.3h4.4q.625 0 1.063.437.437.438.437 1.063v12.4q0 .625-.437 1.062-.438.438-1.063.438Zm-3.65-4.35q-.15 0-.25-.1T5.8 15q0-.15.1-.25t.25-.1h6.2q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1ZM12 9.7q.275 0 .488-.213.212-.212.212-.487t-.212-.488Q12.275 8.3 12 8.3t-.487.212Q11.3 8.725 11.3 9t.213.487q.212.213.487.213Zm7.35-1.35q-.15 0-.25-.1T19 8V4q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v4q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialDoorSensorW100Filled.displayName = 'AmauiIconMaterialDoorSensorW100Filled';

export default IconMaterialDoorSensorW100Filled;
