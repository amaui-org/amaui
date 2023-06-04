import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBrandingWatermarkW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrandingWatermarkW100Filled'

      short_name='BrandingWatermark'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.65 16.35h7.7v-5.6h-7.7ZM3.3 18.7V5.3h17.4v13.4Z"/>
    </Icon>
  );
});

IconMaterialBrandingWatermarkW100Filled.displayName = 'AmauiIconMaterialBrandingWatermarkW100Filled';

export default IconMaterialBrandingWatermarkW100Filled;
