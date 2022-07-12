import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialUploadSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='UploadSharpW700'
      short_name='Upload'

      {...props}
    >
      <path d="M10.425 15.3V7.65L8.025 10.075L5.8 7.85L12 1.65L18.2 7.85L15.975 10.075L13.575 7.65V15.3ZM2.35 21.6V13.925H5.5V18.45H18.45V13.925H21.6V21.6Z"/>
    </Icon>
  )
});

export default IconMaterialUploadSharpW700;
