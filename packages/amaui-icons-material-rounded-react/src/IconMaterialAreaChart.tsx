import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAreaChart = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AreaChart'

      short_name='AreaChart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 20q-.425 0-.712-.288Q3 19.425 3 19V7.25q.125 0 .288.037.162.038.312.163L7 10l4.375-6.15q.25-.35.675-.412.425-.063.775.212L17 7h3q.425 0 .712.287Q21 7.575 21 8v11q0 .425-.288.712Q20.425 20 20 20Zm4-3 3.4-4.675q.25-.35.662-.413.413-.062.763.213L19 16.95V9h-2.7l-3.9-3.125-4.95 6.95L5 11v3.6Z"/>
    </Icon>
  );
});

IconMaterialAreaChart.displayName = 'AmauiIconMaterialAreaChart';

export default IconMaterialAreaChart;
