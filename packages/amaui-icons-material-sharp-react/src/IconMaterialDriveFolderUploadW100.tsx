import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDriveFolderUploadW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DriveFolderUploadW100'

      short_name='DriveFolderUpload'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 16h.7v-4.85l2.275 2.275.5-.5L12 9.8l-3.075 3.075.5.5 2.225-2.225ZM3.3 18.7V6.3H11l1 1h8.7v11.4ZM4 18h16V8h-8.275l-1-1H4Zm0 0V7v1Z"/>
    </Icon>
  );
});

IconMaterialDriveFolderUploadW100.displayName = 'AmauiIconMaterialDriveFolderUploadW100';

export default IconMaterialDriveFolderUploadW100;
