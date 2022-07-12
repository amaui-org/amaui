import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFlashOnOutlinedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlashOnOutlinedW100'
      short_name='FlashOn'

      {...props}
    >
      <path d="M10.275 21.9V14H7.625V3.5H16.375L12.875 11.35H16.375Z"/>
    </Icon>
  )
});

export default IconMaterialFlashOnOutlinedW100;
