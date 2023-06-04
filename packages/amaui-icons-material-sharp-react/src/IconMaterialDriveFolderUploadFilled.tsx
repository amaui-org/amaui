import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDriveFolderUploadFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DriveFolderUploadFilled'

      short_name='DriveFolderUpload'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 4h8l2 2h10v14H2Zm9 13h2v-4h3l-4-4-4 4h3Z"/>
    </Icon>
  );
});

IconMaterialDriveFolderUploadFilled.displayName = 'AmauiIconMaterialDriveFolderUploadFilled';

export default IconMaterialDriveFolderUploadFilled;
