import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWebAssetSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WebAssetSharp'
      short_name='WebAsset'

      {...props}
    >
      <path d="M2 20V4H22V20ZM4 8V18H20V8Z"/>
    </Icon>
  )
});

export default IconMaterialWebAssetSharp;
