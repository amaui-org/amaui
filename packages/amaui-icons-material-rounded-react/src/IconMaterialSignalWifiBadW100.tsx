import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSignalWifiBadW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalWifiBadW100'

      short_name='SignalWifiBad'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 18.85q-.15 0-.275-.05-.125-.05-.25-.175L2.35 9.5q-.2-.2-.2-.488 0-.287.225-.462Q4.4 6.975 6.825 6.137 9.25 5.3 12 5.3t5.175.837q2.425.838 4.45 2.413.225.175.225.462 0 .288-.2.488l-2.5 2.5H13.5q-.625 0-1.062.438Q12 12.875 12 13.5Zm2.65.5q-.125-.125-.125-.25t.125-.25L16.5 17l-1.85-1.85q-.125-.125-.125-.25t.125-.25q.125-.125.25-.125t.25.125L17 16.5l1.85-1.85q.125-.125.25-.125t.25.125q.125.125.125.25t-.125.25L17.5 17l1.85 1.85q.125.125.125.25t-.125.25q-.125.125-.25.125t-.25-.125L17 17.5l-1.85 1.85q-.125.125-.25.125t-.25-.125Z"/>
    </Icon>
  );
});

IconMaterialSignalWifiBadW100.displayName = 'AmauiIconMaterialSignalWifiBadW100';

export default IconMaterialSignalWifiBadW100;
