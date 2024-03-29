import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDesktopMac = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DesktopMac'

      short_name='DesktopMac'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9.425 22q-.675 0-.937-.613-.263-.612.212-1.087L10 19H4q-.825 0-1.412-.587Q2 17.825 2 17V5q0-.825.588-1.413Q3.175 3 4 3h16q.825 0 1.413.587Q22 4.175 22 5v12q0 .825-.587 1.413Q20.825 19 20 19h-6l1.3 1.3q.475.475.212 1.087-.262.613-.937.613ZM4 14h16V5H4Zm0 0V5v9Z"/>
    </Icon>
  );
});

IconMaterialDesktopMac.displayName = 'AmauiIconMaterialDesktopMac';

export default IconMaterialDesktopMac;
