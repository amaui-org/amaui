import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBorderAllFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BorderAllFilled'

      short_name='BorderAll'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15 11q-.825 0-1.412-.588Q13 9.825 13 9V5q0-.825.588-1.413Q14.175 3 15 3h4q.825 0 1.413.587Q21 4.175 21 5v4q0 .825-.587 1.412Q19.825 11 19 11Zm-4-2q0 .825-.587 1.412Q9.825 11 9 11H5q-.825 0-1.413-.588Q3 9.825 3 9V5q0-.825.587-1.413Q4.175 3 5 3h4q.825 0 1.413.587Q11 4.175 11 5Zm2 6q0-.825.588-1.413Q14.175 13 15 13h4q.825 0 1.413.587Q21 14.175 21 15v4q0 .825-.587 1.413Q19.825 21 19 21h-4q-.825 0-1.412-.587Q13 19.825 13 19Zm-4-2q.825 0 1.413.587Q11 14.175 11 15v4q0 .825-.587 1.413Q9.825 21 9 21H5q-.825 0-1.413-.587Q3 19.825 3 19v-4q0-.825.587-1.413Q4.175 13 5 13Z"/>
    </Icon>
  );
});

IconMaterialBorderAllFilled.displayName = 'AmauiIconMaterialBorderAllFilled';

export default IconMaterialBorderAllFilled;
