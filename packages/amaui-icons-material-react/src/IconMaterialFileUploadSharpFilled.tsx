import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFileUploadSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileUploadSharpFilled'
      short_name='FileUpload'

      {...props}
    >
      <path d="M11 16V7.85L8.4 10.45L7 9L12 4L17 9L15.6 10.45L13 7.85V16ZM4 20V15H6V18H18V15H20V20Z"/>
    </Icon>
  );
});

IconMaterialFileUploadSharpFilled.displayName = 'AmauiIconMaterialFileUploadSharpFilled';

export default IconMaterialFileUploadSharpFilled;
