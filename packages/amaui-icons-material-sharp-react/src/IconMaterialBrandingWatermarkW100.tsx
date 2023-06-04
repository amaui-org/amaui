import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBrandingWatermarkW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrandingWatermarkW100'

      short_name='BrandingWatermark'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10.65 16.35h7.7v-5.6h-7.7ZM3.3 18.7V5.3h17.4v13.4ZM4 18h16V6H4ZM4 6v12Z"/>
    </Icon>
  );
});

IconMaterialBrandingWatermarkW100.displayName = 'AmauiIconMaterialBrandingWatermarkW100';

export default IconMaterialBrandingWatermarkW100;
