import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMemoryAltW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MemoryAltW100Filled'

      short_name='MemoryAlt'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M266 670h28V482h-28v188Zm200 0h28V482h-28v188Zm200 0h28V482h-28v188ZM226 884v-80h-94V348h94v-80h28v80h212v-80h28v80h212v-80h28v80h94v456h-94v80h-28v-80H494v80h-28v-80H254v80h-28Z"/>
    </Icon>
  );
});

IconMaterialMemoryAltW100Filled.displayName = 'AmauiIconMaterialMemoryAltW100Filled';

export default IconMaterialMemoryAltW100Filled;
