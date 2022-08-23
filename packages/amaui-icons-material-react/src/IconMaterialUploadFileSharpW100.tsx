import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialUploadFileSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='UploadFileSharpW100'
      short_name='UploadFile'

      {...props}
    >
      <path d="M11.65 17.4H12.35V12.55L14.6 14.8L15.1 14.3L12 11.2L8.9 14.3L9.4 14.8L11.65 12.55ZM5.3 20.7V3.3H14.65L18.7 7.35V20.7ZM14.3 7.7V4H6V20H18V7.7ZM6 4V7.7V4V7.7V20Z"/>
    </Icon>
  );
});

IconMaterialUploadFileSharpW100.displayName = 'AmauiIconMaterialUploadFileSharpW100';

export default IconMaterialUploadFileSharpW100;
