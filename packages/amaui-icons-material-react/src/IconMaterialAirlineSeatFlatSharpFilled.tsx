import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAirlineSeatFlatSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirlineSeatFlatSharpFilled'
      short_name='AirlineSeatFlat'

      {...props}
    >
      <path d="M9 14V7H22V14ZM2 17V15H22V17ZM5 14Q3.75 14 2.875 13.125Q2 12.25 2 11Q2 9.75 2.875 8.875Q3.75 8 5 8Q6.25 8 7.125 8.875Q8 9.75 8 11Q8 12.25 7.125 13.125Q6.25 14 5 14Z"/>
    </Icon>
  );
});

IconMaterialAirlineSeatFlatSharpFilled.displayName = 'AmauiIconMaterialAirlineSeatFlatSharpFilled';

export default IconMaterialAirlineSeatFlatSharpFilled;
