import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPermContactCalendarW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PermContactCalendarW100'

      short_name='PermContactCalendar'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.55 20h12.9v-.15q-1.4-1.35-3.037-2-1.638-.65-3.413-.65-1.725 0-3.375.637-1.65.638-3.075 1.963ZM5 19.35q1.35-1.325 3.138-2.088Q9.925 16.5 12 16.5t3.863.762q1.787.763 3.137 2.088V6H5Zm7-6q-1.2 0-2.025-.825T9.15 10.5q0-1.2.825-2.025T12 7.65q1.2 0 2.025.825t.825 2.025q0 1.2-.825 2.025T12 13.35Zm0-.7q.875 0 1.512-.638.638-.637.638-1.512t-.638-1.512Q12.875 8.35 12 8.35t-1.512.638q-.638.637-.638 1.512t.638 1.512q.637.638 1.512.638ZM4.3 20.7V5.3h3.5V3h.8v2.3h6.9V3h.7v2.3h3.5v15.4ZM12 10.5ZM5.55 20H18.45Z"/>
    </Icon>
  );
});

IconMaterialPermContactCalendarW100.displayName = 'AmauiIconMaterialPermContactCalendarW100';

export default IconMaterialPermContactCalendarW100;
