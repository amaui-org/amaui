import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlightLandW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlightLandW100Filled'

      short_name='FlightLand'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 20.35q-.15 0-.25-.1t-.1-.25q0-.15.1-.25t.25-.1h16q.15 0 .25.1t.1.25q0 .15-.1.25t-.25.1Zm15-5.1-14.8-4.1q-.25-.075-.4-.275-.15-.2-.15-.45v-3.1q0-.175.125-.275.125-.1.3-.05.075.025.138.087.062.063.087.138L4.95 9.2l5.7 1.6V3.475q0-.275.175-.4t.45-.075q.1.025.175.1.075.075.125.175L14.25 11.8l5.35 1.5q.35.075.55.362.2.288.2.638 0 .5-.425.8-.425.3-.925.15Z"/>
    </Icon>
  );
});

IconMaterialFlightLandW100Filled.displayName = 'AmauiIconMaterialFlightLandW100Filled';

export default IconMaterialFlightLandW100Filled;
