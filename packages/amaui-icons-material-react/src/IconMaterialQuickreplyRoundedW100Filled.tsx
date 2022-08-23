import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialQuickreplyRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='QuickreplyRoundedW100Filled'
      short_name='Quickreply'

      {...props}
    >
      <path d="M18.95 16.7H18.65Q18.325 16.7 18.113 16.487Q17.9 16.275 17.9 15.95V13.075Q17.9 12.825 18.062 12.662Q18.225 12.5 18.475 12.5H18.975Q19.275 12.5 19.438 12.738Q19.6 12.975 19.525 13.25L18.95 15.5H19.85Q20.15 15.5 20.325 15.738Q20.5 15.975 20.4 16.275L19.425 19.35Q19.375 19.55 19.163 19.513Q18.95 19.475 18.95 19.275ZM6.1 16.7 4.575 18.225Q4.225 18.575 3.763 18.387Q3.3 18.2 3.3 17.7V4.8Q3.3 4.15 3.725 3.725Q4.15 3.3 4.8 3.3H19.2Q19.85 3.3 20.275 3.725Q20.7 4.15 20.7 4.8V9.5H16.4Q15.775 9.5 15.338 9.938Q14.9 10.375 14.9 11V16.7Z"/>
    </Icon>
  );
});

IconMaterialQuickreplyRoundedW100Filled.displayName = 'AmauiIconMaterialQuickreplyRoundedW100Filled';

export default IconMaterialQuickreplyRoundedW100Filled;
