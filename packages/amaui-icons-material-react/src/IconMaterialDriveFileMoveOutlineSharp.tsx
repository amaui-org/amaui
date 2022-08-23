import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDriveFileMoveOutlineSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DriveFileMoveOutlineSharp'
      short_name='DriveFileMoveOutline'

      {...props}
    >
      <path d="M11.975 17.025 16 13 11.975 8.975 10.575 10.375 12.2 12H8V14H12.2L10.575 15.625ZM2 20V4H10L12 6H22V20ZM4 18H20V8H11.175L9.175 6H4ZM4 18V6V8Z"/>
    </Icon>
  );
});

IconMaterialDriveFileMoveOutlineSharp.displayName = 'AmauiIconMaterialDriveFileMoveOutlineSharp';

export default IconMaterialDriveFileMoveOutlineSharp;
