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
      <path d="M5.025 19.475q-.175-.075-.3-.2t-.2-.3l14.45-14.45q.175.075.3.2t.2.3Zm-.725-6.3v-1L12.175 4.3h1Zm0-7.025V5.8q0-.65.425-1.075Q5.15 4.3 5.8 4.3h.35ZM17.85 19.7l1.85-1.85v.35q0 .65-.425 1.075-.425.425-1.075.425Zm-7.025 0 8.875-8.875v1L11.825 19.7Z"/>
    </Icon>
  );
});

IconMaterialTextureW100Filled.displayName = 'AmauiIconMaterialTextureW100Filled';

export default IconMaterialTextureW100Filled;
