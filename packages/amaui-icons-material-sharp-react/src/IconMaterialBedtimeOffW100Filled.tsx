import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBedtimeOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BedtimeOffW100Filled'

      short_name='BedtimeOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m9.5 5.575-1.35-1.35q.325-.175.775-.338.45-.162.975-.287-.15.475-.25 1.012-.1.538-.15.963ZM21.3 21.2l-3.1-3.1q-1.2 1.3-2.85 1.95-1.65.65-3.35.65-1.95 0-3.537-.638-1.588-.637-2.738-1.774-1.15-1.138-1.775-2.738T3.325 12q0-1.775.638-3.325.637-1.55 1.912-2.9L2.2 2.1l.5-.5 19.1 19.1Z"/>
    </Icon>
  );
});

IconMaterialBedtimeOffW100Filled.displayName = 'AmauiIconMaterialBedtimeOffW100Filled';

export default IconMaterialBedtimeOffW100Filled;
