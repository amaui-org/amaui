import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAirlineSeatReclineNormalSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirlineSeatReclineNormalSharp'
      short_name='AirlineSeatReclineNormal'

      {...props}
    >
      <path d="M6 20V7H8V18H15V20ZM11.5 6Q10.675 6 10.088 5.412Q9.5 4.825 9.5 4Q9.5 3.175 10.088 2.587Q10.675 2 11.5 2Q12.325 2 12.913 2.587Q13.5 3.175 13.5 4Q13.5 4.825 12.913 5.412Q12.325 6 11.5 6ZM16 22V17H9V9.5Q9 8.45 9.725 7.725Q10.45 7 11.5 7Q12.55 7 13.275 7.725Q14 8.45 14 9.5V14H18V22Z"/>
    </Icon>
  );
});

IconMaterialAirlineSeatReclineNormalSharp.displayName = 'AmauiIconMaterialAirlineSeatReclineNormalSharp';

export default IconMaterialAirlineSeatReclineNormalSharp;
