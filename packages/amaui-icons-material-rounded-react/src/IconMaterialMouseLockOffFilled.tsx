import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMouseLockOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MouseLockOffFilled'

      short_name='MouseLockOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M634-80q-14 0-24-10t-10-24v-126q0-17 11.5-28.5T640-280h40l160 160v6q0 14-10 24t-24 10H634Zm157 24L56-791q-12-12-12-28.5T56-848q12-12 28-12t28 12l735 736q12 12 12 28t-12 28q-12 12-28 12t-28-12Zm9-212-40-40v-12q0-17-11.5-28.5T720-360h-5q-3 0-5 1l-30-30q9-5 19-8t21-3q33 0 56.5 23.5T800-320v52ZM520-600v-277q104 15 172 93.5T760-600H520Zm98 148-67-68h209v44q-10-2-19.5-3t-20.5-1q-28 0-53.5 7T618-452ZM480-80q-117 0-198.5-81.5T200-360v-160h240l120 120q-19 25-29.5 55.5T520-280v197q-10 2-19.5 2.5T480-80Zm-40-552L279-795q32-32 72.5-53.5T440-877v245Zm-240 32q0-35 8-67.5t23-61.5l129 129H200Z"/>
    </Icon>
  );
});

IconMaterialMouseLockOffFilled.displayName = 'AmauiIconMaterialMouseLockOffFilled';

export default IconMaterialMouseLockOffFilled;
