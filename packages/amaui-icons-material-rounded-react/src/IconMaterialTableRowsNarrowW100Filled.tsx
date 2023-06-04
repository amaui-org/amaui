import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTableRowsNarrowW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableRowsNarrowW100Filled'

      short_name='TableRowsNarrow'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M202 723q-12.75 0-21.375-8.625T172 693v-73q0-12.75 8.625-21.375T202 590h556q12.75 0 21.375 8.625T788 620v73q0 12.75-8.625 21.375T758 723H202Zm0-161q-12.75 0-21.375-8.625T172 532v-73q0-12.75 8.625-21.375T202 429h556q12.75 0 21.375 8.625T788 459v73q0 12.75-8.625 21.375T758 562H202Zm0-161q-12.75 0-21.375-8.625T172 371v-73q0-12.75 8.625-21.375T202 268h556q12.75 0 21.375 8.625T788 298v73q0 12.75-8.625 21.375T758 401H202Zm0 483q-12.75 0-21.375-8.625T172 854v-73q0-12.75 8.625-21.375T202 751h556q12.75 0 21.375 8.625T788 781v73q0 12.75-8.625 21.375T758 884H202Z"/>
    </Icon>
  );
});

IconMaterialTableRowsNarrowW100Filled.displayName = 'AmauiIconMaterialTableRowsNarrowW100Filled';

export default IconMaterialTableRowsNarrowW100Filled;
