import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAllOutW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AllOutW100Filled'

      short_name='AllOut'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 19.7v-3.05H5V19h2.35v.7Zm12.35 0V19H19v-2.35h.7v3.05Zm-4.65-2q-2.375 0-4.037-1.662Q6.3 14.375 6.3 12t1.663-4.037Q9.625 6.3 12 6.3t4.038 1.663Q17.7 9.625 17.7 12t-1.662 4.038Q14.375 17.7 12 17.7ZM4.3 7.35V4.3h3.05V5H5v2.35Zm14.7 0V5h-2.35v-.7h3.05v3.05Z"/>
    </Icon>
  );
});

IconMaterialAllOutW100Filled.displayName = 'AmauiIconMaterialAllOutW100Filled';

export default IconMaterialAllOutW100Filled;
