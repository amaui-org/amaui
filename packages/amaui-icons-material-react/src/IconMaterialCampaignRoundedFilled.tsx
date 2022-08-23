import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCampaignRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CampaignRoundedFilled'
      short_name='Campaign'

      {...props}
    >
      <path d="M19 13Q18.575 13 18.288 12.712Q18 12.425 18 12Q18 11.575 18.288 11.287Q18.575 11 19 11H21Q21.425 11 21.712 11.287Q22 11.575 22 12Q22 12.425 21.712 12.712Q21.425 13 21 13ZM18.4 19.4 16.8 18.2Q16.45 17.95 16.4 17.55Q16.35 17.15 16.6 16.8Q16.85 16.45 17.25 16.4Q17.65 16.35 18 16.6L19.6 17.8Q19.95 18.05 20 18.45Q20.05 18.85 19.8 19.2Q19.55 19.55 19.15 19.6Q18.75 19.65 18.4 19.4ZM18 7.4Q17.65 7.65 17.25 7.6Q16.85 7.55 16.6 7.2Q16.35 6.85 16.4 6.45Q16.45 6.05 16.8 5.8L18.4 4.6Q18.75 4.35 19.15 4.4Q19.55 4.45 19.8 4.8Q20.05 5.15 20 5.55Q19.95 5.95 19.6 6.2ZM5 19V15H4Q3.175 15 2.588 14.412Q2 13.825 2 13V11Q2 10.175 2.588 9.587Q3.175 9 4 9H8L11.475 6.9Q11.975 6.6 12.488 6.9Q13 7.2 13 7.775V16.225Q13 16.8 12.488 17.1Q11.975 17.4 11.475 17.1L8 15H7V19ZM14 15.35V8.65Q14.675 9.25 15.088 10.113Q15.5 10.975 15.5 12Q15.5 13.025 15.088 13.887Q14.675 14.75 14 15.35Z"/>
    </Icon>
  );
});

IconMaterialCampaignRoundedFilled.displayName = 'AmauiIconMaterialCampaignRoundedFilled';

export default IconMaterialCampaignRoundedFilled;
