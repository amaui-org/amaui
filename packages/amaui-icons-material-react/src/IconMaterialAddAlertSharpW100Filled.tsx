import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialAddAlertSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddAlertSharpW100Filled'
      short_name='AddAlert'

      {...props}
    >
      <path d="M11.65 14.65H12.35V12.65H14.35V11.95H12.35V9.95H11.65V11.95H9.65V12.65H11.65ZM4.65 18.65V17.95H6.65V10.3Q6.65 8.425 7.9 6.887Q9.15 5.35 11.15 5V3.45H12.85V5Q14.85 5.35 16.1 6.887Q17.35 8.425 17.35 10.3V17.95H19.35V18.65ZM12 21.5Q11.4 21.5 10.95 21.075Q10.5 20.65 10.5 20H13.5Q13.5 20.65 13.075 21.075Q12.65 21.5 12 21.5Z"/>
    </Icon>
  );
});

IconMaterialAddAlertSharpW100Filled.displayName = 'AmauiIconMaterialAddAlertSharpW100Filled';

export default IconMaterialAddAlertSharpW100Filled;
