import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialParkW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ParkW100Filled'

      short_name='Park'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20.7q-.275 0-.487-.213-.213-.212-.213-.487v-3.3H6.85q-.45 0-.675-.4-.225-.4.05-.775L9.45 10.7h-.5q-.475 0-.688-.4-.212-.4.063-.775l3.05-4.4q.125-.15.288-.238.162-.087.337-.087.175 0 .338.087.162.088.287.238l3.05 4.4q.275.375.063.775-.213.4-.688.4h-.5l3.225 4.825q.275.375.05.775-.225.4-.675.4H12.7V20q0 .3-.2.5t-.5.2Z"/>
    </Icon>
  );
});

IconMaterialParkW100Filled.displayName = 'AmauiIconMaterialParkW100Filled';

export default IconMaterialParkW100Filled;
