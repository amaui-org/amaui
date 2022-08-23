import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialSendRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='SendRoundedW100Filled'
      short_name='Send'

      {...props}
    >
      <path d="M5.35 17.6Q4.975 17.75 4.638 17.538Q4.3 17.325 4.3 16.925V13.75Q4.3 13.475 4.463 13.275Q4.625 13.075 4.9 13.025L9.5 12L4.9 10.975Q4.625 10.925 4.463 10.725Q4.3 10.525 4.3 10.25V7.075Q4.3 6.675 4.638 6.463Q4.975 6.25 5.35 6.4L17 11.3Q17.45 11.5 17.45 12Q17.45 12.5 17 12.7Z"/>
    </Icon>
  );
});

IconMaterialSendRoundedW100Filled.displayName = 'AmauiIconMaterialSendRoundedW100Filled';

export default IconMaterialSendRoundedW100Filled;
