import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWebAssetSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WebAssetSharpW100'
      short_name='WebAsset'

      {...props}
    >
      <path d="M3.3 18.7V5.3H20.7V18.7ZM4 8V18H20V8Z"/>
    </Icon>
  );
});

IconMaterialWebAssetSharpW100.displayName = 'AmauiIconMaterialWebAssetSharpW100';

export default IconMaterialWebAssetSharpW100;
