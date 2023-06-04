import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBedtimeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BedtimeW100'

      short_name='Bedtime'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20q1.475 0 2.663-.462 1.187-.463 2.187-1.188-2.25-.775-3.937-2.175-1.688-1.4-2.713-3.213-1.025-1.812-1.375-3.937Q8.475 6.9 8.9 4.65q-2.15.875-3.512 2.937Q4.025 9.65 4.025 12q0 3.575 2.2 5.788Q8.425 20 12 20Zm0 .7q-1.95 0-3.537-.638-1.588-.637-2.738-1.774-1.15-1.138-1.775-2.738T3.325 12q0-1.5.475-2.863.475-1.362 1.338-2.462.862-1.1 2.075-1.9Q8.425 3.975 9.9 3.6q-.7 2.475-.425 4.812.275 2.338 1.4 4.288 1.125 1.95 3 3.35 1.875 1.4 4.375 2-1.1 1.225-2.762 1.937-1.663.713-3.488.713Zm-1.55-8.375Z"/>
    </Icon>
  );
});

IconMaterialBedtimeW100.displayName = 'AmauiIconMaterialBedtimeW100';

export default IconMaterialBedtimeW100;
