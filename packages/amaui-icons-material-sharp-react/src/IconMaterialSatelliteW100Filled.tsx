import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSatelliteW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SatelliteW100Filled'

      short_name='Satellite'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.5 10.8q1.65-.275 2.838-1.463Q10.525 8.15 10.8 6.5h-.7q-.275 1.375-1.25 2.35-.975.975-2.35 1.25Zm0-2.75q.575-.15.988-.563.412-.412.562-.987H6.5Zm1.45 8.3h8.3l-2.55-3.4-2.5 3.1-1.6-1.85ZM4.3 19.7V4.3h15.4v15.4Z"/>
    </Icon>
  );
});

IconMaterialSatelliteW100Filled.displayName = 'AmauiIconMaterialSatelliteW100Filled';

export default IconMaterialSatelliteW100Filled;
