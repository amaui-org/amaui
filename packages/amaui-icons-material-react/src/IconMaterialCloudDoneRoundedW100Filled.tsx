import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCloudDoneRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloudDoneRoundedW100Filled'
      short_name='CloudDone'

      {...props}
    >
      <path d="M6.5 18.7Q4.75 18.7 3.525 17.475Q2.3 16.25 2.3 14.5Q2.3 12.775 3.538 11.537Q4.775 10.3 6.35 10.3Q6.6 8.15 8.213 6.725Q9.825 5.3 12 5.3Q14.375 5.3 16.038 6.963Q17.7 8.625 17.7 11V12.3H18.5Q19.85 12.3 20.775 13.225Q21.7 14.15 21.7 15.5Q21.7 16.85 20.775 17.775Q19.85 18.7 18.5 18.7ZM10.35 15.8Q10.5 15.8 10.625 15.75Q10.75 15.7 10.875 15.575L14.85 11.6Q14.975 11.475 14.975 11.35Q14.975 11.225 14.85 11.1Q14.725 10.975 14.6 10.975Q14.475 10.975 14.35 11.1L10.35 15.1L8.45 13.2Q8.325 13.075 8.2 13.075Q8.075 13.075 7.95 13.2Q7.825 13.325 7.825 13.45Q7.825 13.575 7.95 13.7L9.825 15.575Q9.95 15.7 10.075 15.75Q10.2 15.8 10.35 15.8Z"/>
    </Icon>
  );
});

IconMaterialCloudDoneRoundedW100Filled.displayName = 'AmauiIconMaterialCloudDoneRoundedW100Filled';

export default IconMaterialCloudDoneRoundedW100Filled;
