import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialEmergencyRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmergencyRoundedFilled'
      short_name='Emergency'

      {...props}
    >
      <path d="M11 21Q10.575 21 10.288 20.712Q10 20.425 10 20V15.45L6.075 17.75Q5.725 17.95 5.312 17.85Q4.9 17.75 4.7 17.375L3.7 15.65Q3.5 15.3 3.6 14.887Q3.7 14.475 4.075 14.275L8 12L4.075 9.725Q3.7 9.525 3.6 9.112Q3.5 8.7 3.7 8.35L4.7 6.625Q4.9 6.275 5.3 6.175Q5.7 6.075 6.075 6.275L10 8.55V4Q10 3.575 10.288 3.287Q10.575 3 11 3H13Q13.425 3 13.713 3.287Q14 3.575 14 4V8.55L17.925 6.275Q18.275 6.075 18.688 6.175Q19.1 6.275 19.3 6.65L20.3 8.35Q20.5 8.7 20.388 9.112Q20.275 9.525 19.925 9.725L16 12L19.925 14.25Q20.3 14.45 20.4 14.863Q20.5 15.275 20.3 15.625L19.3 17.375Q19.1 17.725 18.688 17.825Q18.275 17.925 17.925 17.725L14 15.45V20Q14 20.425 13.713 20.712Q13.425 21 13 21Z"/>
    </Icon>
  );
});

IconMaterialEmergencyRoundedFilled.displayName = 'AmauiIconMaterialEmergencyRoundedFilled';

export default IconMaterialEmergencyRoundedFilled;
