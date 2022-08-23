import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBrandingWatermarkSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrandingWatermarkSharp'
      short_name='BrandingWatermark'

      {...props}
    >
      <path d="M10 17H19V11H10ZM2 20V4H22V20ZM4 18H20V6H4ZM4 6V18Z"/>
    </Icon>
  );
});

IconMaterialBrandingWatermarkSharp.displayName = 'AmauiIconMaterialBrandingWatermarkSharp';

export default IconMaterialBrandingWatermarkSharp;
