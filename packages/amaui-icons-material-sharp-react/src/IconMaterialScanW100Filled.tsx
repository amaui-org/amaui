import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScanW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScanW100Filled'

      short_name='Scan'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M572 404h148L572 256v148ZM212 924V750h536v174H212ZM70 670v-28h820v28H70Zm142-108V228h374l162 162v172H212Z"/>
    </Icon>
  );
});

IconMaterialScanW100Filled.displayName = 'AmauiIconMaterialScanW100Filled';

export default IconMaterialScanW100Filled;
