import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialResetWhiteBalance = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ResetWhiteBalance'

      short_name='ResetWhiteBalance'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M600-80q-51 0-85.5-34.5T480-200q0-26 10.5-48.5T520-288v-112q0-33 23.5-56.5T600-480q33 0 56.5 23.5T680-400v112q18 17 29 39.5t11 48.5q0 51-35 85.5T600-80Zm-60-120h120q0-23-12.5-35.5T620-262v-138q0-8-6-14t-14-6q-8 0-14 6t-6 14v138q-16 14-28 26.5T540-200Zm180-100v-60h120v60H720Zm0-100v-60h160v60H720Zm111-160h-83q-26-88-99-144t-169-56q-117 0-198.5 81.5T200-480q0 72 32.5 132t87.5 98v-110h80v240H160v-80h94q-62-50-98-122.5T120-480q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-840q129 0 226.5 79.5T831-560Z"/>
    </Icon>
  );
});

IconMaterialResetWhiteBalance.displayName = 'AmauiIconMaterialResetWhiteBalance';

export default IconMaterialResetWhiteBalance;
