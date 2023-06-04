import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHardwareW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HardwareW100Filled'

      short_name='Hardware'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m16.9 10.7-2.85-2.85v3.8h-3.4V6.7H5.9q.375-1.1 1.325-1.75.95-.65 2.125-.65h4.7v2.85L16.9 4.3h.7v6.4Zm-6.25 9v-7.35h3.4v7.35Z"/>
    </Icon>
  );
});

IconMaterialHardwareW100Filled.displayName = 'AmauiIconMaterialHardwareW100Filled';

export default IconMaterialHardwareW100Filled;
