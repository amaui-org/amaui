import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHeadMountedDeviceW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeadMountedDeviceW100Filled'

      short_name='HeadMountedDevice'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M315-292q-51 0-87-34.5T192-411v-142q0-37 24.5-64.5T278-652q51-9 101-13t101-4q51 0 101.5 3.5T682-652q37 7 61.5 34.5T768-553v142q0 51-36.5 85T644-292h-37q-10 0-19.5-2t-19.5-5l-58-18q-15-5-30-5t-30 5l-59 18q-10 3-19.5 5t-19.5 2h-37Zm0-28h37q8 0 15.5-1.5T383-325q24-8 47.5-16t49.5-8q26 0 49.5 8t47.5 16q8 2 15 3.5t15 1.5h37q39 0 67.5-26.5T740-411v-142q0-27-18-47t-45-25q-49-10-98-13t-99-3q-50 0-99 3.5T283-625q-27 5-45 25t-18 47v142q0 38 28 64.5t67 26.5Zm-209-91q-5 0-9.5-4.5T92-425v-115q0-5 4.5-9t9.5-4q5 0 9 4t4 9v116q0 5-3.5 9t-9.5 4Zm749 0q-5 0-9.5-4.5T841-425v-115q0-5 4.5-9t9.5-4q5 0 9 4t4 9v116q0 5-3.5 9t-9.5 4Zm-540 91q-39 0-67-26.5T220-411v-142q0-27 18-47t45-25q49-9 98-12.5t99-3.5q50 0 99 3t98 13q27 5 45 25t18 47v142q0 38-28.5 64.5T644-320h-37q-8 0-15-1.5t-15-3.5q-24-8-47.5-16t-49.5-8q-26 0-49.5 8T383-325q-8 2-15.5 3.5T352-320h-37Z"/>
    </Icon>
  );
});

IconMaterialHeadMountedDeviceW100Filled.displayName = 'AmauiIconMaterialHeadMountedDeviceW100Filled';

export default IconMaterialHeadMountedDeviceW100Filled;
