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
      <path d="M132-132v-28h696v28H132Zm80-80v-172q-35-73-52.5-137.5T142-641q0-43 11-91.5T190-851q2-7 7-12t13-5q8 0 13 7.5t4 16.5l-10 80q-6 54 14 107t57.5 95q37.5 42 87.5 68t104 26q63 0 111 7.5t81 22.5q36 17 56 44t20 68v114H376v-10q0-41 29-69.5t71-28.5h128v-28H476q-53 0-90.5 36.5T348-222v10H212Zm268-320q-45 0-76.5-31.5T372-640q0-45 31.5-76.5T480-748q45 0 76.5 31.5T588-640q0 45-31.5 76.5T480-532Z"/>
    </Icon>
  );
});

IconMaterialPersonRaisedHandW100Filled.displayName = 'AmauiIconMaterialPersonRaisedHandW100Filled';

export default IconMaterialPersonRaisedHandW100Filled;
