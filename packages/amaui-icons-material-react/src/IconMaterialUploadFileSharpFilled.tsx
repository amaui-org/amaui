import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialUploadFileSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='UploadFileSharpFilled'
      short_name='UploadFile'

      {...props}
    >
      <path d="M11 19H13V14.825L14.6 16.425L16 15L12 11L8 15L9.425 16.4L11 14.825ZM4 22V2H14L20 8V22ZM13 9H18L13 4Z"/>
    </Icon>
  )
});

export default IconMaterialUploadFileSharpFilled;
