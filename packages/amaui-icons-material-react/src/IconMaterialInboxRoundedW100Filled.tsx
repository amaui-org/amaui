import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialInboxRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='InboxRoundedW100Filled'
      short_name='Inbox'

      {...props}
    >
      <path d="M5.8 19.7Q5.15 19.7 4.725 19.275Q4.3 18.85 4.3 18.2V5.8Q4.3 5.15 4.725 4.725Q5.15 4.3 5.8 4.3H18.2Q18.85 4.3 19.275 4.725Q19.7 5.15 19.7 5.8V18.2Q19.7 18.85 19.275 19.275Q18.85 19.7 18.2 19.7ZM12 16.8Q12.825 16.8 13.525 16.387Q14.225 15.975 14.55 15.275Q14.675 15.025 14.85 14.912Q15.025 14.8 15.425 14.8H19V5.8Q19 5.45 18.775 5.225Q18.55 5 18.2 5H5.8Q5.45 5 5.225 5.225Q5 5.45 5 5.8V14.8H8.575Q8.975 14.8 9.15 14.912Q9.325 15.025 9.45 15.275Q9.775 15.975 10.475 16.387Q11.175 16.8 12 16.8Z"/>
    </Icon>
  );
});

IconMaterialInboxRoundedW100Filled.displayName = 'AmauiIconMaterialInboxRoundedW100Filled';

export default IconMaterialInboxRoundedW100Filled;
