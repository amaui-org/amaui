import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStackedBarChart = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StackedBarChart'

      short_name='StackedBarChart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6 20q-.825 0-1.412-.587Q4 18.825 4 18V9h4v9q0 .825-.588 1.413Q6.825 20 6 20ZM4 8V6q0-.825.588-1.412Q5.175 4 6 4t1.412.588Q8 5.175 8 6v2Zm8 12q-.825 0-1.412-.587Q10 18.825 10 18v-6h4v6q0 .825-.587 1.413Q12.825 20 12 20Zm-2-9V9q0-.825.588-1.413Q11.175 7 12 7t1.413.587Q14 8.175 14 9v2Zm8 9q-.825 0-1.413-.587Q16 18.825 16 18v-3h4v3q0 .825-.587 1.413Q18.825 20 18 20Zm-2-6v-2q0-.825.587-1.413Q17.175 10 18 10q.825 0 1.413.587Q20 11.175 20 12v2Z"/>
    </Icon>
  );
});

IconMaterialStackedBarChart.displayName = 'AmauiIconMaterialStackedBarChart';

export default IconMaterialStackedBarChart;
