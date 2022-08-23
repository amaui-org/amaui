import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCallMissedOutgoingRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallMissedOutgoingRoundedFilled'
      short_name='CallMissedOutgoing'

      {...props}
    >
      <path d="M12 17Q11.8 17 11.625 16.938Q11.45 16.875 11.3 16.725L3.7 9.125Q3.425 8.85 3.413 8.438Q3.4 8.025 3.7 7.725Q3.975 7.425 4.388 7.412Q4.8 7.4 5.1 7.7L12 14.6L17.6 9H14Q13.575 9 13.288 8.712Q13 8.425 13 8Q13 7.575 13.288 7.287Q13.575 7 14 7H20Q20.425 7 20.712 7.287Q21 7.575 21 8V14Q21 14.425 20.712 14.712Q20.425 15 20 15Q19.575 15 19.288 14.712Q19 14.425 19 14V10.425L12.7 16.725Q12.55 16.875 12.375 16.938Q12.2 17 12 17Z"/>
    </Icon>
  );
});

IconMaterialCallMissedOutgoingRoundedFilled.displayName = 'AmauiIconMaterialCallMissedOutgoingRoundedFilled';

export default IconMaterialCallMissedOutgoingRoundedFilled;
