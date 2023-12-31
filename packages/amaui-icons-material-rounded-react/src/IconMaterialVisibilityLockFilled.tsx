import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVisibilityLockFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VisibilityLockFilled'

      short_name='VisibilityLock'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M680-120q-17 0-28.5-11.5T640-160v-120q0-17 11.5-28.5T680-320v-40q0-33 23.5-56.5T760-440q33 0 56.5 23.5T840-360v40q17 0 28.5 11.5T880-280v120q0 17-11.5 28.5T840-120H680Zm40-200h80v-40q0-17-11.5-28.5T760-400q-17 0-28.5 11.5T720-360v40Zm-240-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-134 0-250.5-72T56-466q-4-8-6-16.5T48-500q0-9 2-17.5t6-16.5q57-122 173.5-194T480-800q141 0 257.5 76T912-520H760q-28 0-53 7t-47 20v-7q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320q22 0 42.5-5t38.5-14q-1 5-1 9.5V-207q-20 3-40 5t-40 2Z"/>
    </Icon>
  );
});

IconMaterialVisibilityLockFilled.displayName = 'AmauiIconMaterialVisibilityLockFilled';

export default IconMaterialVisibilityLockFilled;
