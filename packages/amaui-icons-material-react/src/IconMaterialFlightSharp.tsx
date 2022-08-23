import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFlightSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlightSharp'
      short_name='Flight'

      {...props}
    >
      <path d="M8.5 22V20.5L10.5 19V13.5L2 16V14L10.5 9V3.5Q10.5 2.85 10.925 2.425Q11.35 2 12 2Q12.65 2 13.075 2.425Q13.5 2.85 13.5 3.5V9L22 14V16L13.5 13.5V19L15.5 20.5V22L12 21Z"/>
    </Icon>
  );
});

IconMaterialFlightSharp.displayName = 'AmauiIconMaterialFlightSharp';

export default IconMaterialFlightSharp;
