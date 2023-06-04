import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMindfulnessW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MindfulnessW100Filled'

      short_name='Mindfulness'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M466 630h28V402h-28v228Zm120-60h28V442h-28v128Zm-240-20h28V442h-28v108Zm-54 374V780q-57-52-88.5-115.5T172 535.277q0-128.032 89.833-217.655Q351.667 228 480 228q103 0 187.5 63.5T777 455l47 189H708v200H548v80H292Z"/>
    </Icon>
  );
});

IconMaterialMindfulnessW100Filled.displayName = 'AmauiIconMaterialMindfulnessW100Filled';

export default IconMaterialMindfulnessW100Filled;
