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
      <path d="M5.55 20h12.9v-.15q-1.4-1.35-3.037-2-1.638-.65-3.413-.65-1.725 0-3.375.637-1.65.638-3.075 1.963ZM5 19.35q1.35-1.325 3.138-2.088Q9.925 16.5 12 16.5t3.863.762q1.787.763 3.137 2.088V6.8q0-.35-.225-.575Q18.55 6 18.2 6H5.8q-.35 0-.575.225Q5 6.45 5 6.8Zm7-6q-1.2 0-2.025-.825T9.15 10.5q0-1.2.825-2.025T12 7.65q1.2 0 2.025.825t.825 2.025q0 1.2-.825 2.025T12 13.35Zm0-.7q.875 0 1.512-.638.638-.637.638-1.512t-.638-1.512Q12.875 8.35 12 8.35t-1.512.638q-.638.637-.638 1.512t.638 1.512q.637.638 1.512.638ZM5.8 20.7q-.65 0-1.075-.425Q4.3 19.85 4.3 19.2V6.8q0-.65.425-1.075Q5.15 5.3 5.8 5.3h2V3.4q0-.175.113-.288Q8.025 3 8.2 3t.288.112q.112.113.112.288v1.9h6.9V3.35q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25V5.3h2q.65 0 1.075.425.425.425.425 1.075v12.4q0 .65-.425 1.075-.425.425-1.075.425ZM12 10.5ZM5.55 20H18.45Z"/>
    </Icon>
  );
});

IconMaterialPermContactCalendarW100.displayName = 'AmauiIconMaterialPermContactCalendarW100';

export default IconMaterialPermContactCalendarW100;
