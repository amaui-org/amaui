import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialThermometerSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ThermometerSharpW100Filled'
      short_name='Thermometer'

      {...props}
    >
      <path d="M12 19.7q-1.55 0-2.625-1.075T8.3 16q0-1.05.55-1.913.55-.862 1.45-1.387V6q0-.7.5-1.2t1.2-.5q.7 0 1.2.5t.5 1.2v6.7q.9.525 1.45 1.387.55.863.55 1.913 0 1.55-1.075 2.625T12 19.7ZM11 11h2V6q0-.425-.287-.713Q12.425 5 12 5t-.712.287Q11 5.575 11 6Z"/>
    </Icon>
  );
});

IconMaterialThermometerSharpW100Filled.displayName = 'AmauiIconMaterialThermometerSharpW100Filled';

export default IconMaterialThermometerSharpW100Filled;
