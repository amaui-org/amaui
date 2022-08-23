import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMonitorHeartSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MonitorHeartSharpW100Filled'
      short_name='MonitorHeart'

      {...props}
    >
      <path d="M3.3 18.7V12.35H7.775L9.675 16.15Q9.725 16.25 9.812 16.3Q9.9 16.35 10 16.35Q10.1 16.35 10.188 16.3Q10.275 16.25 10.325 16.15L14 8.8L15.675 12.15Q15.725 12.25 15.812 12.3Q15.9 12.35 16 12.35H20.7V18.7ZM10 15.2 8.325 11.85Q8.275 11.75 8.2 11.7Q8.125 11.65 8 11.65H3.3V5.3H20.7V11.65H16.225L14.325 7.85Q14.275 7.775 14.2 7.737Q14.125 7.7 14.025 7.7Q13.9 7.7 13.812 7.737Q13.725 7.775 13.675 7.85Z"/>
    </Icon>
  );
});

IconMaterialMonitorHeartSharpW100Filled.displayName = 'AmauiIconMaterialMonitorHeartSharpW100Filled';

export default IconMaterialMonitorHeartSharpW100Filled;
