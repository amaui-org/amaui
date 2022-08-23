import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialPowerOffRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='PowerOffRoundedW100Filled'
      short_name='PowerOff'

      {...props}
    >
      <path d="M20.125 21.75 14.525 16.15 13.525 17.15V18.95Q13.525 19.275 13.312 19.487Q13.1 19.7 12.775 19.7H11.275Q10.95 19.7 10.738 19.487Q10.525 19.275 10.525 18.95V17.15L7.775 14.4Q7.55 14.175 7.438 13.9Q7.325 13.625 7.325 13.325V9.8Q7.325 9.525 7.375 9.35Q7.425 9.175 7.475 9.1L2.2 3.825Q2.1 3.725 2.1 3.6Q2.1 3.475 2.225 3.35Q2.35 3.225 2.475 3.225Q2.6 3.225 2.725 3.35L20.65 21.275Q20.75 21.375 20.75 21.5Q20.75 21.625 20.625 21.75Q20.5 21.875 20.375 21.875Q20.25 21.875 20.125 21.75ZM16.425 14.25 9.775 7.6V4.65Q9.775 4.5 9.875 4.4Q9.975 4.3 10.125 4.3Q10.275 4.3 10.375 4.4Q10.475 4.5 10.475 4.65V8.3H13.575V4.65Q13.575 4.5 13.675 4.4Q13.775 4.3 13.925 4.3Q14.075 4.3 14.175 4.4Q14.275 4.5 14.275 4.65V8.3H15.225Q15.8 8.3 16.263 8.7Q16.725 9.1 16.725 9.8V13.325Q16.725 13.6 16.638 13.825Q16.55 14.05 16.425 14.25Z"/>
    </Icon>
  );
});

IconMaterialPowerOffRoundedW100Filled.displayName = 'AmauiIconMaterialPowerOffRoundedW100Filled';

export default IconMaterialPowerOffRoundedW100Filled;
