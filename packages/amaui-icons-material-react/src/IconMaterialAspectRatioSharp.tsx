import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAspectRatioSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AspectRatioSharp'
      short_name='AspectRatio'

      {...props}
    >
      <path d="M5 12H7V9H10V7H5ZM14 17H19V12H17V15H14ZM22 20H2V4H22ZM4 18V6ZM4 18H20V6H4Z"/>
    </Icon>
  );
});

export default IconMaterialAspectRatioSharp;
