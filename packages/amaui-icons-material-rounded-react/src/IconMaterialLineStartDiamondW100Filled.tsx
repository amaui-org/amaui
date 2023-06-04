import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLineStartDiamondW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineStartDiamondW100Filled'

      short_name='LineStartDiamond'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 16.1 4.9 12 9 7.9l3.75 3.75h7.85v.7h-7.85Z"/>
    </Icon>
  );
});

IconMaterialLineStartDiamondW100Filled.displayName = 'AmauiIconMaterialLineStartDiamondW100Filled';

export default IconMaterialLineStartDiamondW100Filled;
