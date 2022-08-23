import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMonitorRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MonitorRoundedFilled'
      short_name='Monitor'

      {...props}
    >
      <path d="M7.425 21Q6.85 21 6.425 20.575Q6 20.15 6 19.575Q6 19.35 6.113 19.062Q6.225 18.775 6.4 18.6L7 18H4Q3.175 18 2.588 17.413Q2 16.825 2 16V5Q2 4.175 2.588 3.587Q3.175 3 4 3H20Q20.825 3 21.413 3.587Q22 4.175 22 5V16Q22 16.825 21.413 17.413Q20.825 18 20 18H17L17.6 18.6Q17.775 18.775 17.888 19.05Q18 19.325 18 19.575Q18 20.15 17.575 20.575Q17.15 21 16.575 21Z"/>
    </Icon>
  );
});

IconMaterialMonitorRoundedFilled.displayName = 'AmauiIconMaterialMonitorRoundedFilled';

export default IconMaterialMonitorRoundedFilled;
