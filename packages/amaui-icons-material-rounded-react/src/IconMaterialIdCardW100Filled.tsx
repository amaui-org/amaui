import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialIdCardW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='IdCardW100Filled'

      short_name='IdCard'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M706-468q5.95 0 9.97-4.04 4.03-4.03 4.03-10 0-5.96-4.03-9.96-4.02-4-9.97-4H582q-5.95 0-9.97 4.04-4.03 4.03-4.03 10 0 5.96 4.03 9.96 4.02 4 9.97 4h124Zm0-108q5.95 0 9.97-4.04 4.03-4.03 4.03-10 0-5.96-4.03-9.96-4.02-4-9.97-4H582q-5.95 0-9.97 4.04-4.03 4.03-4.03 10 0 5.96 4.03 9.96 4.02 4 9.97 4h124ZM364-424q-32 0-53 4t-38 13q-14 7-21 14.93-7 7.94-7 17.07 0 8.14 6.75 13.57t16.5 5.43h192q9.75 0 16.25-6t6.5-14q0-7.98-6.5-15.49T455-407q-17-9-38-13t-53-4Zm0-72q23 0 38.5-15.5T418-550q0-23-15.5-38.5T364-604q-23 0-38.5 15.5T310-550q0 23 15.5 38.5T364-496ZM192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Z"/>
    </Icon>
  );
});

IconMaterialIdCardW100Filled.displayName = 'AmauiIconMaterialIdCardW100Filled';

export default IconMaterialIdCardW100Filled;
