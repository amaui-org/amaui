import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDriveFileMoveRtlW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DriveFileMoveRtlW100Filled'

      short_name='DriveFileMoveRtl'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 16.1.5-.5-2.25-2.25h4.85v-.7h-4.85l2.25-2.25-.5-.5L8.9 13Zm-8.7 2.6V6.3H11l1 1h8.7v11.4Z"/>
    </Icon>
  );
});

IconMaterialDriveFileMoveRtlW100Filled.displayName = 'AmauiIconMaterialDriveFileMoveRtlW100Filled';

export default IconMaterialDriveFileMoveRtlW100Filled;
