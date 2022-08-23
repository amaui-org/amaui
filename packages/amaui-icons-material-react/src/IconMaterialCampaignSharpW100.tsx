import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCampaignSharpW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CampaignSharpW100'
      short_name='Campaign'

      {...props}
    >
      <path d="M17.9 12.35V11.65H20.9V12.35ZM18.95 18.65 16.55 16.85 17 16.3 19.4 18.1ZM16.9 7.6 16.45 7.05 18.85 5.25 19.3 5.8ZM5.65 17.65V13.9H3.1V10.1H8.25L11.9 7.95V16.05L8.25 13.9H6.35V17.65ZM7.5 12ZM13.9 14.75V9.25Q14.35 9.675 14.625 10.4Q14.9 11.125 14.9 12Q14.9 12.875 14.625 13.6Q14.35 14.325 13.9 14.75ZM3.8 13.2H8.45L11.2 14.8V9.2L8.45 10.8H3.8Z"/>
    </Icon>
  );
});

IconMaterialCampaignSharpW100.displayName = 'AmauiIconMaterialCampaignSharpW100';

export default IconMaterialCampaignSharpW100;
