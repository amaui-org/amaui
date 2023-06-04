import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBedtimeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BedtimeW100Filled'

      short_name='Bedtime'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20.7q-1.95 0-3.537-.638-1.588-.637-2.738-1.774-1.15-1.138-1.775-2.738T3.325 12q0-1.525.487-2.9.488-1.375 1.363-2.488.875-1.112 2.075-1.9Q8.45 3.925 9.9 3.6q-.025.025-.013.012L9.9 3.6q-.7 2.475-.425 4.812.275 2.338 1.4 4.288 1.125 1.95 3 3.35 1.875 1.4 4.375 2-1.1 1.225-2.762 1.937-1.663.713-3.488.713Z"/>
    </Icon>
  );
});

IconMaterialBedtimeW100Filled.displayName = 'AmauiIconMaterialBedtimeW100Filled';

export default IconMaterialBedtimeW100Filled;
