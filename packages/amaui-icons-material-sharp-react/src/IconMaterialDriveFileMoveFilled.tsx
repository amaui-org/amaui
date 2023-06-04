import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDriveFileMoveFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DriveFileMoveFilled'

      short_name='DriveFileMove'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.975 17.025 16 13l-4.025-4.025-1.4 1.4L12.2 12H8v2h4.2l-1.625 1.625ZM2 20V4h8l2 2h10v14Z"/>
    </Icon>
  );
});

IconMaterialDriveFileMoveFilled.displayName = 'AmauiIconMaterialDriveFileMoveFilled';

export default IconMaterialDriveFileMoveFilled;
