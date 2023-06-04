import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBrandingWatermarkFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrandingWatermarkFilled'

      short_name='BrandingWatermark'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 17h9v-6h-9Zm-8 3V4h20v16Z"/>
    </Icon>
  );
});

IconMaterialBrandingWatermarkFilled.displayName = 'AmauiIconMaterialBrandingWatermarkFilled';

export default IconMaterialBrandingWatermarkFilled;
