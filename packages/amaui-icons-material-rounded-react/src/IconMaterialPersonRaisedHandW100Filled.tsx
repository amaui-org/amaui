import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPersonRaisedHandW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonRaisedHandW100Filled'

      short_name='PersonRaisedHand'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M146-132q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h668q5.95 0 9.975 4.035 4.025 4.035 4.025 10T823.975-136q-4.025 4-9.975 4H146Zm96-80q-12.75 0-21.375-8.625T212-242v-142q-35-73-52.5-137.5T142-641q0-43 11-91.5T190-851q2-7 7-12t13-5q8 0 13 7.5t4 16.5l-10 80q-6 54 14 107t57.5 95q37.5 42 87.5 68t104 26q63 0 111 7.5t81 22.5q36 17 56 44t20 68v84q0 12.75-8.625 21.375T718-212H376v-10q0-41 28.75-69.5T476-320h114q5.95 0 9.975-4.035 4.025-4.035 4.025-10T599.975-344q-4.025-4-9.975-4H476q-53 0-90.5 36.5T348-222v10H242Zm238-320q-44.55 0-76.275-31.725Q372-595.45 372-640q0-44.55 31.725-76.275Q435.45-748 480-748q44.55 0 76.275 31.725Q588-684.55 588-640q0 44.55-31.725 76.275Q524.55-532 480-532Z"/>
    </Icon>
  );
});

IconMaterialPersonRaisedHandW100Filled.displayName = 'AmauiIconMaterialPersonRaisedHandW100Filled';

export default IconMaterialPersonRaisedHandW100Filled;
