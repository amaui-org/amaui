import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialResetWhiteBalanceFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ResetWhiteBalanceFilled'

      short_name='ResetWhiteBalance'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M600-80q-51 0-85.5-34.5T480-200q0-26 10.5-48.5T520-288v-112q0-33 23.5-56.5T600-480q33 0 56.5 23.5T680-400v112q18 17 29 39.5t11 48.5q0 51-35 85.5T600-80Zm-60-120h120q0-23-12.5-35.5T620-262v-138q0-8-6-14t-14-6q-8 0-14 6t-6 14v138q-16 14-28 26.5T540-200Zm210-100q-13 0-21.5-8.5T720-330q0-13 8.5-21.5T750-360h60q13 0 21.5 8.5T840-330q0 13-8.5 21.5T810-300h-60Zm0-100q-13 0-21.5-8.5T720-430q0-13 8.5-21.5T750-460h100q13 0 21.5 8.5T880-430q0 13-8.5 21.5T850-400H750ZM480-760q-117 0-198.5 81.5T200-480q0 72 32.5 132t87.5 98v-70q0-17 11.5-28.5T360-360q17 0 28.5 11.5T400-320v160q0 17-11.5 28.5T360-120H200q-17 0-28.5-11.5T160-160q0-17 11.5-28.5T200-200h54q-62-50-98-122.5T120-480q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-840q65 0 139 38t195 187q11 13 3.5 28.5T792-563q-16 7-32 .5T739-585q-20-68-91.5-121.5T480-760Z"/>
    </Icon>
  );
});

IconMaterialResetWhiteBalanceFilled.displayName = 'AmauiIconMaterialResetWhiteBalanceFilled';

export default IconMaterialResetWhiteBalanceFilled;
