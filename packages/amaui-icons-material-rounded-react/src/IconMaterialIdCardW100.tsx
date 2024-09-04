import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialIdCardW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='IdCardW100'

      short_name='IdCard'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M706-468q6 0 10-4t4-10q0-6-4-10t-10-4H582q-6 0-10 4t-4 10q0 6 4 10t10 4h124Zm0-108q6 0 10-4t4-10q0-6-4-10t-10-4H582q-6 0-10 4t-4 10q0 6 4 10t10 4h124ZM364-424q-32 0-53 4t-38 13q-14 7-21 15t-7 17q0 8 6.5 13.5T268-356h192q10 0 16.5-6t6.5-14q0-8-6.5-15.5T455-407q-17-9-38-13t-53-4Zm0-72q23 0 38.5-15.5T418-550q0-23-15.5-38.5T364-604q-23 0-38.5 15.5T310-550q0 23 15.5 38.5T364-496ZM192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Zm0-28h576q12 0 22-10t10-22v-416q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v416q0 12 10 22t22 10Zm-32 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialIdCardW100.displayName = 'AmauiIconMaterialIdCardW100';

export default IconMaterialIdCardW100;
