import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLineEndDiamondW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineEndDiamondW100Filled'

      short_name='LineEndDiamond'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m15 16.1-3.75-3.75H3.4v-.7h7.85L15 7.9l4.1 4.1Z"/>
    </Icon>
  );
});

IconMaterialLineEndDiamondW100Filled.displayName = 'AmauiIconMaterialLineEndDiamondW100Filled';

export default IconMaterialLineEndDiamondW100Filled;
