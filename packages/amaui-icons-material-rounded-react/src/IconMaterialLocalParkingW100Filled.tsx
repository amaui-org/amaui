import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocalParkingW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalParkingW100Filled'

      short_name='LocalParking'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8 19.7q-.275 0-.487-.213Q7.3 19.275 7.3 19V5q0-.275.213-.488Q7.725 4.3 8 4.3h5q1.925 0 3.312 1.387Q17.7 7.075 17.7 9q0 1.925-1.388 3.312Q14.925 13.7 13 13.7H8.7V19q0 .275-.2.487-.2.213-.5.213Zm.7-7.4H13q1.35 0 2.325-.975Q16.3 10.35 16.3 9t-.975-2.325Q14.35 5.7 13 5.7H8.7Z"/>
    </Icon>
  );
});

IconMaterialLocalParkingW100Filled.displayName = 'AmauiIconMaterialLocalParkingW100Filled';

export default IconMaterialLocalParkingW100Filled;
