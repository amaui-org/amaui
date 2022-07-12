import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialInboxOutlinedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='InboxOutlinedW100Filled'
      short_name='Inbox'

      {...props}
    >
      <path d="M5.8 19.7Q5.15 19.7 4.725 19.275Q4.3 18.85 4.3 18.2V5.8Q4.3 5.15 4.725 4.725Q5.15 4.3 5.8 4.3H18.2Q18.85 4.3 19.275 4.725Q19.7 5.15 19.7 5.8V18.2Q19.7 18.85 19.275 19.275Q18.85 19.7 18.2 19.7ZM12 16.8Q12.975 16.8 13.738 16.238Q14.5 15.675 14.8 14.8H19V5.8Q19 5.5 18.75 5.25Q18.5 5 18.2 5H5.8Q5.5 5 5.25 5.25Q5 5.5 5 5.8V14.8H9.2Q9.5 15.675 10.262 16.238Q11.025 16.8 12 16.8Z"/>
    </Icon>
  )
});

export default IconMaterialInboxOutlinedW100Filled;
