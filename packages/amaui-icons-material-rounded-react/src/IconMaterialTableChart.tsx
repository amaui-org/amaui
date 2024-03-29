import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTableChart = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableChart'

      short_name='TableChart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M20 21H5q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h15q.825 0 1.413.587Q22 4.175 22 5v14q0 .825-.587 1.413Q20.825 21 20 21ZM5 8h15V5H5Zm3 2H5v9h3Zm9 0v9h3v-9Zm-2 0h-5v9h5Z"/>
    </Icon>
  );
});

IconMaterialTableChart.displayName = 'AmauiIconMaterialTableChart';

export default IconMaterialTableChart;
