import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialUpcomingFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='UpcomingFilled'

      short_name='Upcoming'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M16.9 10.1q-.275-.275-.275-.7 0-.425.275-.7l2.175-2.175q.275-.275.675-.275t.7.3q.275.275.275.7 0 .425-.275.7l-2.175 2.175Q18 10.4 17.6 10.4t-.7-.3ZM12 8q-.425 0-.712-.287Q11 7.425 11 7V4q0-.425.288-.713Q11.575 3 12 3t.713.287Q13 3.575 13 4v3q0 .425-.287.713Q12.425 8 12 8Zm-6.3 2.1L3.525 7.925Q3.25 7.65 3.25 7.25t.3-.7q.275-.275.7-.275.425 0 .7.275l2.175 2.175Q7.4 9 7.4 9.4t-.3.7q-.275.275-.7.275-.425 0-.7-.275ZM4 21q-.825 0-1.412-.587Q2 19.825 2 19v-5q0-.825.588-1.413Q3.175 12 4 12h3.4q.575 0 1.113.325.537.325.737.85.325.8 1.1 1.313Q11.125 15 12 15q.875 0 1.65-.512.775-.513 1.1-1.313.2-.525.738-.85Q16.025 12 16.6 12H20q.825 0 1.413.587Q22 13.175 22 14v5q0 .825-.587 1.413Q20.825 21 20 21Z"/>
    </Icon>
  );
});

IconMaterialUpcomingFilled.displayName = 'AmauiIconMaterialUpcomingFilled';

export default IconMaterialUpcomingFilled;
