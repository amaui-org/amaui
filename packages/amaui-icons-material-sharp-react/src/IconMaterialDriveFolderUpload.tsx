import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDriveFolderUpload = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DriveFolderUpload'

      short_name='DriveFolderUpload'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 17h2v-4.2l1.6 1.6L16 13l-4-4-4 4 1.4 1.4 1.6-1.6Zm-9 3V4h8l2 2h10v14Zm2-2h16V8h-8.825l-2-2H4Zm0 0V6v2Z"/>
    </Icon>
  );
});

IconMaterialDriveFolderUpload.displayName = 'AmauiIconMaterialDriveFolderUpload';

export default IconMaterialDriveFolderUpload;
