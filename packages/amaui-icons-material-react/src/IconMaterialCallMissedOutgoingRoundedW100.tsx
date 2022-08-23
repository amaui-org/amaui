import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCallMissedOutgoingRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallMissedOutgoingRoundedW100'
      short_name='CallMissedOutgoing'

      {...props}
    >
      <path d="M11.875 16.2Q11.725 16.2 11.6 16.15Q11.475 16.1 11.35 15.975L4 8.625Q3.9 8.525 3.9 8.4Q3.9 8.275 4.025 8.15Q4.15 8.025 4.275 8.025Q4.4 8.025 4.525 8.15L11.875 15.5L19.025 8.35H13.875Q13.725 8.35 13.625 8.25Q13.525 8.15 13.525 8Q13.525 7.85 13.625 7.75Q13.725 7.65 13.875 7.65H19.475Q19.8 7.65 20.013 7.862Q20.225 8.075 20.225 8.4V14Q20.225 14.15 20.125 14.25Q20.025 14.35 19.875 14.35Q19.725 14.35 19.625 14.25Q19.525 14.15 19.525 14V8.85L12.4 15.975Q12.275 16.1 12.15 16.15Q12.025 16.2 11.875 16.2Z"/>
    </Icon>
  );
});

IconMaterialCallMissedOutgoingRoundedW100.displayName = 'AmauiIconMaterialCallMissedOutgoingRoundedW100';

export default IconMaterialCallMissedOutgoingRoundedW100;
