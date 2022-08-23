import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDoorSensorSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoorSensorSharpW100Filled'
      short_name='DoorSensor'

      {...props}
    >
      <path d="M8.3 19.7v-3.65h5.1v-2.1H8.3V4.3h7.4v15.4Zm-2.5-4.35v-.7h6.9v.7ZM12 9.7q.275 0 .488-.213.212-.212.212-.487t-.212-.488Q12.275 8.3 12 8.3t-.487.212Q11.3 8.725 11.3 9t.213.487q.212.213.487.213Zm7-1.35v-4.7h.7v4.7Z"/>
    </Icon>
  );
});

IconMaterialDoorSensorSharpW100Filled.displayName = 'AmauiIconMaterialDoorSensorSharpW100Filled';

export default IconMaterialDoorSensorSharpW100Filled;
