import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMonitorHeart = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MonitorHeart'

      short_name='MonitorHeart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 9q-.425 0-.712-.288Q2 8.425 2 8V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v2q0 .425-.288.712Q21.425 9 21 9t-.712-.288Q20 8.425 20 8V6H4v2q0 .425-.287.712Q3.425 9 3 9Zm1 11q-.825 0-1.412-.587Q2 18.825 2 18v-2q0-.425.288-.713Q2.575 15 3 15t.713.287Q4 15.575 4 16v2h16v-2q0-.425.288-.713Q20.575 15 21 15t.712.287Q22 15.575 22 16v2q0 .825-.587 1.413Q20.825 20 20 20Zm6-3q.275 0 .525-.137.25-.138.375-.413l3.1-6.2 1.1 2.2q.125.275.375.413.25.137.525.137h5q.425 0 .712-.288Q22 12.425 22 12t-.288-.713Q21.425 11 21 11h-4.375L14.9 7.55q-.275-.5-.9-.5t-.9.5l-3.1 6.2-1.1-2.2q-.125-.275-.375-.413Q8.275 11 8 11H3q-.425 0-.712.287Q2 11.575 2 12t.288.712Q2.575 13 3 13h4.375L9.1 16.45q.125.275.375.413.25.137.525.137Zm2-5Z"/>
    </Icon>
  );
});

IconMaterialMonitorHeart.displayName = 'AmauiIconMaterialMonitorHeart';

export default IconMaterialMonitorHeart;
