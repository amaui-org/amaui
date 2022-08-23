import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialVignetteSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='VignetteSharp'
      short_name='Vignette'

      {...props}
    >
      <path d="M12 16Q14.45 16 16.225 14.812Q18 13.625 18 12Q18 10.375 16.225 9.188Q14.45 8 12 8Q9.55 8 7.775 9.188Q6 10.375 6 12Q6 13.625 7.775 14.812Q9.55 16 12 16ZM2 20V4H22V20ZM4 18H20V6H4ZM4 18V6V18Z"/>
    </Icon>
  );
});

IconMaterialVignetteSharp.displayName = 'AmauiIconMaterialVignetteSharp';

export default IconMaterialVignetteSharp;
