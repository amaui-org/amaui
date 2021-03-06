import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWebAssetTwoTone = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WebAssetTwoTone'
      short_name='WebAsset'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M5 8h14v10H5z" opacity=".3"/><path d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm0 14H5V8h14v10z"/>
    </Icon>
  );
});

export default IconMaterialWebAssetTwoTone;
