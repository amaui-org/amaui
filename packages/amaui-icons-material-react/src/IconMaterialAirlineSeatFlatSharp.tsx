import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAirlineSeatFlatSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirlineSeatFlatSharp'
      short_name='AirlineSeatFlat'

      {...props}
    >
      <path d="M9 14V7H22V14ZM2 17V15H22V17ZM5 14Q3.75 14 2.875 13.125Q2 12.25 2 11Q2 9.75 2.875 8.875Q3.75 8 5 8Q6.25 8 7.125 8.875Q8 9.75 8 11Q8 12.25 7.125 13.125Q6.25 14 5 14ZM5 12Q5.425 12 5.713 11.712Q6 11.425 6 11Q6 10.575 5.713 10.287Q5.425 10 5 10Q4.575 10 4.287 10.287Q4 10.575 4 11Q4 11.425 4.287 11.712Q4.575 12 5 12ZM11 12H20V9H11ZM5 11Q5 11 5 11Q5 11 5 11Q5 11 5 11Q5 11 5 11Q5 11 5 11Q5 11 5 11Q5 11 5 11Q5 11 5 11ZM11 12V9V12Z"/>
    </Icon>
  );
});

IconMaterialAirlineSeatFlatSharp.displayName = 'AmauiIconMaterialAirlineSeatFlatSharp';

export default IconMaterialAirlineSeatFlatSharp;
