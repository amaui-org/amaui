import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSmartDisplayFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SmartDisplayFilled'

      short_name='SmartDisplay'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="m11.05 15.5 4.15-2.65q.475-.3.475-.85t-.475-.85L11.05 8.5q-.5-.35-1.025-.05-.525.3-.525.875v5.35q0 .575.525.875.525.3 1.025-.05ZM4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v12q0 .825-.587 1.413Q20.825 20 20 20Z"/>
    </Icon>
  );
});

IconMaterialSmartDisplayFilled.displayName = 'AmauiIconMaterialSmartDisplayFilled';

export default IconMaterialSmartDisplayFilled;
