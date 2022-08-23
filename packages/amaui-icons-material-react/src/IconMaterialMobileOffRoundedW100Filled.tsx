import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialMobileOffRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobileOffRoundedW100Filled'
      short_name='MobileOff'

      {...props}
    >
      <path d="M20.7 22.35 1.35 3Q1.25 2.9 1.238 2.762Q1.225 2.625 1.35 2.5Q1.475 2.375 1.6 2.375Q1.725 2.375 1.85 2.5L21.2 21.85Q21.3 21.95 21.312 22.087Q21.325 22.225 21.2 22.35Q21.075 22.475 20.95 22.475Q20.825 22.475 20.7 22.35ZM6.3 7.45 7 8.15V18.65H17.025L17.7 19.325V20.2Q17.7 20.825 17.262 21.262Q16.825 21.7 16.2 21.7H7.8Q7.175 21.7 6.738 21.262Q6.3 20.825 6.3 20.2ZM17.7 3.8V15.55L17 14.85V5.35H7.5L6.3 4.125V3.8Q6.3 3.175 6.738 2.737Q7.175 2.3 7.8 2.3H16.2Q16.85 2.3 17.275 2.725Q17.7 3.15 17.7 3.8Z"/>
    </Icon>
  );
});

IconMaterialMobileOffRoundedW100Filled.displayName = 'AmauiIconMaterialMobileOffRoundedW100Filled';

export default IconMaterialMobileOffRoundedW100Filled;
