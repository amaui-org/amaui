import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCarpenterRoundedW100 = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CarpenterRoundedW100'
      short_name='Carpenter'

      {...props}
    >
      <path d="M14.05 21.175Q13.775 21.175 13.5 21.062Q13.225 20.95 13 20.725L11.8 19.55Q11.575 19.325 11.475 19.05Q11.375 18.775 11.375 18.5Q11.375 18.225 11.488 17.95Q11.6 17.675 11.8 17.45L12.1 17.125L3.95 5.475L7 2.425L19.15 14.575Q19.375 14.8 19.488 15.087Q19.6 15.375 19.6 15.65Q19.6 15.925 19.488 16.2Q19.375 16.475 19.15 16.7L15.125 20.725Q14.9 20.95 14.613 21.062Q14.325 21.175 14.05 21.175ZM12.575 16.625 16.425 12.825 7 3.4 4.85 5.55ZM13.525 20.225Q13.775 20.45 14.1 20.45Q14.425 20.45 14.65 20.225L18.65 16.225Q18.875 16 18.875 15.675Q18.875 15.35 18.65 15.1L16.9 13.3L12.3 17.9Q12.05 18.15 12.05 18.487Q12.05 18.825 12.3 19.05ZM12.575 16.625 16.425 12.825Z"/>
    </Icon>
  );
});

IconMaterialCarpenterRoundedW100.displayName = 'AmauiIconMaterialCarpenterRoundedW100';

export default IconMaterialCarpenterRoundedW100;
