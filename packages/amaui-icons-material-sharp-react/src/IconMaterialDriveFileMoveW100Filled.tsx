import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDriveFileMoveW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DriveFileMoveW100Filled'

      short_name='DriveFileMove'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 16.1 3.1-3.1L12 9.9l-.5.5 2.25 2.25H8.9v.7h4.85L11.5 15.6Zm-8.7 2.6V6.3H11l1 1h8.7v11.4Z"/>
    </Icon>
  );
});

IconMaterialDriveFileMoveW100Filled.displayName = 'AmauiIconMaterialDriveFileMoveW100Filled';

export default IconMaterialDriveFileMoveW100Filled;
