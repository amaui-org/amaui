import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSettingsNightSightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsNightSightW100Filled'

      short_name='SettingsNightSight'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m17 20.15-.05-.675q-.65-.125-1.05-.375t-.75-.625l-.6.325-.45-.6.575-.45q-.225-.6-.225-1.15 0-.55.225-1.15L14.1 15l.45-.6.6.325q.35-.375.75-.625t1.05-.375l.05-.675h.7l.05.675q.65.125 1.05.375t.75.625l.6-.325.45.6-.575.45q.225.6.225 1.15 0 .55-.225 1.15l.575.45-.45.6-.6-.325q-.35.375-.75.625t-1.05.375l-.05.675Zm.35-1.35q.9 0 1.55-.65t.65-1.55q0-.9-.65-1.55t-1.55-.65q-.9 0-1.55.65t-.65 1.55q0 .9.65 1.55t1.55.65Zm-4.45 1.9q-1.775-.05-3.35-.75-1.575-.7-2.738-1.9-1.162-1.2-1.837-2.775T4.3 11.9q0-2.7 1.487-4.913 1.488-2.212 3.988-3.212 0 2.3.85 4.4.85 2.1 2.475 3.725l.1.1.1.1q-.95.875-1.475 2.037Q11.3 15.3 11.3 16.6q0 1.15.413 2.2.412 1.05 1.187 1.9Z"/>
    </Icon>
  );
});

IconMaterialSettingsNightSightW100Filled.displayName = 'AmauiIconMaterialSettingsNightSightW100Filled';

export default IconMaterialSettingsNightSightW100Filled;
