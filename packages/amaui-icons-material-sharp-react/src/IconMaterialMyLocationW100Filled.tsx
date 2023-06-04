import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMyLocationW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MyLocationW100Filled'

      short_name='MyLocation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 21v-1.3q-3.125-.275-5.1-2.25-1.975-1.975-2.25-5.1H3v-.7h1.3q.275-3.125 2.25-5.1 1.975-1.975 5.1-2.25V3h.7v1.3q3.125.275 5.1 2.25 1.975 1.975 2.25 5.1H21v.7h-1.3q-.275 3.125-2.25 5.1-1.975 1.975-5.1 2.25V21Zm.35-2q2.9 0 4.95-2.05Q19 14.9 19 12q0-2.9-2.05-4.95Q14.9 5 12 5 9.1 5 7.05 7.05 5 9.1 5 12q0 2.9 2.05 4.95Q9.1 19 12 19Zm0-4.3q-1.125 0-1.912-.788Q9.3 13.125 9.3 12t.788-1.913Q10.875 9.3 12 9.3t1.913.787q.787.788.787 1.913t-.787 1.912q-.788.788-1.913.788Z"/>
    </Icon>
  );
});

IconMaterialMyLocationW100Filled.displayName = 'AmauiIconMaterialMyLocationW100Filled';

export default IconMaterialMyLocationW100Filled;
