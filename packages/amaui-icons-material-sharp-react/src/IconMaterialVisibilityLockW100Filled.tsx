import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVisibilityLockW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VisibilityLockW100Filled'

      short_name='VisibilityLock'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M629-171v-164h35v-40q0-26.812 19.133-45.906 19.133-19.094 46-19.094t45.367 19.094Q793-401.812 793-375v40h35v164H629Zm63-164h73v-40q0-17-9.5-27T729-412q-17 0-27 10t-10 27v40Zm-212-57q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm.327 140Q355-252 252-319.5T96-500q53-113 155.902-180.5Q354.803-748 480-748q119 0 218.5 61.5T854-520H729q-33.026 0-62.513 10.5Q637-499 614-479q1-5 1.5-10.5t.5-10.5q0-56.667-39.735-96.333Q536.529-636 479.765-636 423-636 383.5-596.265q-39.5 39.736-39.5 96.5Q344-443 383.667-403.5 423.333-364 480-364q20.603 0 39.802-6Q539-376 555-387q-3 11-4.5 22.5T549-341v83q-17.168 2.571-34.336 4.286Q497.496-252 480.327-252Z"/>
    </Icon>
  );
});

IconMaterialVisibilityLockW100Filled.displayName = 'AmauiIconMaterialVisibilityLockW100Filled';

export default IconMaterialVisibilityLockW100Filled;
