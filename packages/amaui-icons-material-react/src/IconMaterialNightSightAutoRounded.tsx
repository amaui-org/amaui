import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNightSightAutoRounded = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NightSightAutoRounded'
      short_name='NightSightAuto'

      {...props}
    >
      <path d="M11 19Q12.35 19 13.513 18.462Q14.675 17.925 15.5 16.975Q12.35 16.775 10.175 14.487Q8 12.2 8 9Q8 8.675 8.025 8.362Q8.05 8.05 8.1 7.75Q6.7 8.525 5.85 9.912Q5 11.3 5 13Q5 15.5 6.75 17.25Q8.5 19 11 19ZM11 21Q7.65 21 5.325 18.675Q3 16.35 3 13Q3 9.65 5.325 7.325Q7.65 5 11 5Q11.125 5 11.25 5.012Q11.375 5.025 11.5 5.025Q10.775 5.825 10.387 6.837Q10 7.85 10 9Q10 11.5 11.75 13.25Q13.5 15 16 15Q16.8 15 17.525 14.8Q18.25 14.6 18.9 14.25Q18.45 17.125 16.238 19.062Q14.025 21 11 21ZM13.8 11 17 2H19L22.2 11H20.3L19.6 9H16.4L15.7 11ZM16.85 7.65H19.15L18 4Z"/>
    </Icon>
  );
});

IconMaterialNightSightAutoRounded.displayName = 'AmauiIconMaterialNightSightAutoRounded';

export default IconMaterialNightSightAutoRounded;
