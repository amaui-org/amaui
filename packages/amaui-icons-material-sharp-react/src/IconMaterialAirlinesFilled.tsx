import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAirlinesFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirlinesFilled'

      short_name='Airlines'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M2 20 13 4h9l-3 16Zm12.5-6q1.05 0 1.775-.725Q17 12.55 17 11.5q0-1.05-.725-1.775Q15.55 9 14.5 9q-1.05 0-1.775.725Q12 10.45 12 11.5q0 1.05.725 1.775Q13.45 14 14.5 14Z"/>
    </Icon>
  );
});

IconMaterialAirlinesFilled.displayName = 'AmauiIconMaterialAirlinesFilled';

export default IconMaterialAirlinesFilled;
