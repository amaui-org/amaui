import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLabPanel = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LabPanel'

      short_name='LabPanel'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M3 21q-.825 0-1.412-.587Q1 19.825 1 19v-5q0-.825.588-1.413Q2.175 12 3 12V7.725q-.45-.275-.725-.713Q2 6.575 2 6V5q0-.825.588-1.413Q3.175 3 4 3h5q.825 0 1.413.587Q11 4.175 11 5v1q0 .575-.275 1.012-.275.438-.725.713V12h4V7.725q-.45-.275-.725-.713Q13 6.575 13 6V5q0-.825.588-1.413Q14.175 3 15 3h5q.825 0 1.413.587Q22 4.175 22 5v1q0 .575-.275 1.012-.275.438-.725.713V12q.825 0 1.413.587Q23 13.175 23 14v5q0 .825-.587 1.413Q21.825 21 21 21ZM15 6h5V5h-5ZM4 6h5V5H4Zm12 6h3V8h-3ZM5 12h3V8H5Zm-2 7h18v-5H3v5ZM4 6V5v1Zm11 0V5v1ZM3 19v-5 5Z"/>
    </Icon>
  );
});

IconMaterialLabPanel.displayName = 'AmauiIconMaterialLabPanel';

export default IconMaterialLabPanel;
