import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCloudDownload = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloudDownload'

      short_name='CloudDownload'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M6.5 20q-2.275 0-3.887-1.575Q1 16.85 1 14.575q0-1.95 1.175-3.475Q3.35 9.575 5.25 9.15q.425-1.8 2.125-3.425Q9.075 4.1 11 4.1q.825 0 1.413.587Q13 5.275 13 6.1v6.05l.9-.875q.275-.275.688-.275.412 0 .712.3.275.275.275.7 0 .425-.275.7l-2.6 2.6q-.15.15-.325.212-.175.063-.375.063t-.375-.063q-.175-.062-.325-.212l-2.6-2.6q-.275-.275-.287-.688Q8.4 11.6 8.7 11.3q.275-.275.687-.288.413-.012.713.263l.9.875V6.1q-1.9.35-2.95 1.837Q7 9.425 7 11h-.5q-1.45 0-2.475 1.025Q3 13.05 3 14.5q0 1.45 1.025 2.475Q5.05 18 6.5 18h12q1.05 0 1.775-.725Q21 16.55 21 15.5q0-1.05-.725-1.775Q19.55 13 18.5 13H17v-2q0-1.2-.55-2.238Q15.9 7.725 15 7V4.675q1.85.875 2.925 2.588Q19 8.975 19 11q1.725.2 2.863 1.487Q23 13.775 23 15.5q0 1.875-1.312 3.188Q20.375 20 18.5 20Zm5.5-8.95Z"/>
    </Icon>
  );
});

IconMaterialCloudDownload.displayName = 'AmauiIconMaterialCloudDownload';

export default IconMaterialCloudDownload;
