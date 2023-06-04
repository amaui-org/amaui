import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAllMatchW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AllMatchW100Filled'

      short_name='AllMatch'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m696 884 106-104-20-20-86 85-38-39-20 20 58 58Zm24 86q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105t-105 43ZM200 804l146-228-146-228h399l161 228q-10-1-20.5-1.5T720 574q-98 0-169 66t-78 164H200Z"/>
    </Icon>
  );
});

IconMaterialAllMatchW100Filled.displayName = 'AmauiIconMaterialAllMatchW100Filled';

export default IconMaterialAllMatchW100Filled;
