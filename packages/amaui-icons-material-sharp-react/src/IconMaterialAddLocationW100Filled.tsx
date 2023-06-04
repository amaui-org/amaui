import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddLocationW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddLocationW100Filled'

      short_name='AddLocation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 13.35h.7v-3h3v-.7h-3v-3h-.7v3h-3v.7h3ZM12 21.5q-3.725-3.35-5.537-6.213Q4.65 12.425 4.65 10.2q0-3.45 2.225-5.5T12 2.65q2.9 0 5.125 2.05t2.225 5.5q0 2.225-1.812 5.087Q15.725 18.15 12 21.5Z"/>
    </Icon>
  );
});

IconMaterialAddLocationW100Filled.displayName = 'AmauiIconMaterialAddLocationW100Filled';

export default IconMaterialAddLocationW100Filled;
