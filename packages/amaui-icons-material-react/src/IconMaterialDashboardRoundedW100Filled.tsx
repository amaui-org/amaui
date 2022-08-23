import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDashboardRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DashboardRoundedW100Filled'
      short_name='Dashboard'

      {...props}
    >
      <path d="M13.65 8.25V5.05Q13.65 4.725 13.863 4.512Q14.075 4.3 14.4 4.3H18.95Q19.275 4.3 19.488 4.512Q19.7 4.725 19.7 5.05V8.25Q19.7 8.575 19.488 8.787Q19.275 9 18.95 9H14.4Q14.075 9 13.863 8.787Q13.65 8.575 13.65 8.25ZM4.3 10.95V5.05Q4.3 4.725 4.513 4.512Q4.725 4.3 5.05 4.3H9.6Q9.925 4.3 10.138 4.512Q10.35 4.725 10.35 5.05V10.95Q10.35 11.275 10.138 11.487Q9.925 11.7 9.6 11.7H5.05Q4.725 11.7 4.513 11.487Q4.3 11.275 4.3 10.95ZM13.65 18.95V13.05Q13.65 12.725 13.863 12.512Q14.075 12.3 14.4 12.3H18.95Q19.275 12.3 19.488 12.512Q19.7 12.725 19.7 13.05V18.95Q19.7 19.275 19.488 19.487Q19.275 19.7 18.95 19.7H14.4Q14.075 19.7 13.863 19.487Q13.65 19.275 13.65 18.95ZM4.3 18.95V15.75Q4.3 15.425 4.513 15.212Q4.725 15 5.05 15H9.6Q9.925 15 10.138 15.212Q10.35 15.425 10.35 15.75V18.95Q10.35 19.275 10.138 19.487Q9.925 19.7 9.6 19.7H5.05Q4.725 19.7 4.513 19.487Q4.3 19.275 4.3 18.95Z"/>
    </Icon>
  );
});

IconMaterialDashboardRoundedW100Filled.displayName = 'AmauiIconMaterialDashboardRoundedW100Filled';

export default IconMaterialDashboardRoundedW100Filled;
