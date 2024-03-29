import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAirlineStopsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirlineStopsFilled'

      short_name='AirlineStops'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 19q-.425 0-.712-.288Q9 18.425 9 18t.288-.712Q9.575 17 10 17h1q-.35-3.15-2.6-5.375T3 9.05q-.425-.05-.712-.338Q2 8.425 2 8t.3-.713Q2.6 7 3 7.05 6 7.325 8.375 9 10.75 10.675 12 13.3q1.05-2.25 2.713-3.8 1.662-1.55 3.262-2.5H15q-.425 0-.712-.287Q14 6.425 14 6t.288-.713Q14.575 5 15 5h5q.425 0 .712.287Q21 5.575 21 6v5q0 .425-.288.712Q20.425 12 20 12t-.712-.288Q19 11.425 19 11V8.7q-1.85 1.125-3.737 3.15Q13.375 13.875 13 17h1q.425 0 .713.288.287.287.287.712t-.287.712Q14.425 19 14 19Z"/>
    </Icon>
  );
});

IconMaterialAirlineStopsFilled.displayName = 'AmauiIconMaterialAirlineStopsFilled';

export default IconMaterialAirlineStopsFilled;
