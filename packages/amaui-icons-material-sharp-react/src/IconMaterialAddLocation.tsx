import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAddLocation = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddLocation'

      short_name='AddLocation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M11 14h2v-3h3V9h-3V6h-2v3H8v2h3Zm1 5.35q3.05-2.8 4.525-5.088Q18 11.975 18 10.2q0-2.725-1.738-4.463Q14.525 4 12 4 9.475 4 7.737 5.737 6 7.475 6 10.2q0 1.775 1.475 4.062Q8.95 16.55 12 19.35ZM12 22q-4.025-3.425-6.012-6.363Q4 12.7 4 10.2q0-3.75 2.413-5.975Q8.825 2 12 2t5.587 2.225Q20 6.45 20 10.2q0 2.5-1.987 5.437Q16.025 18.575 12 22Zm0-11.8Z"/>
    </Icon>
  );
});

IconMaterialAddLocation.displayName = 'AmauiIconMaterialAddLocation';

export default IconMaterialAddLocation;
