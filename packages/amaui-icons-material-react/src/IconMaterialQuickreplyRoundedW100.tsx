import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialQuickreplyRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='QuickreplyRoundedW100'
      short_name='Quickreply'

      {...props}
    >
      <path d="M6.1 16.7 4.575 18.225Q4.225 18.575 3.763 18.387Q3.3 18.2 3.3 17.7V4.8Q3.3 4.15 3.725 3.725Q4.15 3.3 4.8 3.3H19.2Q19.85 3.3 20.275 3.725Q20.7 4.15 20.7 4.8V9.5H20V4.8Q20 4.45 19.775 4.225Q19.55 4 19.2 4H4.8Q4.45 4 4.225 4.225Q4 4.45 4 4.8V17.8L5.8 16H14.9V16.7ZM4 16V17.8V4Q4 4 4 4Q4 4 4 4Q4 4 4 4Q4 4 4 4Q4 4 4 4Q4 4 4 4V16ZM18.95 16.7H18.65Q18.325 16.7 18.113 16.487Q17.9 16.275 17.9 15.95V13.075Q17.9 12.825 18.062 12.662Q18.225 12.5 18.475 12.5H18.975Q19.275 12.5 19.438 12.738Q19.6 12.975 19.525 13.25L18.95 15.5H19.85Q20.15 15.5 20.325 15.75Q20.5 16 20.4 16.275L19.425 19.35Q19.375 19.55 19.163 19.513Q18.95 19.475 18.95 19.275Z"/>
    </Icon>
  );
});

IconMaterialQuickreplyRoundedW100.displayName = 'AmauiIconMaterialQuickreplyRoundedW100';

export default IconMaterialQuickreplyRoundedW100;
