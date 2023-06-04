import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCarpenterW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CarpenterW100Filled'

      short_name='Carpenter'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m14.05 21.8-3.275-3.3 1.325-1.375-8.15-11.65L7 2.425 20.225 15.65Zm.025-1 5.15-5.15L16.9 13.3l-5.175 5.175Z"/>
    </Icon>
  );
});

IconMaterialCarpenterW100Filled.displayName = 'AmauiIconMaterialCarpenterW100Filled';

export default IconMaterialCarpenterW100Filled;
