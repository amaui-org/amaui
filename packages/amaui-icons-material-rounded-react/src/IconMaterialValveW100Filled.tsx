import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialValveW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ValveW100Filled'

      short_name='Valve'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11.65 7.5v-3h-4v-.7h8.7v.7h-4v3Zm-7 12.7v-6.7h.7v1h4.3v-4.3h-1v-.7h6.7v.7h-1v4.3h4.3v-1h.7v6.7h-.7v-1H5.35v1Z"/>
    </Icon>
  );
});

IconMaterialValveW100Filled.displayName = 'AmauiIconMaterialValveW100Filled';

export default IconMaterialValveW100Filled;
