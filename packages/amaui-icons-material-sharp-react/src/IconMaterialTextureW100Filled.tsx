import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTextureW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextureW100Filled'

      short_name='Texture'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.525 19.475v-.5l14.45-14.45h.5v.5l-14.45 14.45Zm-.225-6.3v-1L12.175 4.3h1Zm0-7.025V4.3h1.85ZM17.85 19.7l1.85-1.85v1.85Zm-7.025 0 8.875-8.875v1L11.825 19.7Z"/>
    </Icon>
  );
});

IconMaterialTextureW100Filled.displayName = 'AmauiIconMaterialTextureW100Filled';

export default IconMaterialTextureW100Filled;
