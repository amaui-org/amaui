import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialUploadSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='UploadSharpW100Filled'
      short_name='Upload'

      {...props}
    >
      <path d="M11.65 15V6.2L9.4 8.45L8.9 7.95L12 4.85L15.1 7.95L14.6 8.45L12.35 6.2V15ZM5.3 18.7V15H6V18H18V15H18.7V18.7Z"/>
    </Icon>
  );
});

IconMaterialUploadSharpW100Filled.displayName = 'AmauiIconMaterialUploadSharpW100Filled';

export default IconMaterialUploadSharpW100Filled;
