import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDriveFileRenameOutlineFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DriveFileRenameOutlineFilled'

      short_name='DriveFileRenameOutline'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m10 21 4-4h8v4Zm8.3-12.075-4.25-4.2L16.875 1.9 21.1 6.125ZM2 21v-4.25l10.6-10.6 4.25 4.25L6.25 21Z"/>
    </Icon>
  );
});

IconMaterialDriveFileRenameOutlineFilled.displayName = 'AmauiIconMaterialDriveFileRenameOutlineFilled';

export default IconMaterialDriveFileRenameOutlineFilled;
