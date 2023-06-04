import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFlightLandW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlightLandW100'

      short_name='FlightLand'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.65 20.35v-.7h16.7v.7ZM19 15.25 3.65 11V6.9l.6.15.7 2.15 5.7 1.6V2.85l.85.2 2.75 8.75 5.35 1.5q.35.075.55.362.2.288.2.638 0 .5-.425.8-.425.3-.925.15Z"/>
    </Icon>
  );
});

IconMaterialFlightLandW100.displayName = 'AmauiIconMaterialFlightLandW100';

export default IconMaterialFlightLandW100;
