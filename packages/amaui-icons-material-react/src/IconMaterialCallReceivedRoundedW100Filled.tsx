import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCallReceivedRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallReceivedRoundedW100Filled'
      short_name='CallReceived'

      {...props}
    >
      <path d="M6.65 19.1Q6.325 19.1 6.113 18.888Q5.9 18.675 5.9 18.35V10.75Q5.9 10.6 6 10.5Q6.1 10.4 6.25 10.4Q6.4 10.4 6.5 10.5Q6.6 10.6 6.6 10.75V17.9L18.625 5.875Q18.725 5.775 18.85 5.775Q18.975 5.775 19.1 5.9Q19.225 6.025 19.225 6.15Q19.225 6.275 19.1 6.4L7.1 18.4H14.25Q14.4 18.4 14.5 18.5Q14.6 18.6 14.6 18.75Q14.6 18.9 14.5 19Q14.4 19.1 14.25 19.1Z"/>
    </Icon>
  );
});

IconMaterialCallReceivedRoundedW100Filled.displayName = 'AmauiIconMaterialCallReceivedRoundedW100Filled';

export default IconMaterialCallReceivedRoundedW100Filled;
