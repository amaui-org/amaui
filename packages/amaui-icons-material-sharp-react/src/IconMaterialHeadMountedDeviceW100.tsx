import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHeadMountedDeviceW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeadMountedDeviceW100'

      short_name='HeadMountedDevice'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M315-292q-50.74 0-86.87-34.5T192-411v-142q0-36.66 24.5-64.33T278-652q50.96-9.35 101.02-13.17Q429.08-669 480.04-669q50.96 0 101.46 3.5Q632-662 682-652q37 7 61.5 34.53T768-553v142q0 51-36.42 85-36.43 34-87.58 34h-37q-9.67 0-19.33-2-9.67-2-19.67-5l-58-18q-15-5-30-5t-30 5l-59 18q-10 3-19.67 5-9.66 2-19.33 2h-37Zm0-28h37q8.05 0 15.52-1.5Q375-323 383-325q24-8 47.67-16 23.68-8 49.5-8 25.83 0 49.5 7.86Q553.33-333.28 577-325q8 2 15.15 3.5T607-320h37q39 0 67.5-26.73T740-411v-142q0-27.3-18-47.15Q704-620 677-625q-48.69-9.78-97.84-12.89Q530-641 480-641q-50.42 0-98.97 3.56Q332.48-633.89 283-625q-27 4.88-45 25.02-18 20.13-18 46.98v142q0 37.54 27.91 64.27Q275.81-320 315-320ZM92-411v-142h27v142H92Zm749 0v-142h27v142h-27Zm-361-70Z"/>
    </Icon>
  );
});

IconMaterialHeadMountedDeviceW100.displayName = 'AmauiIconMaterialHeadMountedDeviceW100';

export default IconMaterialHeadMountedDeviceW100;
