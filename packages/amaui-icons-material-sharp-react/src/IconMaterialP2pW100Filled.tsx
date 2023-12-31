import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialP2pW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='P2pW100Filled'

      short_name='P2p'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-616h298v220h-28v-81H160v338h270v139H132Zm398 80v-219h28v80h242v-337H530v-140h298v616H530ZM302-454v-52h52v52h-52Zm152 0v-52h52v52h-52Zm151 0v-52h52v52h-52Z"/>
    </Icon>
  );
});

IconMaterialP2pW100Filled.displayName = 'AmauiIconMaterialP2pW100Filled';

export default IconMaterialP2pW100Filled;
