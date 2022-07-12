import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAspectRatioSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AspectRatioSharpFilled'
      short_name='AspectRatio'

      {...props}
    >
      <path d="M5 12H7V9H10V7H5ZM14 17H19V12H17V15H14ZM22 20H2V4H22Z"/>
    </Icon>
  )
});

export default IconMaterialAspectRatioSharpFilled;
