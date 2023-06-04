import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDriveFileRenameOutlineW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DriveFileRenameOutlineW100Filled'

      short_name='DriveFileRenameOutline'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m8.2 19.7 1.425-1.4H20.7v1.4Zm8.55-11.475L14.775 6.25l1.675-1.675 1.975 1.975ZM3.3 19.7v-1.975L14.275 6.75l1.975 1.975L5.275 19.7Z"/>
    </Icon>
  );
});

IconMaterialDriveFileRenameOutlineW100Filled.displayName = 'AmauiIconMaterialDriveFileRenameOutlineW100Filled';

export default IconMaterialDriveFileRenameOutlineW100Filled;
