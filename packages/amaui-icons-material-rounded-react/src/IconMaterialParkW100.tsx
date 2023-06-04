import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialParkW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ParkW100'

      short_name='Park'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 20.7q-.275 0-.487-.213-.213-.212-.213-.487v-3.3H6.85q-.45 0-.675-.4-.225-.4.05-.775L9.45 10.7h-.5q-.45 0-.675-.4-.225-.4.05-.775l3.05-4.4q.125-.15.288-.238.162-.087.337-.087.175 0 .338.087.162.088.287.238l3.05 4.4q.275.375.05.775-.225.4-.675.4h-.5l3.225 4.825q.275.375.05.775-.225.4-.675.4H12.7V20q0 .275-.2.487-.2.213-.5.213ZM6.75 16h4-1.9 6.3-1.9 4Zm0 0h10.5l-4-6h1.9L12 5.5 8.85 10h1.9Z"/>
    </Icon>
  );
});

IconMaterialParkW100.displayName = 'AmauiIconMaterialParkW100';

export default IconMaterialParkW100;
