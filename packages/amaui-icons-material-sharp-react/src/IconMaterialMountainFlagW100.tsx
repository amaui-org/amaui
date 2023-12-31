import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMountainFlagW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MountainFlagW100'

      short_name='MountainFlag'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-384Zm-143-35 64 43 79-40 79 40 64-43-50-101H386l-49 101ZM209-160h541L635-393l-74 49-81-40-81 40-75-50-115 234Zm-45 28 205-416h97v-280h212l-27 54 27 54H494v172h94l208 416H164Z"/>
    </Icon>
  );
});

IconMaterialMountainFlagW100.displayName = 'AmauiIconMaterialMountainFlagW100';

export default IconMaterialMountainFlagW100;
