import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHeadMountedDeviceFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeadMountedDeviceFilled'

      short_name='HeadMountedDevice'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M300-240q-66 0-113-47t-47-113v-163q0-51 32-89.5t82-47.5q57-11 113-15.5t113-4.5q57 0 113.5 4.5T706-700q50 10 82 48t32 89v163q0 66-47 113t-113 47h-40q-13 0-26-1.5t-25-6.5l-64-22q-12-5-25-5t-25 5l-64 22q-12 5-25 6.5t-26 1.5h-40Zm0-80h40q7 0 13.5-1t12.5-3q29-9 56.5-19t57.5-10q30 0 58 9.5t56 19.5q6 2 12.5 3t13.5 1h40q33 0 56.5-23.5T740-400v-163q0-22-14-38t-35-21q-52-11-104.5-14.5T480-640q-54 0-106 4t-105 14q-21 4-35 20.5T220-563v163q0 33 23.5 56.5T300-320ZM70-400q-13 0-21.5-8.5T40-430v-100q0-13 8.5-21.5T70-560q13 0 21.5 8.5T100-530v100q0 13-8.5 21.5T70-400Zm820 0q-13 0-21.5-8.5T860-430v-100q0-13 8.5-21.5T890-560q13 0 21.5 8.5T920-530v100q0 13-8.5 21.5T890-400Zm-590 80q-33 0-56.5-23.5T220-400v-163q0-22 14-38.5t35-20.5q53-10 105-14t106-4q54 0 106.5 3.5T691-622q21 5 35 21t14 38v163q0 33-23.5 56.5T660-320h-40q-7 0-13.5-1t-12.5-3q-28-10-56-19.5t-58-9.5q-30 0-57.5 10T366-324q-6 2-12.5 3t-13.5 1h-40Z"/>
    </Icon>
  );
});

IconMaterialHeadMountedDeviceFilled.displayName = 'AmauiIconMaterialHeadMountedDeviceFilled';

export default IconMaterialHeadMountedDeviceFilled;
