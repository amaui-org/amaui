import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBackupTableSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BackupTableSharp'
      short_name='BackupTable'

      {...props}
    >
      <path d="M8 16H13V11H8ZM8 9H20V4H8ZM15 16H20V11H15ZM6 18V2H22V18ZM2 22V6H4V20H18V22Z"/>
    </Icon>
  );
});

export default IconMaterialBackupTableSharp;
