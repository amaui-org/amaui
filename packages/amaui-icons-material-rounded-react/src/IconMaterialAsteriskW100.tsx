import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAsteriskW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AsteriskW100'

      short_name='Asterisk'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M479.965-172Q474-172 470-176.025T466-186v-260L282-262q-4 4-9.5 4.5T262-262q-5-5-5-10t5-10l184-184H186q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h260L262-678q-4-4-4.5-10t4-10q4.5-4 10.5-3.5t10 4.5l184 184v-261q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v261l185-185q4-4 9.5-3.5t9.5 4.289q4 3.79 4 9 0 5.211-4 9.211L513-494h261q5.95 0 9.975 4.035 4.025 4.035 4.025 10T783.975-470q-4.025 4-9.975 4H513l185 185q4 4 4 9.5t-4 10q-4 4.5-10 4t-10-4.5L494-446v260q0 5.95-4.035 9.975-4.035 4.025-10 4.025Z"/>
    </Icon>
  );
});

IconMaterialAsteriskW100.displayName = 'AmauiIconMaterialAsteriskW100';

export default IconMaterialAsteriskW100;
