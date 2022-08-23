import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRememberMeRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RememberMeRoundedW100Filled'
      short_name='RememberMe'

      {...props}
    >
      <path d="M7.8 21.7Q7.175 21.7 6.738 21.262Q6.3 20.825 6.3 20.2V3.8Q6.3 3.175 6.738 2.737Q7.175 2.3 7.8 2.3H16.2Q16.825 2.3 17.262 2.737Q17.7 3.175 17.7 3.8V20.2Q17.7 20.825 17.262 21.262Q16.825 21.7 16.2 21.7ZM7 15.35Q8.125 14.7 9.387 14.35Q10.65 14 12 14Q13.35 14 14.613 14.35Q15.875 14.7 17 15.35V5.35H7ZM12 12.35Q12.975 12.35 13.663 11.662Q14.35 10.975 14.35 10Q14.35 9.025 13.663 8.337Q12.975 7.65 12 7.65Q11.025 7.65 10.338 8.337Q9.65 9.025 9.65 10Q9.65 10.975 10.338 11.662Q11.025 12.35 12 12.35Z"/>
    </Icon>
  );
});

IconMaterialRememberMeRoundedW100Filled.displayName = 'AmauiIconMaterialRememberMeRoundedW100Filled';

export default IconMaterialRememberMeRoundedW100Filled;
