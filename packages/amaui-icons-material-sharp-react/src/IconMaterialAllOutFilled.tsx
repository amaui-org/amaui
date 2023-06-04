import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAllOutFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AllOutFilled'

      short_name='AllOut'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21v-5h2v3h3v2Zm13 0v-2h3v-3h2v5Zm-4-2q-2.9 0-4.95-2.05Q5 14.9 5 12q0-2.9 2.05-4.95Q9.1 5 12 5q2.9 0 4.95 2.05Q19 9.1 19 12q0 2.9-2.05 4.95Q14.9 19 12 19ZM3 8V3h5v2H5v3Zm16 0V5h-3V3h5v5Z"/>
    </Icon>
  );
});

IconMaterialAllOutFilled.displayName = 'AmauiIconMaterialAllOutFilled';

export default IconMaterialAllOutFilled;
