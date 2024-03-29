import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCampaign = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Campaign'

      short_name='Campaign'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19 13q-.425 0-.712-.288Q18 12.425 18 12t.288-.713Q18.575 11 19 11h2q.425 0 .712.287.288.288.288.713t-.288.712Q21.425 13 21 13Zm-.6 6.4-1.6-1.2q-.35-.25-.4-.65-.05-.4.2-.75t.65-.4q.4-.05.75.2l1.6 1.2q.35.25.4.65.05.4-.2.75t-.65.4q-.4.05-.75-.2Zm-.4-12q-.35.25-.75.2-.4-.05-.65-.4-.25-.35-.2-.75.05-.4.4-.65l1.6-1.2q.35-.25.75-.2.4.05.65.4.25.35.2.75-.05.4-.4.65ZM5 19v-4H4q-.825 0-1.412-.588Q2 13.825 2 13v-2q0-.825.588-1.413Q3.175 9 4 9h4l3.475-2.1q.5-.3 1.013 0 .512.3.512.875v8.45q0 .575-.512.875-.513.3-1.013 0L8 15H7v4Zm2.5-7Zm6.5 3.35v-6.7q.675.6 1.088 1.463.412.862.412 1.887t-.412 1.887q-.413.863-1.088 1.463Zm-3-.9v-4.9L8.55 11H4v2h4.55Z"/>
    </Icon>
  );
});

IconMaterialCampaign.displayName = 'AmauiIconMaterialCampaign';

export default IconMaterialCampaign;
