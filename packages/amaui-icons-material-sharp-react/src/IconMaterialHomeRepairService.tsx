import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHomeRepairService = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeRepairService'

      short_name='HomeRepairService'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 20V8h5V4h10v4h5v12Zm2-2h16v-3h-2v1h-2v-1H8v1H6v-1H4Zm0-8v3h2v-1h2v1h8v-1h2v1h2v-3Zm5-2h6V6H9Z"/>
    </Icon>
  );
});

IconMaterialHomeRepairService.displayName = 'AmauiIconMaterialHomeRepairService';

export default IconMaterialHomeRepairService;
