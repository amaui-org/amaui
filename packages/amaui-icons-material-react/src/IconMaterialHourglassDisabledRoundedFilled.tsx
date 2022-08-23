import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHourglassDisabledRoundedFilled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HourglassDisabledRoundedFilled'
      short_name='HourglassDisabled'

      {...props}
    >
      <path d="M5 22Q4.575 22 4.287 21.712Q4 21.425 4 21Q4 20.575 4.287 20.288Q4.575 20 5 20H6V17Q6 15.475 6.713 14.137Q7.425 12.8 8.7 12Q7.9 11.5 7.338 10.8Q6.775 10.1 6.425 9.25L1.375 4.2Q1.075 3.9 1.075 3.487Q1.075 3.075 1.375 2.775Q1.675 2.475 2.1 2.475Q2.525 2.475 2.825 2.775L21.2 21.175Q21.5 21.475 21.5 21.875Q21.5 22.275 21.2 22.575Q20.9 22.875 20.488 22.875Q20.075 22.875 19.775 22.575L19.175 22ZM15.05 12.15 13.55 10.675Q14.625 10.225 15.312 9.238Q16 8.25 16 7V4H8V5.125L6.875 4L4.875 2H19Q19.425 2 19.712 2.287Q20 2.575 20 3Q20 3.425 19.712 3.712Q19.425 4 19 4H18V7Q18 8.6 17.225 9.975Q16.45 11.35 15.05 12.15ZM8 20H16V18.825L10.475 13.3Q9.375 13.75 8.688 14.75Q8 15.75 8 17ZM18 20Z"/>
    </Icon>
  );
});

IconMaterialHourglassDisabledRoundedFilled.displayName = 'AmauiIconMaterialHourglassDisabledRoundedFilled';

export default IconMaterialHourglassDisabledRoundedFilled;
