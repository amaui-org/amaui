import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDoorSensorRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoorSensorRoundedW100'
      short_name='DoorSensor'

      {...props}
    >
      <path d="M9 15V5v14-4Zm-.7.35H9v2.85q0 .35.225.575Q9.45 19 9.8 19h4.4q.35 0 .575-.225Q15 18.55 15 18.2V5.8q0-.35-.225-.575Q14.55 5 14.2 5H9.8q-.35 0-.575.225Q9 5.45 9 5.8v8.85h-.7V5.8q0-.625.438-1.063Q9.175 4.3 9.8 4.3h4.4q.625 0 1.063.437.437.438.437 1.063v12.4q0 .625-.437 1.062-.438.438-1.063.438H9.8q-.625 0-1.062-.438Q8.3 18.825 8.3 18.2ZM12 9.7q.275 0 .488-.213.212-.212.212-.487t-.212-.488Q12.275 8.3 12 8.3t-.487.212Q11.3 8.725 11.3 9t.213.487q.212.213.487.213Zm7.35-1.35q-.15 0-.25-.1T19 8V4q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v4q0 .15-.1.25t-.25.1Zm-13.2 7q-.15 0-.25-.1T5.8 15q0-.15.1-.25t.25-.1h6.2q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Z"/>
    </Icon>
  );
});

IconMaterialDoorSensorRoundedW100.displayName = 'AmauiIconMaterialDoorSensorRoundedW100';

export default IconMaterialDoorSensorRoundedW100;
