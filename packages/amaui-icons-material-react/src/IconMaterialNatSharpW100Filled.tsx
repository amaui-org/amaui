import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNatSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NatSharpW100Filled'
      short_name='Nat'

      {...props}
    >
      <path d="M4.375 14.35Q3.4 14.35 2.713 13.662Q2.025 12.975 2.025 12Q2.025 11.025 2.713 10.337Q3.4 9.65 4.375 9.65Q5.25 9.65 5.912 10.212Q6.575 10.775 6.725 11.65H10.525V12.35H6.725Q6.575 13.225 5.912 13.787Q5.25 14.35 4.375 14.35ZM4.375 13.65Q5.05 13.65 5.538 13.162Q6.025 12.675 6.025 12Q6.025 11.325 5.538 10.837Q5.05 10.35 4.375 10.35Q3.7 10.35 3.213 10.837Q2.725 11.325 2.725 12Q2.725 12.675 3.213 13.162Q3.7 13.65 4.375 13.65ZM5.525 20.7V20Q8.925 20 11.225 17.738Q13.525 15.475 13.525 12Q13.525 8.525 11.225 6.262Q8.925 4 5.525 4V3.3Q9.25 3.3 11.7 5.762Q14.15 8.225 14.225 11.65H20.625L18.375 9.4L18.875 8.9L21.975 12L18.875 15.1L18.375 14.6L20.625 12.35H14.225Q14.15 15.775 11.7 18.238Q9.25 20.7 5.525 20.7Z"/>
    </Icon>
  );
});

IconMaterialNatSharpW100Filled.displayName = 'AmauiIconMaterialNatSharpW100Filled';

export default IconMaterialNatSharpW100Filled;
