import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRobot = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Robot'

      short_name='Robot'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 21q-.825 0-1.413-.587Q3 19.825 3 19V9q0-2.5 1.75-4.25T9 3h6q2.5 0 4.25 1.75T21 9v10q0 .825-.587 1.413Q19.825 21 19 21Zm0-2h14V9q0-1.65-1.175-2.825Q16.65 5 15 5H9Q7.35 5 6.175 6.175 5 7.35 5 9v10Zm4-7q-.825 0-1.412-.588Q7 10.825 7 10t.588-1.413Q8.175 8 9 8t1.413.587Q11 9.175 11 10q0 .825-.587 1.412Q9.825 12 9 12Zm6 0q-.825 0-1.412-.588Q13 10.825 13 10t.588-1.413Q14.175 8 15 8t1.413.587Q17 9.175 17 10q0 .825-.587 1.412Q15.825 12 15 12Zm-8 7v-2q0-.825.588-1.412Q8.175 15 9 15h6q.825 0 1.413.588Q17 16.175 17 17v2h-2v-2h-2v2h-2v-2H9v2Zm-2 0h14H5Z"/>
    </Icon>
  );
});

IconMaterialRobot.displayName = 'AmauiIconMaterialRobot';

export default IconMaterialRobot;
