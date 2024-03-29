import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAirlineSeatLegroomReducedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirlineSeatLegroomReducedFilled'

      short_name='AirlineSeatLegroomReduced'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15.5 21q-.8 0-1.362-.65-.563-.65-.363-1.425L15 14H8q-.825 0-1.412-.588Q6 12.825 6 12V3h6v6h5q.825 0 1.413.587Q19 10.175 19 11l-2 7h1.45q.675 0 1.112.413.438.412.438 1.087t-.413 1.087Q19.175 21 18.5 21ZM5 17q-.825 0-1.413-.587Q3 15.825 3 15V4q0-.425.288-.713Q3.575 3 4 3t.713.287Q5 3.575 5 4v11h6q.425 0 .713.287.287.288.287.713t-.287.712Q11.425 17 11 17Z"/>
    </Icon>
  );
});

IconMaterialAirlineSeatLegroomReducedFilled.displayName = 'AmauiIconMaterialAirlineSeatLegroomReducedFilled';

export default IconMaterialAirlineSeatLegroomReducedFilled;
