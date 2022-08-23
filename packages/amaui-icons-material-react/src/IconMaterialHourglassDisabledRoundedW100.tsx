import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialHourglassDisabledRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='HourglassDisabledRoundedW100'
      short_name='HourglassDisabled'

      {...props}
    >
      <path d="M5.9 20.7Q5.75 20.7 5.65 20.6Q5.55 20.5 5.55 20.35Q5.55 20.2 5.65 20.1Q5.75 20 5.9 20H7.7V17Q7.7 15.325 8.625 13.962Q9.55 12.6 11.1 12.1L10.775 11.775Q9.875 11.425 9.188 10.725Q8.5 10.025 8.125 9.125L2.5 3.5Q2.4 3.4 2.388 3.262Q2.375 3.125 2.5 3Q2.625 2.875 2.75 2.875Q2.875 2.875 3 3L21.55 21.55Q21.65 21.65 21.663 21.788Q21.675 21.925 21.55 22.05Q21.425 22.175 21.3 22.175Q21.175 22.175 21.05 22.05L19.7 20.7ZM14.1 11.3 13.65 10.85Q14.55 10.3 15.075 9.25Q15.6 8.2 15.6 7V4H8.4V5.6L7.7 4.9V4H6.8L6.1 3.3H18.1Q18.25 3.3 18.35 3.4Q18.45 3.5 18.45 3.65Q18.45 3.8 18.35 3.9Q18.25 4 18.1 4H16.3V7Q16.3 8.325 15.713 9.462Q15.125 10.6 14.1 11.3ZM8.4 20H15.6V16.6L11.725 12.725Q10.225 12.85 9.312 14.113Q8.4 15.375 8.4 17ZM16.3 20H19L16.3 17.3Z"/>
    </Icon>
  );
});

IconMaterialHourglassDisabledRoundedW100.displayName = 'AmauiIconMaterialHourglassDisabledRoundedW100';

export default IconMaterialHourglassDisabledRoundedW100;
