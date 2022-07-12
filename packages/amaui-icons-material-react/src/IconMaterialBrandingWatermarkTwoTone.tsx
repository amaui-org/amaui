import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialBrandingWatermarkTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='BrandingWatermarkTwoTone'
      short_name='BrandingWatermark'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 19h18V5H3v14zm8-7h9v6h-9v-6z" opacity=".3"/><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zm-10-7h9v6h-9z"/>
    </Icon>
  )
});

export default IconMaterialBrandingWatermarkTwoTone;
