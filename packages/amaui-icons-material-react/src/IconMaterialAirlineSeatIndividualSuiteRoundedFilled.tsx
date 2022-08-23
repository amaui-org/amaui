import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAirlineSeatIndividualSuiteRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirlineSeatIndividualSuiteRoundedFilled'
      short_name='AirlineSeatIndividualSuite'

      {...props}
    >
      <path d="M3 17Q2.175 17 1.588 16.413Q1 15.825 1 15V8Q1 7.575 1.288 7.287Q1.575 7 2 7Q2.425 7 2.713 7.287Q3 7.575 3 8V15H11V9Q11 8.175 11.588 7.587Q12.175 7 13 7H19Q20.65 7 21.825 8.175Q23 9.35 23 11V15Q23 15.825 22.413 16.413Q21.825 17 21 17ZM7 14Q5.75 14 4.875 13.125Q4 12.25 4 11Q4 9.75 4.875 8.875Q5.75 8 7 8Q8.25 8 9.125 8.875Q10 9.75 10 11Q10 12.25 9.125 13.125Q8.25 14 7 14Z"/>
    </Icon>
  );
});

IconMaterialAirlineSeatIndividualSuiteRoundedFilled.displayName = 'AmauiIconMaterialAirlineSeatIndividualSuiteRoundedFilled';

export default IconMaterialAirlineSeatIndividualSuiteRoundedFilled;
