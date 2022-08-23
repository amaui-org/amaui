import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFlightClassSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlightClassSharp'
      short_name='FlightClass'

      {...props}
    >
      <path d="M12 13V4H18V13ZM14 11H16V6H14ZM8 18 5 8V4H7V8L9.5 16H18V18ZM8 21V19H18V21ZM14 6H16Z"/>
    </Icon>
  );
});

IconMaterialFlightClassSharp.displayName = 'AmauiIconMaterialFlightClassSharp';

export default IconMaterialFlightClassSharp;
