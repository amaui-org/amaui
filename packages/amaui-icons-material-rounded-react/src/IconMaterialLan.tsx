import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLan = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Lan'

      short_name='Lan'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 22q-.825 0-1.413-.587Q3 20.825 3 20v-3q0-.825.587-1.412Q4.175 15 5 15h1v-2q0-.825.588-1.413Q7.175 11 8 11h3V9h-1q-.825 0-1.412-.588Q8 7.825 8 7V4q0-.825.588-1.413Q9.175 2 10 2h4q.825 0 1.413.587Q16 3.175 16 4v3q0 .825-.587 1.412Q14.825 9 14 9h-1v2h3q.825 0 1.413.587Q18 12.175 18 13v2h1q.825 0 1.413.588Q21 16.175 21 17v3q0 .825-.587 1.413Q19.825 22 19 22h-4q-.825 0-1.412-.587Q13 20.825 13 20v-3q0-.825.588-1.412Q14.175 15 15 15h1v-2H8v2h1q.825 0 1.413.588Q11 16.175 11 17v3q0 .825-.587 1.413Q9.825 22 9 22Zm5-15h4V4h-4ZM5 20h4v-3H5Zm10 0h4v-3h-4ZM12 7ZM9 17Zm6 0Z"/>
    </Icon>
  );
});

IconMaterialLan.displayName = 'AmauiIconMaterialLan';

export default IconMaterialLan;
