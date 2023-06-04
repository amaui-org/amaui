import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCampaignW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CampaignW100'

      short_name='Campaign'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M17.9 12.35v-.7h3v.7Zm1.05 6.3-2.4-1.8.45-.55 2.4 1.8ZM16.9 7.6l-.45-.55 2.4-1.8.45.55ZM5.65 17.65V13.9H3.1v-3.8h5.15l3.65-2.15v8.1L8.25 13.9h-1.9v3.75ZM7.5 12Zm6.4 2.75v-5.5q.45.425.725 1.15.275.725.275 1.6 0 .875-.275 1.6-.275.725-.725 1.15ZM3.8 13.2h4.65l2.75 1.6V9.2l-2.75 1.6H3.8Z"/>
    </Icon>
  );
});

IconMaterialCampaignW100.displayName = 'AmauiIconMaterialCampaignW100';

export default IconMaterialCampaignW100;
