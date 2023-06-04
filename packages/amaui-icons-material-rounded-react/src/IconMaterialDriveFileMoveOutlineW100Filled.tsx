import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDriveFileMoveOutlineW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DriveFileMoveOutlineW100Filled'

      short_name='DriveFileMoveOutline'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m13.75 13.35-2 2q-.125.125-.125.25t.125.25q.125.125.25.125t.25-.125l2.325-2.325Q14.8 13.3 14.8 13q0-.3-.225-.525L12.25 10.15q-.125-.125-.25-.125t-.25.125q-.125.125-.125.25t.125.25l2 2h-4.5q-.15 0-.25.1t-.1.25q0 .15.1.25t.25.1ZM4.8 18.7q-.65 0-1.075-.425Q3.3 17.85 3.3 17.2V7.8q0-.65.425-1.075Q4.15 6.3 4.8 6.3h5.575q.3 0 .575.112.275.113.5.338l.55.55h7.2q.65 0 1.075.425.425.425.425 1.075v8.4q0 .65-.425 1.075-.425.425-1.075.425Z"/>
    </Icon>
  );
});

IconMaterialDriveFileMoveOutlineW100Filled.displayName = 'AmauiIconMaterialDriveFileMoveOutlineW100Filled';

export default IconMaterialDriveFileMoveOutlineW100Filled;
