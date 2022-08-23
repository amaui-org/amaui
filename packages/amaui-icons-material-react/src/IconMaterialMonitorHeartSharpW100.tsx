import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMonitorHeartSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MonitorHeartSharpW100'
      short_name='MonitorHeart'

      {...props}
    >
      <path d="M3.3 9.65V5.3H20.7V9.65H20V6H4V9.65ZM3.3 18.7V14.35H4V18H20V14.35H20.7V18.7ZM10 16.35Q10.1 16.35 10.188 16.3Q10.275 16.25 10.325 16.15L14 8.8L15.675 12.15Q15.725 12.25 15.812 12.3Q15.9 12.35 16 12.35H20.7V11.65H16.225L14.325 7.85Q14.25 7.7 14 7.7Q13.75 7.7 13.675 7.85L10 15.2L8.325 11.85Q8.275 11.75 8.188 11.7Q8.1 11.65 8 11.65H3.3V12.35H7.775L9.675 16.15Q9.725 16.25 9.812 16.3Q9.9 16.35 10 16.35ZM12 12Z"/>
    </Icon>
  );
});

IconMaterialMonitorHeartSharpW100.displayName = 'AmauiIconMaterialMonitorHeartSharpW100';

export default IconMaterialMonitorHeartSharpW100;
