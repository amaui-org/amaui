import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDoorSensorSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoorSensorSharpW100'
      short_name='DoorSensor'

      {...props}
    >
      <path d="M9 15V5v14-4Zm-.7.35H9V19h6V5H9v9.65h-.7V4.3h7.4v15.4H8.3ZM12 9.7q.275 0 .488-.213.212-.212.212-.487t-.212-.488Q12.275 8.3 12 8.3t-.487.212Q11.3 8.725 11.3 9t.213.487q.212.213.487.213Zm7-1.35v-4.7h.7v4.7Zm-13.2 7v-.7h6.9v.7Z"/>
    </Icon>
  );
});

IconMaterialDoorSensorSharpW100.displayName = 'AmauiIconMaterialDoorSensorSharpW100';

export default IconMaterialDoorSensorSharpW100;
