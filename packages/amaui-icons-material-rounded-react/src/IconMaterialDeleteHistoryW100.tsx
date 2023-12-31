import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDeleteHistoryW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeleteHistoryW100'

      short_name='DeleteHistory'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M478-172q-112 0-196-69T177-418q-2-7 .5-13t9.5-7q6-1 10.5 3t6.5 11q21 97 97.5 160.5T478-200q11 0 22-.5t22-2.5v28q-11 2-22 2.5t-22 .5Zm247-83-75 74q-4 4-9 3.5t-9-4.5q-4-4-4-9.5t4-9.5l74-74-75-75q-4-4-3.5-9.5t4.5-9.5q4-4 9.5-4t9.5 4l74 75 75-75q4-4 9.5-3.5t9.5 4.5q4 4 4 9t-4 9l-74 75 74 75q4 4 3.5 9.5T818-181q-4 4-9 4t-9-4l-75-74ZM478-760q-60 0-113 24.5T270-668h82q6 0 10 4t4 10q0 6-4 10t-10 4H252q-13 0-21.5-8.5T222-670v-100q0-6 4-10t10-4q6 0 10 4t4 10v82q45-47 104-73.5T478-788q128 0 218 90t90 218v14h-28v-14q0-117-81.5-198.5T478-760Zm86 383-88-88q-5-5-7-10t-2-11v-180q0-6 4-10t10-4q6 0 10 4t4 10v180l84 84-15 25Z"/>
    </Icon>
  );
});

IconMaterialDeleteHistoryW100.displayName = 'AmauiIconMaterialDeleteHistoryW100';

export default IconMaterialDeleteHistoryW100;
