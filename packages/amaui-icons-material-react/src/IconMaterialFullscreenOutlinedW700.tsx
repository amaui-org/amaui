import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFullscreenOutlinedW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FullscreenOutlinedW700'
      short_name='Fullscreen'

      {...props}
    >
      <path d="M4.05 19.95V13.425H7.2V16.8H10.575V19.95ZM4.05 10.575V4.05H10.575V7.2H7.2V10.575ZM13.425 19.95V16.8H16.8V13.425H19.95V19.95ZM16.8 10.575V7.2H13.425V4.05H19.95V10.575Z"/>
    </Icon>
  )
});

export default IconMaterialFullscreenOutlinedW700;
