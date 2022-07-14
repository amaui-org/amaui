import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDriveFolderUploadSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DriveFolderUploadSharp'
      short_name='DriveFolderUpload'

      {...props}
    >
      <path d="M11 17H13V12.8L14.6 14.4L16 13L12 9L8 13L9.4 14.4L11 12.8ZM2 20V4H10L12 6H22V20ZM4 18H20V8H11.175L9.175 6H4ZM4 18V6V8Z"/>
    </Icon>
  );
});

export default IconMaterialDriveFolderUploadSharp;
