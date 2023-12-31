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
      <path d="M192-172q-7-3-12-8t-8-12l596-596q7 3 12 8t8 12L192-172Zm-20-261v-40l315-315h40L172-433Zm0-281v-14q0-26 17-43t43-17h14l-74 74Zm616 187v40l-3 3-14-6q-7-3-15-5l32-32ZM433-172l56-56q2 8 5 15l6 14-27 27h-40Zm247-104H574q-6 0-10-4t-4-10q0-6 4-10t10-4h106v-106q0-6 4-10t10-4q6 0 10 4t4 10v106h106q6 0 10 4t4 10q0 6-4 10t-10 4H708v106q0 6-4 10t-10 4q-6 0-10-4t-4-10v-106Z"/>
    </Icon>
  );
});

IconMaterialTextureAddW100Filled.displayName = 'AmauiIconMaterialTextureAddW100Filled';

export default IconMaterialTextureAddW100Filled;
