import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDriveFileRenameOutlineTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DriveFileRenameOutlineTwoTone'
      short_name='DriveFileRenameOutline'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><polygon opacity=".3" points="12.06,10.02 5,17.08 5,18 5.92,18 12.98,10.94"/><polygon points="15,16 11,20 21,20 21,16"/><path d="M12.06,7.19L3,16.25V20h3.75l9.06-9.06L12.06,7.19z M5.92,18H5v-0.92l7.06-7.06l0.92,0.92L5.92,18z"/><path d="M18.71,8.04c0.39-0.39,0.39-1.02,0-1.41l-2.34-2.34C16.17,4.09,15.92,4,15.66,4c-0.25,0-0.51,0.1-0.7,0.29l-1.83,1.83 l3.75,3.75L18.71,8.04z"/></g></g>
    </Icon>
  );
});

IconMaterialDriveFileRenameOutlineTwoTone.displayName = 'AmauiIconMaterialDriveFileRenameOutlineTwoTone';

export default IconMaterialDriveFileRenameOutlineTwoTone;
