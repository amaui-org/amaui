import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialViewColumn2 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ViewColumn2'

      short_name='ViewColumn2'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15 21q-.825 0-1.412-.587Q13 19.825 13 19V5q0-.825.588-1.413Q14.175 3 15 3h4q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Zm0-16v14h4V5h-4ZM5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h4q.825 0 1.413.587Q11 4.175 11 5v14q0 .825-.587 1.413Q9.825 21 9 21ZM5 5v14h4V5H5Zm14 0h-4 4ZM9 5H5h4Z"/>
    </Icon>
  );
});

IconMaterialViewColumn2.displayName = 'AmauiIconMaterialViewColumn2';

export default IconMaterialViewColumn2;
