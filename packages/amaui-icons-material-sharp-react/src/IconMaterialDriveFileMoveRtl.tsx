import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDriveFileMoveRtl = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DriveFileMoveRtl'

      short_name='DriveFileMoveRtl'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12.025 17.025 1.4-1.4L11.8 14H16v-2h-4.2l1.625-1.625-1.4-1.4L8 13ZM2 20V4h8l2 2h10v14Zm2-2h16V8h-8.825l-2-2H4Zm0 0V6v2Z"/>
    </Icon>
  );
});

IconMaterialDriveFileMoveRtl.displayName = 'AmauiIconMaterialDriveFileMoveRtl';

export default IconMaterialDriveFileMoveRtl;
