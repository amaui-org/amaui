import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMicOffSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MicOffSharpFilled'
      short_name='MicOff'

      {...props}
    >
      <path d="M17.75 14.95 16.3 13.5Q16.65 12.925 16.825 12.3Q17 11.675 17 11H19Q19 12.1 18.675 13.087Q18.35 14.075 17.75 14.95ZM14.8 11.95 9 6.15V5Q9 3.75 9.875 2.875Q10.75 2 12 2Q13.25 2 14.125 2.875Q15 3.75 15 5V11Q15 11.275 14.938 11.5Q14.875 11.725 14.8 11.95ZM19.8 22.6 14.65 17.45Q14.225 17.6 13.825 17.725Q13.425 17.85 13 17.9V21H11V17.9Q8.425 17.525 6.713 15.587Q5 13.65 5 11H7Q7 13.075 8.463 14.537Q9.925 16 12 16Q12.275 16 12.525 15.962Q12.775 15.925 13.05 15.85L1.4 4.2L2.8 2.8L21.2 21.2Z"/>
    </Icon>
  );
});

IconMaterialMicOffSharpFilled.displayName = 'AmauiIconMaterialMicOffSharpFilled';

export default IconMaterialMicOffSharpFilled;
