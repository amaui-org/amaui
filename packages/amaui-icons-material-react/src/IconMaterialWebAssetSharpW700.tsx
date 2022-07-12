import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWebAssetSharpW700 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WebAssetSharpW700'
      short_name='WebAsset'

      {...props}
    >
      <path d="M1.15 20.85V3.15H22.85V20.85ZM4.3 8.85V17.7H19.7V8.85Z"/>
    </Icon>
  )
});

export default IconMaterialWebAssetSharpW700;
