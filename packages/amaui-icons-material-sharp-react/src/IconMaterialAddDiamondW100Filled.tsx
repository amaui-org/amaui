import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddDiamondW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddDiamondW100Filled'

      short_name='AddDiamond'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-341h28v-125h124v-28H494v-124h-28v124H341v28h125v125Zm14 234L107-480l373-373 373 373-373 373Z"/>
    </Icon>
  );
});

IconMaterialAddDiamondW100Filled.displayName = 'AmauiIconMaterialAddDiamondW100Filled';

export default IconMaterialAddDiamondW100Filled;
