import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLineStartDiamondW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LineStartDiamondW100'

      short_name='LineStartDiamond'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m9 15.1 3.1-3.1L9 8.9 5.9 12Zm0 1L4.9 12 9 7.9l3.75 3.75h7.85v.7h-7.85ZM9 12Z"/>
    </Icon>
  );
});

IconMaterialLineStartDiamondW100.displayName = 'AmauiIconMaterialLineStartDiamondW100';

export default IconMaterialLineStartDiamondW100;
