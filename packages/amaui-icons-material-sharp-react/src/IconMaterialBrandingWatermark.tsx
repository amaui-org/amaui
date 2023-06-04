import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBrandingWatermark = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrandingWatermark'

      short_name='BrandingWatermark'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 17h9v-6h-9Zm-8 3V4h20v16Zm2-2h16V6H4ZM4 6v12Z"/>
    </Icon>
  );
});

IconMaterialBrandingWatermark.displayName = 'AmauiIconMaterialBrandingWatermark';

export default IconMaterialBrandingWatermark;
