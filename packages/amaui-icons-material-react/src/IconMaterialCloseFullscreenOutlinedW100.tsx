import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCloseFullscreenOutlinedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloseFullscreenOutlinedW100'
      short_name='CloseFullscreen'

      {...props}
    >
      <path d="M12 12V5.3H12.7V10.825L19.95 3.575L20.425 4.05L13.175 11.3H18.7V12ZM4.05 20.425 3.575 19.95 10.825 12.7H5.3V12H12V18.7H11.3V13.175Z"/>
    </Icon>
  )
});

export default IconMaterialCloseFullscreenOutlinedW100;
