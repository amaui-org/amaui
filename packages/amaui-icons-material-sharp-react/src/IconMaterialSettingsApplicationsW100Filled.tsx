import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsApplicationsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsApplicationsW100Filled'

      short_name='SettingsApplications'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.3 19.7V4.3h15.4v15.4Zm7.45-3.7h.5l.15-1.15q.65-.125 1.05-.35.4-.225.75-.65l1.1.45.275-.45-.875-.7q.2-.6.2-1.15 0-.55-.2-1.15l.875-.7-.275-.45-1.1.45q-.35-.425-.75-.65-.4-.225-1.05-.35L12.25 8h-.5l-.15 1.15q-.65.125-1.05.35-.4.225-.75.65L8.7 9.7l-.275.45.875.7q-.2.6-.2 1.15 0 .55.2 1.15l-.875.7.275.45 1.1-.45q.35.425.75.65.4.225 1.05.35Zm.25-2q-.825 0-1.412-.588Q10 12.825 10 12t.588-1.413Q11.175 10 12 10t1.413.587Q14 11.175 14 12q0 .825-.587 1.412Q12.825 14 12 14Z"/>
    </Icon>
  );
});

IconMaterialSettingsApplicationsW100Filled.displayName = 'AmauiIconMaterialSettingsApplicationsW100Filled';

export default IconMaterialSettingsApplicationsW100Filled;
