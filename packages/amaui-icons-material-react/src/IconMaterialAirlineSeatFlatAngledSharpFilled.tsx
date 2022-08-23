import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAirlineSeatFlatAngledSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirlineSeatFlatAngledSharpFilled'
      short_name='AirlineSeatFlatAngled'

      {...props}
    >
      <path d="M9.025 12.725 11.425 6.15 23.65 10.6 21.25 17.175ZM1.425 13.15 2.1 11.275 20.9 18.125 20.225 20ZM6.325 11.55Q5.075 11.55 4.2 10.675Q3.325 9.8 3.325 8.55Q3.325 7.3 4.2 6.425Q5.075 5.55 6.325 5.55Q7.575 5.55 8.45 6.425Q9.325 7.3 9.325 8.55Q9.325 9.8 8.45 10.675Q7.575 11.55 6.325 11.55Z"/>
    </Icon>
  );
});

IconMaterialAirlineSeatFlatAngledSharpFilled.displayName = 'AmauiIconMaterialAirlineSeatFlatAngledSharpFilled';

export default IconMaterialAirlineSeatFlatAngledSharpFilled;
