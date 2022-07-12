import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDoorSensorSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DoorSensorSharpW700'
      short_name='DoorSensor'

      {...props}
    >
      <path d="M9.425 15V5.425v13.15V15Zm-3.15 1.575h3.15v2h5.15V5.425h-5.15v8h-3.15V2.275h11.45v19.45H6.275Zm5.725-6q.65 0 1.113-.463.462-.462.462-1.112 0-.65-.462-1.112-.463-.463-1.113-.463-.65 0-1.112.463-.463.462-.463 1.112 0 .65.463 1.112.462.463 1.112.463Zm6.725-1v-7.15h3.15v7.15Zm-15.3 7v-3.15h10.15v3.15Z"/>
    </Icon>
  )
});

export default IconMaterialDoorSensorSharpW700;
