import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCloudSyncSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloudSyncSharpFilled'
      short_name='CloudSync'

      {...props}
    >
      <path d="M15 20Q13.75 20 12.875 19.125Q12 18.25 12 17Q12 15.8 12.825 14.938Q13.65 14.075 14.85 14.025Q15.275 13.125 16.113 12.562Q16.95 12 18 12Q19.325 12 20.288 12.863Q21.25 13.725 21.45 15Q22.5 15 23.25 15.725Q24 16.45 24 17.475Q24 18.525 23.275 19.262Q22.55 20 21.5 20ZM4 20V18H6.725Q5.45 16.9 4.725 15.35Q4 13.8 4 12Q4 9.2 5.7 7.062Q7.4 4.925 10 4.25V6.35Q8.25 6.975 7.125 8.512Q6 10.05 6 12Q6 13.35 6.537 14.488Q7.075 15.625 8 16.45V14H10V20ZM17.9 11Q17.725 9.975 17.225 9.1Q16.725 8.225 16 7.55V10H14V4H20V6H17.275Q18.35 6.95 19.038 8.225Q19.725 9.5 19.925 11Z"/>
    </Icon>
  );
});

IconMaterialCloudSyncSharpFilled.displayName = 'AmauiIconMaterialCloudSyncSharpFilled';

export default IconMaterialCloudSyncSharpFilled;
