import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLayers = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Layers'

      short_name='Layers'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m12 21.05-9-7 1.65-1.25L12 18.5l7.35-5.7L21 14.05ZM12 16 3 9l9-7 9 7Zm0-7Zm0 4.45L17.75 9 12 4.55 6.25 9Z"/>
    </Icon>
  );
});

IconMaterialLayers.displayName = 'AmauiIconMaterialLayers';

export default IconMaterialLayers;
