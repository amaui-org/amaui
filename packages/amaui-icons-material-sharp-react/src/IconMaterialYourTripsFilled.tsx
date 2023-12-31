import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialYourTripsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='YourTripsFilled'

      short_name='YourTrips'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-240h320v-80H320v80ZM200-80v-400q0-85 44.5-152T360-732v-28q0-50 35-85t85-35q50 0 85 35t35 85v28q71 33 115.5 100T760-480v400H200Zm240-676q11-2 20-3t20-1q11 0 20 1t20 3v-4q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760v4Zm-34 376 74-56 74 56-28-91 74-53h-91l-29-96-29 96h-91l74 53-28 91Z"/>
    </Icon>
  );
});

IconMaterialYourTripsFilled.displayName = 'AmauiIconMaterialYourTripsFilled';

export default IconMaterialYourTripsFilled;
