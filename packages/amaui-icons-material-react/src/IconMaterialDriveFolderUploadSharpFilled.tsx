import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDriveFolderUploadSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DriveFolderUploadSharpFilled'
      short_name='DriveFolderUpload'

      {...props}
    >
      <path d="M2 4H10L12 6H22V20H2ZM11 17H13V13H16L12 9L8 13H11Z"/>
    </Icon>
  );
});

IconMaterialDriveFolderUploadSharpFilled.displayName = 'AmauiIconMaterialDriveFolderUploadSharpFilled';

export default IconMaterialDriveFolderUploadSharpFilled;
