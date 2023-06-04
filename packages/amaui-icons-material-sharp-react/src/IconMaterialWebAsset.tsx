import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWebAsset = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WebAsset'

      short_name='WebAsset'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 20V4h20v16ZM4 8v10h16V8Z"/>
    </Icon>
  );
});

IconMaterialWebAsset.displayName = 'AmauiIconMaterialWebAsset';

export default IconMaterialWebAsset;
