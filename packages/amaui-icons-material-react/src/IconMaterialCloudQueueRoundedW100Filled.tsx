import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialCloudQueueRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='CloudQueueRoundedW100Filled'
      short_name='CloudQueue'

      {...props}
    >
      <path d="M6.5 18.7Q4.75 18.7 3.525 17.475Q2.3 16.25 2.3 14.5Q2.3 12.85 3.475 11.575Q4.65 10.3 6.35 10.3Q6.6 8.15 8.213 6.725Q9.825 5.3 12 5.3Q14.375 5.3 16.038 6.963Q17.7 8.625 17.7 11V12.3H18.5Q19.85 12.3 20.775 13.225Q21.7 14.15 21.7 15.5Q21.7 16.85 20.775 17.775Q19.85 18.7 18.5 18.7Z"/>
    </Icon>
  );
});

IconMaterialCloudQueueRoundedW100Filled.displayName = 'AmauiIconMaterialCloudQueueRoundedW100Filled';

export default IconMaterialCloudQueueRoundedW100Filled;
