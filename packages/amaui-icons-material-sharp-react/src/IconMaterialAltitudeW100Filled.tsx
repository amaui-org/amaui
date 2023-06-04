import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAltitudeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AltitudeW100Filled'

      short_name='Altitude'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18.65 12V6.9L16.4 9.125l-.475-.475L19 5.575l3.075 3.075-.475.5-2.25-2.25V12ZM3.475 19.65l3.65-4.9 3.15 4.2.55-.425-1.125-1.5 4.425-5.925 6.4 8.55Z"/>
    </Icon>
  );
});

IconMaterialAltitudeW100Filled.displayName = 'AmauiIconMaterialAltitudeW100Filled';

export default IconMaterialAltitudeW100Filled;
