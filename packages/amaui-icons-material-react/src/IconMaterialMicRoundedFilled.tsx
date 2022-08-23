import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMicRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MicRoundedFilled'
      short_name='Mic'

      {...props}
    >
      <path d="M12 14Q10.75 14 9.875 13.125Q9 12.25 9 11V5Q9 3.75 9.875 2.875Q10.75 2 12 2Q13.25 2 14.125 2.875Q15 3.75 15 5V11Q15 12.25 14.125 13.125Q13.25 14 12 14ZM12 21Q11.575 21 11.288 20.712Q11 20.425 11 20V17.9Q8.675 17.6 7.05 15.975Q5.425 14.35 5.075 12.075Q5 11.65 5.3 11.325Q5.6 11 6.1 11Q6.45 11 6.725 11.262Q7 11.525 7.075 11.9Q7.4 13.65 8.775 14.825Q10.15 16 12 16Q13.85 16 15.225 14.825Q16.6 13.65 16.925 11.9Q17 11.525 17.288 11.262Q17.575 11 17.925 11Q18.4 11 18.7 11.325Q19 11.65 18.925 12.075Q18.575 14.35 16.95 15.975Q15.325 17.6 13 17.9V20Q13 20.425 12.713 20.712Q12.425 21 12 21Z"/>
    </Icon>
  );
});

IconMaterialMicRoundedFilled.displayName = 'AmauiIconMaterialMicRoundedFilled';

export default IconMaterialMicRoundedFilled;
