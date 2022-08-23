import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCampaignSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CampaignSharp'
      short_name='Campaign'

      {...props}
    >
      <path d="M18 13V11H22V13ZM19.2 20 16 17.6 17.2 16 20.4 18.4ZM17.2 8 16 6.4 19.2 4 20.4 5.6ZM5 19V15H2V9H8L13 6V18L8 15H7V19ZM7.5 12ZM14 15.35V8.65Q14.675 9.25 15.088 10.113Q15.5 10.975 15.5 12Q15.5 13.025 15.088 13.887Q14.675 14.75 14 15.35ZM4 13H8.55L11 14.45V9.55L8.55 11H4Z"/>
    </Icon>
  );
});

IconMaterialCampaignSharp.displayName = 'AmauiIconMaterialCampaignSharp';

export default IconMaterialCampaignSharp;
