import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDriveFileRenameOutline = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DriveFileRenameOutline'

      short_name='DriveFileRenameOutline'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m10 21 4-4h8v4Zm-6-2h1.4l8.625-8.625-1.4-1.4L4 17.6ZM18.3 8.925l-4.25-4.2L16.875 1.9 21.1 6.125ZM2 21v-4.25l10.6-10.6 4.25 4.25L6.25 21ZM13.325 9.675l-.7-.7 1.4 1.4Z"/>
    </Icon>
  );
});

IconMaterialDriveFileRenameOutline.displayName = 'AmauiIconMaterialDriveFileRenameOutline';

export default IconMaterialDriveFileRenameOutline;
