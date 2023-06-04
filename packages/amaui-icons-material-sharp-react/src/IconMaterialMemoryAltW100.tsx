import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMemoryAltW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MemoryAltW100'

      short_name='MemoryAlt'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M266 670h28V482h-28v188Zm200 0h28V482h-28v188Zm200 0h28V482h-28v188ZM160 776h640V376H160v400Zm0 0V376v400Zm66 108v-80h-94V348h94v-80h28v80h212v-80h28v80h212v-80h28v80h94v456h-94v80h-28v-80H494v80h-28v-80H254v80h-28Z"/>
    </Icon>
  );
});

IconMaterialMemoryAltW100.displayName = 'AmauiIconMaterialMemoryAltW100';

export default IconMaterialMemoryAltW100;
