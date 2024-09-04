import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialVideoCameraBackAdd = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='VideoCameraBackAdd'

      short_name='VideoCameraBackAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-480ZM80-160v-320h80v240h480v-480H400v-80h320v260l160-160v440L720-420v260H80Zm120-160h400L465-500 360-360l-65-87-95 127Zm-40-240v-80H80v-80h80v-80h80v80h80v80h-80v80h-80Z"/>
    </Icon>
  );
});

IconMaterialVideoCameraBackAdd.displayName = 'AmauiIconMaterialVideoCameraBackAdd';

export default IconMaterialVideoCameraBackAdd;
