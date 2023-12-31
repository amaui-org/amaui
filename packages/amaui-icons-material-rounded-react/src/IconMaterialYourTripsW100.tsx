import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialYourTripsW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='YourTripsW100'

      short_name='YourTrips'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-266h240q6 0 10-4t4-10q0-6-4-10t-10-4H360q-6 0-10 4t-4 10q0 6 4 10t10 4Zm-48 134q-26 0-43-17t-17-43v-288q0-75 43-132.5T404-694v-14q0-32 22-54t54-22q32 0 54 22t22 54v14q66 24 109 81.5T708-480v288q0 26-17 43t-43 17H312Zm0-28h336q12 0 22-10t10-22v-288q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480v288q0 12 10 22t22 10Zm120-542q12-3 24-4.5t24-1.5q12 0 24 1.5t24 4.5v-6q0-20-14-34t-34-14q-20 0-34 14t-14 34v6ZM312-160h-32 400-368Zm168-289 41 31q5 3 9 0t2-8l-15-51 40-29q5-3 3-8t-7-5h-50l-16-53q-2-5-7-5t-7 5l-16 53h-50q-5 0-7 5t3 8l40 29-15 51q-2 5 2 8t9 0l41-31Z"/>
    </Icon>
  );
});

IconMaterialYourTripsW100.displayName = 'AmauiIconMaterialYourTripsW100';

export default IconMaterialYourTripsW100;
