import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVisibilityLockW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VisibilityLockW100'

      short_name='VisibilityLock'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-392q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm.327 140Q355-252 252-319.5T96-500q53-113 155.902-180.5Q354.803-748 480-748q119 0 218.5 61.5T854-520h-33q-52-93-143-146.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280q17.25 0 34.5-1.5T549-286v28q-17.168 2.571-34.336 4.286Q497.496-252 480.327-252ZM480-364q20.603 0 39.802-6Q539-376 555-387q8-28 22.5-51t36.5-41q1-5 1.5-10.5t.5-10.5q0-56.667-39.735-96.333Q536.529-636 479.765-636 423-636 383.5-596.265q-39.5 39.736-39.5 96.5Q344-443 383.667-403.5 423.333-364 480-364Zm-5-136Zm154 329v-164h35v-40q0-26.812 19.133-45.906 19.133-19.094 46-19.094t45.367 19.094Q793-401.812 793-375v40h35v164H629Zm63-164h73v-40q0-17-9.5-27T729-412q-17 0-27 10t-10 27v40Z"/>
    </Icon>
  );
});

IconMaterialVisibilityLockW100.displayName = 'AmauiIconMaterialVisibilityLockW100';

export default IconMaterialVisibilityLockW100;
