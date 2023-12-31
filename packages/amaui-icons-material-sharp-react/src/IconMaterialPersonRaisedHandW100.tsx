import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPersonRaisedHandW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PersonRaisedHandW100'

      short_name='PersonRaisedHand'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-132v-28h696v28H132Zm80-80v-172q-35-73-52.5-137.5T142-641q0-43 11-91.5T190-851q2-7 7-12t13-5q8 0 13 7.5t4 16.5l-10 80q-6 54 14 107t57.5 95q37.5 42 87.5 68t104 26q63 0 111 7.5t81 22.5q36 17 56 44t20 68v114H212Zm28-28h480v-86q0-29-15-50.5T660-412q-30-14-75-21t-105-7q-60 0-115.5-29t-97-75.5q-41.5-46.5-63-105T190-768q-10 30-14.5 62t-4.5 65q0 49 17 109.5T240-392v152Zm240-292q-45 0-76.5-31.5T372-640q0-45 31.5-76.5T480-748q45 0 76.5 31.5T588-640q0 45-31.5 76.5T480-532Zm0-28q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560ZM348-212v-10q0-53 37.5-89.5T476-348h128v28H476q-42 0-71 28.5T376-222v10h-28Zm132-28Zm0-400Z"/>
    </Icon>
  );
});

IconMaterialPersonRaisedHandW100.displayName = 'AmauiIconMaterialPersonRaisedHandW100';

export default IconMaterialPersonRaisedHandW100;
