import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFlightRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlightRoundedFilled'
      short_name='Flight'

      {...props}
    >
      <path d="M9.5 21.725Q9.075 21.85 8.788 21.625Q8.5 21.4 8.5 20.975Q8.5 20.775 8.613 20.562Q8.725 20.35 8.875 20.225L10.5 19V13.5L3.275 15.625Q2.75 15.775 2.375 15.5Q2 15.225 2 14.65Q2 14.375 2.163 14.087Q2.325 13.8 2.575 13.675L10.5 9V3.5Q10.5 2.85 10.925 2.425Q11.35 2 12 2Q12.65 2 13.075 2.425Q13.5 2.85 13.5 3.5V9L21.425 13.675Q21.675 13.8 21.837 14.1Q22 14.4 22 14.675Q22 15.225 21.625 15.5Q21.25 15.775 20.725 15.625L13.5 13.5V19L15.125 20.225Q15.275 20.35 15.387 20.562Q15.5 20.775 15.5 20.975Q15.5 21.4 15.213 21.625Q14.925 21.85 14.5 21.725L12 21Z"/>
    </Icon>
  );
});

IconMaterialFlightRoundedFilled.displayName = 'AmauiIconMaterialFlightRoundedFilled';

export default IconMaterialFlightRoundedFilled;
