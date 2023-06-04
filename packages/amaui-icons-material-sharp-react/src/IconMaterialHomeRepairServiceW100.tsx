import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHomeRepairServiceW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeRepairServiceW100'

      short_name='HomeRepairService'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3.3 18.7V9.3h4.35V6.05h8.7V9.3h4.35v9.4ZM4 18h16v-3.65h-2.65v1h-.7v-1h-9.3v1h-.7v-1H4Zm0-8v3.65h2.65v-1h.7v1h9.3v-1h.7v1H20V10Zm4.35-.7h7.3V6.75h-7.3Z"/>
    </Icon>
  );
});

IconMaterialHomeRepairServiceW100.displayName = 'AmauiIconMaterialHomeRepairServiceW100';

export default IconMaterialHomeRepairServiceW100;
