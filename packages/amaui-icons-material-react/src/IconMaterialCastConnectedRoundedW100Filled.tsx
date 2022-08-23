import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCastConnectedRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CastConnectedRoundedW100Filled'
      short_name='CastConnected'

      {...props}
    >
      <path d="M13.8 15H16.25Q16.575 15 16.788 14.787Q17 14.575 17 14.25V9.75Q17 9.425 16.788 9.212Q16.575 9 16.25 9H8.775Q10.6 9.925 11.9 11.487Q13.2 13.05 13.8 15ZM12.3 18.7Q12.3 16.825 11.588 15.188Q10.875 13.55 9.663 12.337Q8.45 11.125 6.813 10.412Q5.175 9.7 3.3 9.7V6.8Q3.3 6.15 3.725 5.725Q4.15 5.3 4.8 5.3H19.2Q19.85 5.3 20.275 5.725Q20.7 6.15 20.7 6.8V17.2Q20.7 17.85 20.275 18.275Q19.85 18.7 19.2 18.7ZM8.6 18.7Q8.6 16.5 7.05 14.95Q5.5 13.4 3.3 13.4V10.4Q5.025 10.4 6.538 11.05Q8.05 11.7 9.175 12.825Q10.3 13.95 10.95 15.463Q11.6 16.975 11.6 18.7ZM4.9 18.7Q4.9 18.05 4.425 17.575Q3.95 17.1 3.3 17.1V14.1Q5.225 14.15 6.562 15.475Q7.9 16.8 7.9 18.7Z"/>
    </Icon>
  );
});

IconMaterialCastConnectedRoundedW100Filled.displayName = 'AmauiIconMaterialCastConnectedRoundedW100Filled';

export default IconMaterialCastConnectedRoundedW100Filled;
