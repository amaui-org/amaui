import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialUploadFileSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='UploadFileSharp'
      short_name='UploadFile'

      {...props}
    >
      <path d="M11 19H13V14.825L14.6 16.425L16 15L12 11L8 15L9.425 16.4L11 14.825ZM4 22V2H14L20 8V22ZM13 9V4H6V20H18V9ZM6 4V9V4V9V20Z"/>
    </Icon>
  );
});

IconMaterialUploadFileSharp.displayName = 'AmauiIconMaterialUploadFileSharp';

export default IconMaterialUploadFileSharp;
