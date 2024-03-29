import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPivotTableChart = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PivotTableChart'

      short_name='PivotTableChart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M10 8V3h9q.825 0 1.413.587Q21 4.175 21 5v3ZM5 21q-.825 0-1.413-.587Q3 19.825 3 19v-9h5v11ZM3 8V5q0-.825.587-1.413Q4.175 3 5 3h3v5Zm9.3 13.3-2.6-2.6q-.15-.15-.212-.325-.063-.175-.063-.375t.063-.375q.062-.175.212-.325l2.625-2.625Q12.6 14.4 13 14.4t.7.3q.275.275.275.687 0 .413-.275.713l-.85.9H15q.825 0 1.413-.587Q17 15.825 17 15v-2.2l-.925.925Q15.8 14 15.4 14t-.7-.3q-.275-.275-.275-.7 0-.425.275-.7l2.6-2.6q.15-.15.325-.213.175-.062.375-.062t.375.062q.175.063.325.213l2.625 2.625q.275.275.275.675t-.3.7q-.275.275-.7.275-.425 0-.7-.275l-.9-.9V15q0 1.65-1.175 2.825Q16.65 19 15 19h-2.15l.875.9q.275.3.275.7 0 .4-.3.7-.275.275-.7.275-.425 0-.7-.275Z"/>
    </Icon>
  );
});

IconMaterialPivotTableChart.displayName = 'AmauiIconMaterialPivotTableChart';

export default IconMaterialPivotTableChart;
