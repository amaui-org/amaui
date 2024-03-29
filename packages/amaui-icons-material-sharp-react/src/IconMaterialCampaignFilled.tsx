import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCampaignFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CampaignFilled'

      short_name='Campaign'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18 13v-2h4v2Zm1.2 7L16 17.6l1.2-1.6 3.2 2.4Zm-2-12L16 6.4 19.2 4l1.2 1.6ZM5 19v-4H2V9h6l5-3v12l-5-3H7v4Zm6-4.55L8.55 13H4v-2h4.55L11 9.55Zm3 .9v-6.7q.675.6 1.088 1.463.412.862.412 1.887t-.412 1.887q-.413.863-1.088 1.463ZM4 13h4.55L11 14.45v-4.9L8.55 11H4Z"/>
    </Icon>
  );
});

IconMaterialCampaignFilled.displayName = 'AmauiIconMaterialCampaignFilled';

export default IconMaterialCampaignFilled;
