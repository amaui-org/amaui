import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMouseLockFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MouseLockFilled'

      short_name='MouseLock'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M634-80q-14 0-24-10t-10-24v-132q0-14 10-24t24-10h6v-40q0-33 23.5-56.5T720-400q33 0 56.5 23.5T800-320v40h6q14 0 24 10t10 24v132q0 14-10 24t-24 10H634Zm46-200h80v-40q0-17-11.5-28.5T720-360q-17 0-28.5 11.5T680-320v40ZM200-600q0-105 68-183.5T440-877v277H200Zm320 0v-277q104 15 172 93.5T760-600H520ZM480-80q-117 0-198.5-81.5T200-360v-160h560v44q-10-2-19.5-3t-20.5-1q-83 0-141.5 58.5T520-280v197q-10 2-19.5 2.5T480-80Z"/>
    </Icon>
  );
});

IconMaterialMouseLockFilled.displayName = 'AmauiIconMaterialMouseLockFilled';

export default IconMaterialMouseLockFilled;
