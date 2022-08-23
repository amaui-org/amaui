import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialFlightTakeoffRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='FlightTakeoffRoundedFilled'
      short_name='FlightTakeoff'

      {...props}
    >
      <path d="M4.025 21Q3.6 21 3.312 20.712Q3.025 20.425 3.025 20Q3.025 19.575 3.312 19.288Q3.6 19 4.025 19H20.025Q20.45 19 20.738 19.288Q21.025 19.575 21.025 20Q21.025 20.425 20.738 20.712Q20.45 21 20.025 21ZM5.6 15.8Q5.275 15.9 4.975 15.775Q4.675 15.65 4.5 15.35L2.6 12.125Q2.35 11.725 2.513 11.375Q2.675 11.025 3.15 10.925Q3.325 10.875 3.55 10.95Q3.775 11.025 3.9 11.15L5.325 12.4L10.125 11.1L6.75 5.375Q6.475 4.9 6.65 4.462Q6.825 4.025 7.35 3.85Q7.625 3.75 7.975 3.837Q8.325 3.925 8.55 4.125L14.875 9.8L19.875 8.45Q20.675 8.25 21.325 8.775Q21.975 9.3 21.975 10.15Q21.975 10.7 21.638 11.125Q21.3 11.55 20.775 11.7Z"/>
    </Icon>
  );
});

IconMaterialFlightTakeoffRoundedFilled.displayName = 'AmauiIconMaterialFlightTakeoffRoundedFilled';

export default IconMaterialFlightTakeoffRoundedFilled;
