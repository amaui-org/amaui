import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddDiamondW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddDiamondW100'

      short_name='AddDiamond'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-340h28v-126h126v-28H494v-126h-28v126H340v28h126v126Zm14 233L107-480l373-373 373 373-373 373Zm0-39 334-334-334-334-334 334 334 334Zm0-334Z"/>
    </Icon>
  );
});

IconMaterialAddDiamondW100.displayName = 'AmauiIconMaterialAddDiamondW100';

export default IconMaterialAddDiamondW100;
