import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTextureMinusW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextureMinusW100Filled'

      short_name='TextureMinus'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-172q-7-3-12-8t-8-12l596-596q7 3 12 8t8 12L192-172Zm241 0 27-27v27h-27Zm141-100q-6 0-10-4t-4-10q0-6 4-10t10-4h240q6 0 10 4t4 10q0 6-4 10t-10 4H574ZM172-433v-40l315-315h40L172-433Zm489 33 127-127v40l-87 87h-40ZM172-714v-14q0-26 17-43t43-17h14l-74 74Z"/>
    </Icon>
  );
});

IconMaterialTextureMinusW100Filled.displayName = 'AmauiIconMaterialTextureMinusW100Filled';

export default IconMaterialTextureMinusW100Filled;
