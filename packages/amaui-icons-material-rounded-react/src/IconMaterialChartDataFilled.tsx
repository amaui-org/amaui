import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialChartDataFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ChartDataFilled'

      short_name='ChartData'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m10.45 12.975 1.3 1.3q.275.275.7.275.425 0 .7-.275l2.85-2.85v.6q0 .425.288.7.287.275.712.275t.712-.288Q18 12.425 18 12V9q0-.425-.288-.713Q17.425 8 17 8h-3.025q-.425 0-.7.287Q13 8.575 13 9t.288.712Q13.575 10 14 10h.575l-2.125 2.15-1.3-1.3q-.275-.3-.7-.3-.425 0-.7.3L6.7 13.9q-.3.275-.3.7 0 .425.3.7.275.3.7.3.425 0 .7-.3ZM5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Z"/>
    </Icon>
  );
});

IconMaterialChartDataFilled.displayName = 'AmauiIconMaterialChartDataFilled';

export default IconMaterialChartDataFilled;
