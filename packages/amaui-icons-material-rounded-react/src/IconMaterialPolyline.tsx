import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPolyline = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Polyline'

      short_name='Polyline'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17 22q-.825 0-1.412-.587Q15 20.825 15 20v-.5l-7.275-3.625-.35.087Q7.225 16 7 16H5q-.825 0-1.413-.588Q3 14.825 3 14v-2q0-.825.587-1.413Q4.175 10 5 10h2.138q.062 0 .137.025l2.875-3.3q-.075-.15-.112-.338Q10 6.2 10 6V4q0-.825.588-1.413Q11.175 2 12 2h2q.825 0 1.413.587Q16 3.175 16 4v2q0 .825-.587 1.412Q14.825 8 14 8h-2.162q-.063 0-.113-.025l-2.85 3.275q.05.2.088.362Q9 11.775 9 12v2.112q0 .063-.025.113l6.15 3.075q.2-.55.7-.925Q16.325 16 17 16h2q.825 0 1.413.587Q21 17.175 21 18v2q0 .825-.587 1.413Q19.825 22 19 22ZM12 6h2V4h-2Zm-7 8h2v-2H5Zm12 6h2v-2h-2ZM13 5Zm-7 8Zm12 6Z"/>
    </Icon>
  );
});

IconMaterialPolyline.displayName = 'AmauiIconMaterialPolyline';

export default IconMaterialPolyline;
