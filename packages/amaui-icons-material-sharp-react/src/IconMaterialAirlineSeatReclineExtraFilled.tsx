import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAirlineSeatReclineExtraFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AirlineSeatReclineExtraFilled'

      short_name='AirlineSeatReclineExtra'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.5 6q-.825 0-1.412-.588Q6.5 4.825 6.5 4t.588-1.413Q7.675 2 8.5 2t1.413.587Q10.5 3.175 10.5 4q0 .825-.587 1.412Q9.325 6 8.5 6ZM5.575 20 3 7h2.05l2.2 11H14v2ZM19.5 22l-2.9-5H8.025L6.6 10.05q-.275-1.2.562-2.125Q8 7 9.2 7q.875 0 1.588.525.712.525.912 1.425L12.8 14h4.375l4.075 7Z"/>
    </Icon>
  );
});

IconMaterialAirlineSeatReclineExtraFilled.displayName = 'AmauiIconMaterialAirlineSeatReclineExtraFilled';

export default IconMaterialAirlineSeatReclineExtraFilled;
