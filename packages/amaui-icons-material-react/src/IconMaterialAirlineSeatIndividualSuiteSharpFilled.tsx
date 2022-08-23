import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAirlineSeatIndividualSuiteSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirlineSeatIndividualSuiteSharpFilled'
      short_name='AirlineSeatIndividualSuite'

      {...props}
    >
      <path d="M1 17V7H3V15H11V7H23V17ZM7 14Q5.75 14 4.875 13.125Q4 12.25 4 11Q4 9.75 4.875 8.875Q5.75 8 7 8Q8.25 8 9.125 8.875Q10 9.75 10 11Q10 12.25 9.125 13.125Q8.25 14 7 14Z"/>
    </Icon>
  );
});

IconMaterialAirlineSeatIndividualSuiteSharpFilled.displayName = 'AmauiIconMaterialAirlineSeatIndividualSuiteSharpFilled';

export default IconMaterialAirlineSeatIndividualSuiteSharpFilled;
