import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLocalParkingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalParkingW100'

      short_name='LocalParking'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M7.3 19.7V4.3H13q1.925 0 3.312 1.387Q17.7 7.075 17.7 9q0 1.925-1.388 3.312Q14.925 13.7 13 13.7H8.7v6Zm1.4-7.4H13q1.35 0 2.325-.975Q16.3 10.35 16.3 9t-.975-2.325Q14.35 5.7 13 5.7H8.7Z"/>
    </Icon>
  );
});

IconMaterialLocalParkingW100.displayName = 'AmauiIconMaterialLocalParkingW100';

export default IconMaterialLocalParkingW100;
