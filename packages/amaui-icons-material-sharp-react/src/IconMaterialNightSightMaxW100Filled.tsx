import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNightSightMaxW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NightSightMaxW100Filled'

      short_name='NightSightMax'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M706 510V390H586v-28h120V242h28v120h120v28H734v120h-28ZM440 910q-123.112 0-208.556-85.444Q146 739.112 146 616q0-112 74.5-196.5T409 324q-17 26-26 62t-9 70q0 110 78 188t188 78q20 0 39.5-3t38.5-9q-29 88-104.5 144T440 910Z"/>
    </Icon>
  );
});

IconMaterialNightSightMaxW100Filled.displayName = 'AmauiIconMaterialNightSightMaxW100Filled';

export default IconMaterialNightSightMaxW100Filled;
