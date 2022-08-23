import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialTeamDashboardRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='TeamDashboardRoundedW100Filled'
      short_name='TeamDashboard'

      {...props}
    >
      <path d="M5.8 19.7Q5.175 19.7 4.738 19.262Q4.3 18.825 4.3 18.2V5.8Q4.3 5.175 4.738 4.737Q5.175 4.3 5.8 4.3H18.2Q18.825 4.3 19.263 4.737Q19.7 5.175 19.7 5.8V18.2Q19.7 18.825 19.263 19.262Q18.825 19.7 18.2 19.7ZM10.65 19V12.35H5V18.2Q5 18.55 5.225 18.775Q5.45 19 5.8 19ZM11.35 19H18.2Q18.55 19 18.775 18.775Q19 18.55 19 18.2V12.35H11.35ZM5 11.65H19V5.8Q19 5.45 18.775 5.225Q18.55 5 18.2 5H5.8Q5.45 5 5.225 5.225Q5 5.45 5 5.8Z"/>
    </Icon>
  );
});

IconMaterialTeamDashboardRoundedW100Filled.displayName = 'AmauiIconMaterialTeamDashboardRoundedW100Filled';

export default IconMaterialTeamDashboardRoundedW100Filled;
