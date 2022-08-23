import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialThermometerSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThermometerSharpW100'
      short_name='Thermometer'

      {...props}
    >
      <path d="M12 19.7q-1.5 0-2.6-1.1T8.3 16q0-1.05.525-1.9.525-.85 1.475-1.4V6q0-.7.5-1.2t1.2-.5q.7 0 1.2.5t.5 1.2v6.7q.95.55 1.463 1.413.512.862.537 1.887-.025 1.5-1.112 2.6Q13.5 19.7 12 19.7Zm0-.7q1.2 0 2.1-.9.9-.9.9-2.1 0-.725-.35-1.387-.35-.663-.85-1.013L13 13V6q0-.425-.287-.713Q12.425 5 12 5t-.712.287Q11 5.575 11 6v7l-.8.6q-.5.35-.85 1.013Q9 15.275 9 16q0 1.2.9 2.1.9.9 2.1.9Z"/>
    </Icon>
  );
});

IconMaterialThermometerSharpW100.displayName = 'AmauiIconMaterialThermometerSharpW100';

export default IconMaterialThermometerSharpW100;
