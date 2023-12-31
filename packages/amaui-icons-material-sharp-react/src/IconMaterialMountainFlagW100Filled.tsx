import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMountainFlagW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MountainFlagW100Filled'

      short_name='MountainFlag'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-416-79 40-88-59 56-113h97v-280h212l-27 54 27 54H494v172h94l57 115-86 57-79-40ZM164-132l137-278 98 66 81-40 81 40 97-64 138 276H164Z"/>
    </Icon>
  );
});

IconMaterialMountainFlagW100Filled.displayName = 'AmauiIconMaterialMountainFlagW100Filled';

export default IconMaterialMountainFlagW100Filled;
