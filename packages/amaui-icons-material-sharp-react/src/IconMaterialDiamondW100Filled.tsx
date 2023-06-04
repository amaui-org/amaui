import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDiamondW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DiamondW100Filled'

      short_name='Diamond'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m8.975 8.65 2.5-5h1.05l2.5 5Zm2.675 10.9-8.5-10.2h8.5Zm.7 0V9.35h8.5Zm3.45-10.9-2.5-5h5.3l2.5 5Zm-12.9 0 2.5-5h5.3l-2.5 5Z"/>
    </Icon>
  );
});

IconMaterialDiamondW100Filled.displayName = 'AmauiIconMaterialDiamondW100Filled';

export default IconMaterialDiamondW100Filled;
