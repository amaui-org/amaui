import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWebAssetW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WebAssetW100Filled'

      short_name='WebAsset'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 18.7V5.3h17.4v13.4ZM4 8v10h16V8Z"/>
    </Icon>
  );
});

IconMaterialWebAssetW100Filled.displayName = 'AmauiIconMaterialWebAssetW100Filled';

export default IconMaterialWebAssetW100Filled;
