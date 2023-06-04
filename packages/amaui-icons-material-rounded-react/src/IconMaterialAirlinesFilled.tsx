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
      <path d="M2 20 12.05 5.375q.425-.625 1.088-1Q13.8 4 14.55 4h5.05q.95 0 1.538.725.587.725.412 1.65L19 20Zm12.5-6q1.05 0 1.775-.725Q17 12.55 17 11.5q0-1.05-.725-1.775Q15.55 9 14.5 9q-1.05 0-1.775.725Q12 10.45 12 11.5q0 1.05.725 1.775Q13.45 14 14.5 14Z"/>
    </Icon>
  );
});

IconMaterialAirlinesFilled.displayName = 'AmauiIconMaterialAirlinesFilled';

export default IconMaterialAirlinesFilled;
