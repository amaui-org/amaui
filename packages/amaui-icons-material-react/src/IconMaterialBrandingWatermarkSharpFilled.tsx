import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBrandingWatermarkSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrandingWatermarkSharpFilled'
      short_name='BrandingWatermark'

      {...props}
    >
      <path d="M10 17H19V11H10ZM2 20V4H22V20Z"/>
    </Icon>
  )
});

export default IconMaterialBrandingWatermarkSharpFilled;
