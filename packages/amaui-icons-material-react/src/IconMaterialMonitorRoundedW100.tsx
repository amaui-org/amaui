import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMonitorRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MonitorRoundedW100'
      short_name='Monitor'

      {...props}
    >
      <path d="M8.975 19.7Q8.7 19.7 8.5 19.5Q8.3 19.3 8.3 19.025Q8.3 18.825 8.4 18.587Q8.5 18.35 8.625 18.225L10.15 16.7H4.8Q4.15 16.7 3.725 16.275Q3.3 15.85 3.3 15.2V5.8Q3.3 5.15 3.725 4.725Q4.15 4.3 4.8 4.3H19.2Q19.85 4.3 20.275 4.725Q20.7 5.15 20.7 5.8V15.2Q20.7 15.85 20.275 16.275Q19.85 16.7 19.2 16.7H13.85L15.375 18.225Q15.5 18.35 15.6 18.587Q15.7 18.825 15.7 19.025Q15.7 19.3 15.5 19.5Q15.3 19.7 15.025 19.7ZM4.8 16H19.2Q19.55 16 19.775 15.775Q20 15.55 20 15.2V5.8Q20 5.45 19.775 5.225Q19.55 5 19.2 5H4.8Q4.45 5 4.225 5.225Q4 5.45 4 5.8V15.2Q4 15.55 4.225 15.775Q4.45 16 4.8 16ZM4 16Q4 16 4 15.775Q4 15.55 4 15.2V5.8Q4 5.45 4 5.225Q4 5 4 5Q4 5 4 5.225Q4 5.45 4 5.8V15.2Q4 15.55 4 15.775Q4 16 4 16Z"/>
    </Icon>
  );
});

IconMaterialMonitorRoundedW100.displayName = 'AmauiIconMaterialMonitorRoundedW100';

export default IconMaterialMonitorRoundedW100;
