import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCloudOffSharpW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloudOffSharpW100Filled'
      short_name='CloudOff'

      {...props}
    >
      <path d="M20.7 17.85 9 6.15Q9.875 5.65 10.538 5.475Q11.2 5.3 12 5.3Q14.375 5.3 16.038 6.963Q17.7 8.625 17.7 11V12.3H18.5Q19.85 12.3 20.775 13.225Q21.7 14.15 21.7 15.5Q21.7 16.1 21.488 16.688Q21.275 17.275 20.7 17.85ZM20.65 21.65 17.75 18.7H6.5Q4.725 18.7 3.513 17.487Q2.3 16.275 2.3 14.5Q2.3 12.7 3.538 11.5Q4.775 10.3 6.35 10.3Q6.35 9.875 6.575 9.212Q6.8 8.55 7.1 8.1L3.3 4.3L3.8 3.8L21.15 21.15Z"/>
    </Icon>
  );
});

IconMaterialCloudOffSharpW100Filled.displayName = 'AmauiIconMaterialCloudOffSharpW100Filled';

export default IconMaterialCloudOffSharpW100Filled;
