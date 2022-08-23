import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMonitorHeartRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MonitorHeartRoundedW100Filled'
      short_name='MonitorHeart'

      {...props}
    >
      <path d="M4.8 18.7Q4.15 18.7 3.725 18.275Q3.3 17.85 3.3 17.2V12.35H7.775L9.675 16.15Q9.725 16.25 9.812 16.3Q9.9 16.35 10 16.35Q10.1 16.35 10.188 16.3Q10.275 16.25 10.325 16.15L14 8.8L15.675 12.15Q15.725 12.25 15.812 12.3Q15.9 12.35 16 12.35H20.7V17.2Q20.7 17.85 20.275 18.275Q19.85 18.7 19.2 18.7ZM10 15.2 8.325 11.85Q8.275 11.75 8.188 11.7Q8.1 11.65 8 11.65H3.3V6.8Q3.3 6.15 3.725 5.725Q4.15 5.3 4.8 5.3H19.2Q19.85 5.3 20.275 5.725Q20.7 6.15 20.7 6.8V11.65H16.225L14.325 7.85Q14.275 7.775 14.2 7.737Q14.125 7.7 14 7.7Q13.9 7.7 13.812 7.737Q13.725 7.775 13.675 7.85Z"/>
    </Icon>
  );
});

IconMaterialMonitorHeartRoundedW100Filled.displayName = 'AmauiIconMaterialMonitorHeartRoundedW100Filled';

export default IconMaterialMonitorHeartRoundedW100Filled;
