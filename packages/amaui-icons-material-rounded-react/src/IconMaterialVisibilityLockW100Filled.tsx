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
      <path d="M659-171q-12.75 0-21.375-8.625T629-201v-105q0-13 10.5-21t24.5-8v-40q0-26.812 19.133-45.906 19.133-19.094 46-19.094t45.367 19.094Q793-401.812 793-375v40q14 0 24.5 8t10.5 21v105q0 12.75-8.625 21.375T798-171H659Zm33-164h73v-40q0-17-9.5-27T729-412q-17 0-27 10t-10 27v40Zm-212-57q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm.215 140Q365-252 265-311.5T110.803-472.354Q107-479 105.5-485.5 104-492 104-500t1.5-14.5q1.5-6.5 5.303-13.146Q165-629 264.993-688.5 364.986-748 480-748q119 0 218.5 61.5T854-520H729q-33.026 0-62.513 10.5Q637-499 614-479q1-5 1.5-10.5t.5-10.5q0-56.667-39.735-96.333Q536.529-636 479.765-636 423-636 383.5-596.265q-39.5 39.736-39.5 96.5Q344-443 383.667-403.5 423.333-364 480-364q20.603 0 39.802-6Q539-376 555-387q-3 11-4.5 22.5T549-341v83q-17.196 2.571-34.393 4.286Q497.411-252 480.215-252Z"/>
    </Icon>
  );
});

IconMaterialVisibilityLockW100Filled.displayName = 'AmauiIconMaterialVisibilityLockW100Filled';

export default IconMaterialVisibilityLockW100Filled;
