import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHomeRepairServiceW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeRepairServiceW100Filled'

      short_name='HomeRepairService'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 13.65V9.3h4.35V6.05h8.7V9.3h4.35v4.35h-3.35v-1h-.7v1h-9.3v-1h-.7v1ZM8.35 9.3h7.3V6.75h-7.3ZM3.3 18.7v-4.35h3.35v1h.7v-1h9.3v1h.7v-1h3.35v4.35Z"/>
    </Icon>
  );
});

IconMaterialHomeRepairServiceW100Filled.displayName = 'AmauiIconMaterialHomeRepairServiceW100Filled';

export default IconMaterialHomeRepairServiceW100Filled;
