import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTableChartFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TableChartFilled'

      short_name='TableChart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 8V5q0-.825.587-1.413Q4.175 3 5 3h15q.825 0 1.413.587Q22 4.175 22 5v3Zm7 13V10h5v11Zm7 0V10h5v9q0 .825-.587 1.413Q20.825 21 20 21ZM5 21q-.825 0-1.413-.587Q3 19.825 3 19v-9h5v11Z"/>
    </Icon>
  );
});

IconMaterialTableChartFilled.displayName = 'AmauiIconMaterialTableChartFilled';

export default IconMaterialTableChartFilled;
