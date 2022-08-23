import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSpeakerGroupRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpeakerGroupRoundedFilled'
      short_name='SpeakerGroup'

      {...props}
    >
      <path d="M10 19Q9.175 19 8.588 18.413Q8 17.825 8 17V3Q8 2.175 8.588 1.587Q9.175 1 10 1H19Q19.825 1 20.413 1.587Q21 2.175 21 3V17Q21 17.825 20.413 18.413Q19.825 19 19 19ZM14.5 7.5Q15.125 7.5 15.562 7.062Q16 6.625 16 6Q16 5.375 15.562 4.938Q15.125 4.5 14.5 4.5Q13.875 4.5 13.438 4.938Q13 5.375 13 6Q13 6.625 13.438 7.062Q13.875 7.5 14.5 7.5ZM14.5 16Q15.95 16 16.975 14.975Q18 13.95 18 12.5Q18 11.05 16.975 10.025Q15.95 9 14.5 9Q13.05 9 12.025 10.025Q11 11.05 11 12.5Q11 13.95 12.025 14.975Q13.05 16 14.5 16ZM14.5 14Q13.875 14 13.438 13.562Q13 13.125 13 12.5Q13 11.875 13.438 11.438Q13.875 11 14.5 11Q15.125 11 15.562 11.438Q16 11.875 16 12.5Q16 13.125 15.562 13.562Q15.125 14 14.5 14ZM6 23Q5.175 23 4.588 22.413Q4 21.825 4 21V6Q4 5.575 4.287 5.287Q4.575 5 5 5Q5.425 5 5.713 5.287Q6 5.575 6 6V21Q6 21 6 21Q6 21 6 21H15Q15.425 21 15.713 21.288Q16 21.575 16 22Q16 22.425 15.713 22.712Q15.425 23 15 23Z"/>
    </Icon>
  );
});

IconMaterialSpeakerGroupRoundedFilled.displayName = 'AmauiIconMaterialSpeakerGroupRoundedFilled';

export default IconMaterialSpeakerGroupRoundedFilled;
