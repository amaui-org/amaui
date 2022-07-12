import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBrandingWatermarkSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrandingWatermarkSharpW700'
      short_name='BrandingWatermark'

      {...props}
    >
      <path d="M10 16.7H18.7V10.7H10ZM1.15 20.85V3.15H22.85V20.85ZM4.3 17.7H19.7V6.3H4.3ZM4.3 6.3V17.7Z"/>
    </Icon>
  )
});

export default IconMaterialBrandingWatermarkSharpW700;
