import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFenceW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FenceW100Filled'

      short_name='Fence'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.65 19.35v-4h-.7v-.7h.7v-3.3h-.7v-.7h.7V7.275L8 4.925l2 2 2.025-2 2 2 2-2 2.35 2.35v3.375h.675v.7h-.675v3.3h.675v.7h-.675v4Zm.7-8.7h3.3v-3.1L8 5.9 6.35 7.55Zm4 0h3.3v-3.1L12 5.9l-1.65 1.65Zm4.025 0h3.275v-3.1L16 5.9l-1.625 1.65Zm-8.025 4h3.3v-3.3h-3.3Zm4 0h3.3v-3.3h-3.3Zm4.025 0h3.275v-3.3h-3.275Zm-8.025 4h3.3v-3.3h-3.3Zm4 0h3.3v-3.3h-3.3Zm4.025 0h3.275v-3.3h-3.275Z"/>
    </Icon>
  );
});

IconMaterialFenceW100Filled.displayName = 'AmauiIconMaterialFenceW100Filled';

export default IconMaterialFenceW100Filled;
