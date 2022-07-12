import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFlightClassSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlightClassSharpW100'
      short_name='FlightClass'

      {...props}
    >
      <path d="M13.325 11.7V5.3H16.7V11.7ZM14.025 11H16V6H14.025ZM8.975 16.7 6.3 8.075V5.3H7V8L9.5 16H17.375V16.7ZM8.65 19.7V19H17.35V19.7ZM14.025 6H16Z"/>
    </Icon>
  )
});

export default IconMaterialFlightClassSharpW100;
