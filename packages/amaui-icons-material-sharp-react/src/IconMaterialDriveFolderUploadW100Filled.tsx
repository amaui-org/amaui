import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDriveFolderUploadW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DriveFolderUploadW100Filled'

      short_name='DriveFolderUpload'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 6.3H11l1 1h8.7v11.4H3.3Zm8.35 9.7h.7v-3.9h1.95L12 9.8l-2.3 2.3h1.95Z"/>
    </Icon>
  );
});

IconMaterialDriveFolderUploadW100Filled.displayName = 'AmauiIconMaterialDriveFolderUploadW100Filled';

export default IconMaterialDriveFolderUploadW100Filled;
