import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocationSearchingW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocationSearchingW100Filled'

      short_name='LocationSearching'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 21.05v-1.3q-3.125-.275-5.1-2.25-1.975-1.975-2.25-5.1H3v-.7h1.3q.275-3.125 2.25-5.1 1.975-1.975 5.1-2.25v-1.3h.7v1.3q3.125.275 5.1 2.25 1.975 1.975 2.25 5.1H21v.7h-1.3q-.275 3.125-2.25 5.1-1.975 1.975-5.1 2.25v1.3Zm.35-2q2.9 0 4.95-2.05Q19 14.95 19 12.05q0-2.9-2.05-4.95Q14.9 5.05 12 5.05q-2.9 0-4.95 2.05Q5 9.15 5 12.05q0 2.9 2.05 4.95Q9.1 19.05 12 19.05Z"/>
    </Icon>
  );
});

IconMaterialLocationSearchingW100Filled.displayName = 'AmauiIconMaterialLocationSearchingW100Filled';

export default IconMaterialLocationSearchingW100Filled;
