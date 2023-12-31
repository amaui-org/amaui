import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWorkAlertW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WorkAlertW100'

      short_name='WorkAlert'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M710-170q8 0 13-5t5-13q0-8-5-13t-13-5q-8 0-13 5t-5 13q0 8 5 13t13 5Zm-14-72h28v-108h-28v108Zm-536 42v-440 440Zm240-468h160v-80H400v80ZM132-172v-496h240v-108h216v108h240v190q-7-4-13.5-7t-14.5-6v-149H160v440h309q2 8 4.5 14.5T478-172H132Zm578 60q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105t-105 43Z"/>
    </Icon>
  );
});

IconMaterialWorkAlertW100.displayName = 'AmauiIconMaterialWorkAlertW100';

export default IconMaterialWorkAlertW100;
