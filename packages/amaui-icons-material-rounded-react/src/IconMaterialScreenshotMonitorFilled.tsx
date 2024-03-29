import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialScreenshotMonitorFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenshotMonitorFilled'

      short_name='ScreenshotMonitor'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.5 7.5h1.75q.325 0 .538-.213Q9 7.075 9 6.75q0-.325-.212-.537Q8.575 6 8.25 6H6q-.425 0-.713.287Q5 6.575 5 7v2.25q0 .325.213.537.212.213.537.213.325 0 .537-.213.213-.212.213-.537Zm11 7h-1.75q-.325 0-.537.212-.213.213-.213.538 0 .325.213.537.212.213.537.213H18q.425 0 .712-.288Q19 15.425 19 15v-2.25q0-.325-.212-.538Q18.575 12 18.25 12q-.325 0-.538.212-.212.213-.212.538ZM9 21q-.425 0-.712-.288Q8 20.425 8 20v-1H4q-.825 0-1.412-.587Q2 17.825 2 17V5q0-.825.588-1.413Q3.175 3 4 3h16q.825 0 1.413.587Q22 4.175 22 5v12q0 .825-.587 1.413Q20.825 19 20 19h-4v1q0 .425-.287.712Q15.425 21 15 21Z"/>
    </Icon>
  );
});

IconMaterialScreenshotMonitorFilled.displayName = 'AmauiIconMaterialScreenshotMonitorFilled';

export default IconMaterialScreenshotMonitorFilled;
