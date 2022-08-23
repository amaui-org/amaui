import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialRememberMeSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='RememberMeSharpW100Filled'
      short_name='RememberMe'

      {...props}
    >
      <path d="M6.3 21.7V2.3H17.7V21.7ZM7 15.35Q8.125 14.7 9.387 14.35Q10.65 14 12 14Q13.35 14 14.613 14.35Q15.875 14.7 17 15.35V5.35H7ZM12 12.35Q12.975 12.35 13.663 11.662Q14.35 10.975 14.35 10Q14.35 9.025 13.663 8.337Q12.975 7.65 12 7.65Q11.025 7.65 10.338 8.337Q9.65 9.025 9.65 10Q9.65 10.975 10.338 11.662Q11.025 12.35 12 12.35Z"/>
    </Icon>
  );
});

IconMaterialRememberMeSharpW100Filled.displayName = 'AmauiIconMaterialRememberMeSharpW100Filled';

export default IconMaterialRememberMeSharpW100Filled;
