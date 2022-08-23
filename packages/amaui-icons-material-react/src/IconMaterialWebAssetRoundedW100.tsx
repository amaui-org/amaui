import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialWebAssetRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='WebAssetRoundedW100'
      short_name='WebAsset'

      {...props}
    >
      <path d="M19.2 18.7H4.8Q4.15 18.7 3.725 18.275Q3.3 17.85 3.3 17.2V6.8Q3.3 6.15 3.725 5.725Q4.15 5.3 4.8 5.3H19.2Q19.85 5.3 20.275 5.725Q20.7 6.15 20.7 6.8V17.2Q20.7 17.85 20.275 18.275Q19.85 18.7 19.2 18.7ZM4 8V17.2Q4 17.5 4.25 17.75Q4.5 18 4.8 18H19.2Q19.5 18 19.75 17.75Q20 17.5 20 17.2V8Z"/>
    </Icon>
  );
});

IconMaterialWebAssetRoundedW100.displayName = 'AmauiIconMaterialWebAssetRoundedW100';

export default IconMaterialWebAssetRoundedW100;
