import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAllOut = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AllOut'

      short_name='AllOut'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21v-5h2v3h3v2Zm13 0v-2h3v-3h2v5Zm-4-2q-2.9 0-4.95-2.05Q5 14.9 5 12q0-2.9 2.05-4.95Q9.1 5 12 5q2.9 0 4.95 2.05Q19 9.1 19 12q0 2.9-2.05 4.95Q14.9 19 12 19Zm0-2q2.075 0 3.538-1.463Q17 14.075 17 12t-1.462-3.538Q14.075 7 12 7 9.925 7 8.463 8.462 7 9.925 7 12q0 2.075 1.463 3.537Q9.925 17 12 17ZM3 8V3h5v2H5v3Zm16 0V5h-3V3h5v5Zm-7 4Z"/>
    </Icon>
  );
});

IconMaterialAllOut.displayName = 'AmauiIconMaterialAllOut';

export default IconMaterialAllOut;
