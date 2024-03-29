import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewWeekFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewWeekFilled'

      short_name='ViewWeek'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h1.325q.825 0 1.413.588.587.587.587 1.412v12q0 .825-.587 1.413Q6.15 20 5.325 20Zm7.35 0q-.825 0-1.412-.587Q9.35 18.825 9.35 18V6q0-.825.588-1.412Q10.525 4 11.35 4h1.325q.825 0 1.413.588.587.587.587 1.412v12q0 .825-.587 1.413Q13.5 20 12.675 20Zm7.325 0q-.825 0-1.412-.587-.588-.588-.588-1.413V6q0-.825.588-1.412Q17.85 4 18.675 4H20q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20Z"/>
    </Icon>
  );
});

IconMaterialViewWeekFilled.displayName = 'AmauiIconMaterialViewWeekFilled';

export default IconMaterialViewWeekFilled;
