import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialModeOfTravelSharpFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ModeOfTravelSharpFilled'
      short_name='ModeOfTravel'

      {...props}
    >
      <path d="M12 22Q7.975 18.575 5.988 15.637Q4 12.7 4 10.2Q4 6.45 6.413 4.225Q8.825 2 12 2Q15.175 2 17.587 4.225Q20 6.45 20 10.2L22.1 8.1L23.5 9.5L19 14L14.5 9.5L15.9 8.1L18 10.2Q18 7.475 16.262 5.737Q14.525 4 12 4Q9.475 4 7.737 5.737Q6 7.475 6 10.2Q6 11.975 7.475 14.262Q8.95 16.55 12 19.35Q12.5 18.9 12.925 18.475Q13.35 18.05 13.775 17.625Q13.65 17.375 13.575 17.087Q13.5 16.8 13.5 16.5Q13.5 15.45 14.225 14.725Q14.95 14 16 14Q17.05 14 17.775 14.725Q18.5 15.45 18.5 16.5Q18.5 17.55 17.775 18.275Q17.05 19 16 19Q15.8 19 15.638 18.975Q15.475 18.95 15.3 18.9Q14.575 19.65 13.763 20.425Q12.95 21.2 12 22Z"/>
    </Icon>
  );
});

IconMaterialModeOfTravelSharpFilled.displayName = 'AmauiIconMaterialModeOfTravelSharpFilled';

export default IconMaterialModeOfTravelSharpFilled;
