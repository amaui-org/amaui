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
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M5 8h14v10H5z" opacity=".3"/><path d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm0 14H5V8h14v10z"/>
    </Icon>
  );
});

IconMaterialWebAsset.displayName = 'AmauiIconMaterialWebAsset';

export default IconMaterialWebAsset;
