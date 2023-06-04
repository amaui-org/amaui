import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCloudW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloudW100Filled'

      short_name='Cloud'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.5 18.7q-1.75 0-2.975-1.225T2.3 14.5q0-1.65 1.175-2.925T6.35 10.3q.25-2.15 1.863-3.575Q9.825 5.3 12 5.3q2.375 0 4.038 1.663Q17.7 8.625 17.7 11v1.3h.8q1.35 0 2.275.925.925.925.925 2.275 0 1.35-.925 2.275-.925.925-2.275.925Z"/>
    </Icon>
  );
});

IconMaterialCloudW100Filled.displayName = 'AmauiIconMaterialCloudW100Filled';

export default IconMaterialCloudW100Filled;
