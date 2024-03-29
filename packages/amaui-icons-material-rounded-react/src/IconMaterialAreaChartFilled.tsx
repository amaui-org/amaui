import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAreaChartFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AreaChartFilled'

      short_name='AreaChart'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m21 16-7.775-6.075q-.675-.525-1.512-.413-.838.113-1.338.813l-2.75 3.8L4.25 11.45q-.3-.25-.625-.35Q3.3 11 3 11V7.25q.125 0 .288.037.162.038.312.163L7 10l4.375-6.15q.25-.35.675-.412.425-.063.775.212L17 7h3q.425 0 .712.287Q21 7.575 21 8ZM4 20q-.425 0-.712-.288Q3 19.425 3 19v-5.725q.175 0 .325.05.15.05.3.175L8 17l3.4-4.675q.25-.35.662-.413.413-.062.763.213l8.175 6.4V19q0 .425-.288.712Q20.425 20 20 20Z"/>
    </Icon>
  );
});

IconMaterialAreaChartFilled.displayName = 'AmauiIconMaterialAreaChartFilled';

export default IconMaterialAreaChartFilled;
