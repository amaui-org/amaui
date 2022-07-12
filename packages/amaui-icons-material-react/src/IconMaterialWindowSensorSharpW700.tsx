import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWindowSensorSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WindowSensorSharpW700'
      short_name='WindowSensor'

      {...props}
    >
      <path d="M21.925 9.575q-.65 0-1.113-.463Q20.35 8.65 20.35 8V4q0-.65.462-1.113.463-.462 1.113-.462.65 0 1.113.462Q23.5 3.35 23.5 4v4q0 .65-.462 1.112-.463.463-1.113.463Zm-19.725 12V2.425h17.15v19.15Zm3.15-11.15H9.2v-1h3.15v1h3.85v-4.85H5.35Zm0 8H16.2v-4.85H5.35Zm0 0H16.2 5.35Z"/>
    </Icon>
  )
});

export default IconMaterialWindowSensorSharpW700;
