import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAspectRatioSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AspectRatioSharpW100Filled'
      short_name='AspectRatio'

      {...props}
    >
      <path d="M5.65 11.35H6.35V8.35H9.35V7.65H5.65ZM14.65 16.35H18.35V12.65H17.65V15.65H14.65ZM20.7 18.7H3.3V5.3H20.7Z"/>
    </Icon>
  );
});

IconMaterialAspectRatioSharpW100Filled.displayName = 'AmauiIconMaterialAspectRatioSharpW100Filled';

export default IconMaterialAspectRatioSharpW100Filled;
