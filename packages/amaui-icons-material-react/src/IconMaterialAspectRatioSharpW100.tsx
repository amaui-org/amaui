import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAspectRatioSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AspectRatioSharpW100'
      short_name='AspectRatio'

      {...props}
    >
      <path d="M5.65 11.35H6.35V8.35H9.35V7.65H5.65ZM14.65 16.35H18.35V12.65H17.65V15.65H14.65ZM20.7 18.7H3.3V5.3H20.7ZM4 18V6ZM4 18H20V6H4Z"/>
    </Icon>
  );
});

export default IconMaterialAspectRatioSharpW100;
