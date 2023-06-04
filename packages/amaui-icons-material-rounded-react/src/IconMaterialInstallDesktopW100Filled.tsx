import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialInstallDesktopW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='InstallDesktopW100Filled'

      short_name='InstallDesktop'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.925 19.7q-.325 0-.537-.213-.213-.212-.213-.537V17.7h-4.5q-.625 0-1.063-.438-.437-.437-.437-1.062V5.8q0-.625.437-1.063Q4.05 4.3 4.675 4.3h7.3V5h-7.3q-.35 0-.575.225-.225.225-.225.575v10.4q0 .35.225.575.225.225.575.225h14.4q.35 0 .575-.225.225-.225.225-.575v-1.55h.7v1.55q0 .625-.437 1.062-.438.438-1.063.438h-4.5v1.25q0 .325-.212.537-.213.213-.538.213Zm6.95-6.975q-.15 0-.275-.05-.125-.05-.25-.175L13 9.175q-.1-.1-.1-.25t.1-.25q.1-.1.25-.1t.25.1l3.025 3.05V4.65q0-.15.1-.25t.25-.1q.15 0 .25.1t.1.25v7.075l3.025-3.05q.1-.1.25-.1t.25.1q.1.1.1.25t-.1.25L17.4 12.5q-.125.125-.25.175-.125.05-.275.05Z"/>
    </Icon>
  );
});

IconMaterialInstallDesktopW100Filled.displayName = 'AmauiIconMaterialInstallDesktopW100Filled';

export default IconMaterialInstallDesktopW100Filled;
