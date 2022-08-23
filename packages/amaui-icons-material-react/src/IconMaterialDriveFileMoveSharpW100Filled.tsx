import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDriveFileMoveSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DriveFileMoveSharpW100Filled'
      short_name='DriveFileMove'

      {...props}
    >
      <path d="M12 16.1 15.1 13 12 9.9 11.5 10.4 13.75 12.65H8.9V13.35H13.75L11.5 15.6ZM3.3 18.7V6.3H11L12 7.3H20.7V18.7Z"/>
    </Icon>
  );
});

IconMaterialDriveFileMoveSharpW100Filled.displayName = 'AmauiIconMaterialDriveFileMoveSharpW100Filled';

export default IconMaterialDriveFileMoveSharpW100Filled;
