import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNextWeek = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NextWeek'

      short_name='NextWeek'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m11.7 16.8 2.6-2.6q.3-.3.3-.7 0-.4-.3-.7l-2.6-2.6q-.275-.275-.7-.275-.425 0-.7.275-.275.275-.275.7 0 .425.275.7l1.9 1.9-1.9 1.9q-.275.275-.275.7 0 .425.275.7.275.275.7.275.425 0 .7-.275ZM4 21q-.825 0-1.412-.587Q2 19.825 2 19V8q0-.825.588-1.412Q3.175 6 4 6h4V4q0-.825.588-1.413Q9.175 2 10 2h4q.825 0 1.413.587Q16 3.175 16 4v2h4q.825 0 1.413.588Q22 7.175 22 8v11q0 .825-.587 1.413Q20.825 21 20 21Zm6-15h4V4h-4ZM4 19h16V8H4v11Zm0 0V8v11Z"/>
    </Icon>
  );
});

IconMaterialNextWeek.displayName = 'AmauiIconMaterialNextWeek';

export default IconMaterialNextWeek;
