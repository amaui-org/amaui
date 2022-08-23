import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCallReceivedRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallReceivedRoundedFilled'
      short_name='CallReceived'

      {...props}
    >
      <path d="M6 20Q5.575 20 5.287 19.712Q5 19.425 5 19V11Q5 10.575 5.287 10.287Q5.575 10 6 10Q6.425 10 6.713 10.287Q7 10.575 7 11V16.6L17.925 5.675Q18.2 5.4 18.6 5.4Q19 5.4 19.3 5.7Q19.575 5.975 19.575 6.4Q19.575 6.825 19.3 7.1L8.4 18H14Q14.425 18 14.713 18.288Q15 18.575 15 19Q15 19.425 14.713 19.712Q14.425 20 14 20Z"/>
    </Icon>
  );
});

IconMaterialCallReceivedRoundedFilled.displayName = 'AmauiIconMaterialCallReceivedRoundedFilled';

export default IconMaterialCallReceivedRoundedFilled;
