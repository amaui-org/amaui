import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNightSightAutoOffSharp = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NightSightAutoOffSharp'
      short_name='NightSightAutoOff'

      {...props}
    >
      <path d="M11 21Q7.65 21 5.325 18.675Q3 16.35 3 13Q3 12.05 3.213 11.162Q3.425 10.275 3.825 9.475L5.35 11Q5.175 11.475 5.088 11.975Q5 12.475 5 13Q5 15.5 6.75 17.25Q8.5 19 11 19Q11.525 19 12.025 18.913Q12.525 18.825 13 18.65L14.525 20.175Q13.725 20.575 12.838 20.788Q11.95 21 11 21ZM19.775 22.6 1.4 4.225 2.8 2.8 6.45 6.45Q7.425 5.775 8.575 5.387Q9.725 5 11 5Q11.125 5 11.25 5.012Q11.375 5.025 11.5 5.025Q10.775 5.825 10.387 6.837Q10 7.85 10 9Q10 9.275 10.025 9.55Q10.05 9.825 10.1 10.1L14.9 14.9Q15.175 14.95 15.45 14.975Q15.725 15 16 15Q16.8 15 17.525 14.8Q18.25 14.6 18.9 14.25Q18.75 15.15 18.4 15.988Q18.05 16.825 17.55 17.55L21.2 21.2ZM13.8 11 17 2H19L22.2 11H20.3L19.6 9H16.4L15.7 11ZM16.85 7.65H19.15L18 4Z"/>
    </Icon>
  );
});

IconMaterialNightSightAutoOffSharp.displayName = 'AmauiIconMaterialNightSightAutoOffSharp';

export default IconMaterialNightSightAutoOffSharp;
