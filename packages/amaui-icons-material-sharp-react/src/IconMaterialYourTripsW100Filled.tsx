import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialYourTripsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='YourTripsW100Filled'

      short_name='YourTrips'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M346-266h268v-28H346v28Zm-94 134v-348q0-75 43-132.5T404-694v-14q0-32 22-54t54-22q32 0 54 22t22 54v14q66 24 109 81.5T708-480v348H252Zm180-570q12-3 24-4.5t24-1.5q12 0 24 1.5t24 4.5v-6q0-20-14-34t-34-14q-20 0-34 14t-14 34v6Zm-11 298 59-45 59 45-22-73 59-42h-73l-23-77-23 77h-73l59 42-22 73Z"/>
    </Icon>
  );
});

IconMaterialYourTripsW100Filled.displayName = 'AmauiIconMaterialYourTripsW100Filled';

export default IconMaterialYourTripsW100Filled;
