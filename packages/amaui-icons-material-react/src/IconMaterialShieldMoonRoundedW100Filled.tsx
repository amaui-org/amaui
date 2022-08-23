import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialShieldMoonRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='ShieldMoonRoundedW100Filled'
      short_name='ShieldMoon'

      {...props}
    >
      <path d="M12.525 15.35Q13.175 15.35 13.8 15.137Q14.425 14.925 14.925 14.5Q15.05 14.375 15.025 14.275Q15 14.175 14.8 14.1Q13.875 13.775 13.163 13.212Q12.45 12.65 11.95 11.775Q11.6 11.125 11.363 10.05Q11.125 8.975 11.4 8.225Q11.475 8.025 11.325 7.925Q11.175 7.825 11.025 7.875Q9.9 8.35 9.262 9.35Q8.625 10.35 8.625 11.5Q8.625 13.1 9.775 14.225Q10.925 15.35 12.525 15.35ZM12 20.575Q11.875 20.575 11.788 20.575Q11.7 20.575 11.625 20.525Q8.9 19.525 7.1 16.938Q5.3 14.35 5.3 11.1V6.95Q5.3 6.475 5.575 6.087Q5.85 5.7 6.275 5.525L11.475 3.6Q11.75 3.5 12 3.5Q12.25 3.5 12.525 3.6L17.725 5.525Q18.15 5.7 18.425 6.087Q18.7 6.475 18.7 6.95V11.1Q18.7 14.35 16.9 16.938Q15.1 19.525 12.375 20.525Q12.275 20.575 12 20.575Z"/>
    </Icon>
  );
});

IconMaterialShieldMoonRoundedW100Filled.displayName = 'AmauiIconMaterialShieldMoonRoundedW100Filled';

export default IconMaterialShieldMoonRoundedW100Filled;
