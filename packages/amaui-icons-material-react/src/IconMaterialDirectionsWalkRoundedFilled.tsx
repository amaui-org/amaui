import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialDirectionsWalkRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsWalkRoundedFilled'
      short_name='DirectionsWalk'

      {...props}
    >
      <path d="M13.5 5.5Q12.675 5.5 12.088 4.912Q11.5 4.325 11.5 3.5Q11.5 2.675 12.088 2.087Q12.675 1.5 13.5 1.5Q14.325 1.5 14.913 2.087Q15.5 2.675 15.5 3.5Q15.5 4.325 14.913 4.912Q14.325 5.5 13.5 5.5ZM8.325 23Q7.775 23 7.45 22.613Q7.125 22.225 7.25 21.7L9.8 8.9L8 9.6Q8 9.6 8 9.6Q8 9.6 8 9.6V12Q8 12.425 7.713 12.712Q7.425 13 7 13Q6.575 13 6.287 12.712Q6 12.425 6 12V9.625Q6 9.025 6.325 8.525Q6.65 8.025 7.225 7.775L11.05 6.15Q11.775 5.85 12.525 6.087Q13.275 6.325 13.7 7L14.7 8.6Q15.25 9.475 16.125 10.1Q17 10.725 18.125 10.925Q18.5 10.975 18.75 11.262Q19 11.55 19 11.9Q19 12.375 18.663 12.688Q18.325 13 17.9 12.925Q16.575 12.725 15.438 12.087Q14.3 11.45 13.5 10.5L12.9 13.5L14.375 14.9Q14.675 15.2 14.838 15.562Q15 15.925 15 16.35V22Q15 22.425 14.713 22.712Q14.425 23 14 23Q13.575 23 13.288 22.712Q13 22.425 13 22V17L10.9 15L9.275 22.25Q9.2 22.55 8.938 22.775Q8.675 23 8.325 23Z"/>
    </Icon>
  );
});

IconMaterialDirectionsWalkRoundedFilled.displayName = 'AmauiIconMaterialDirectionsWalkRoundedFilled';

export default IconMaterialDirectionsWalkRoundedFilled;
