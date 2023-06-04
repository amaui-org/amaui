import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWebAssetFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WebAssetFilled'

      short_name='WebAsset'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 20V4h20v16ZM4 8v10h16V8Z"/>
    </Icon>
  );
});

IconMaterialWebAssetFilled.displayName = 'AmauiIconMaterialWebAssetFilled';

export default IconMaterialWebAssetFilled;
