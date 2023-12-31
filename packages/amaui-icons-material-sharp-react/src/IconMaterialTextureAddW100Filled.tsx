import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTextureAddW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextureAddW100Filled'

      short_name='TextureAdd'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-172h-20v-20l596-596h20v20L192-172Zm-20-261v-40l315-315h40L172-433Zm0-281v-74h74l-74 74Zm616 187v40l-3 3-14-6q-7-3-15-5l32-32ZM433-172l56-56q2 8 5 15l6 14-27 27h-40Zm247-104H560v-28h120v-120h28v120h120v28H708v120h-28v-120Z"/>
    </Icon>
  );
});

IconMaterialTextureAddW100Filled.displayName = 'AmauiIconMaterialTextureAddW100Filled';

export default IconMaterialTextureAddW100Filled;
