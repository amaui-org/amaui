import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWorkUpdateW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WorkUpdateW100'

      short_name='WorkUpdate'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-200v-440 440Zm240-468h160v-80H400v80ZM132-172v-496h240v-108h216v108h240v190q-7-4-13.5-7t-14.5-6v-149H160v440h309q2 8 4.5 14.5T478-172H132Zm578 11 96-96-20-20-62 62v-144h-28v144l-62-62-20 20 96 96Zm0 49q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105t-105 43Z"/>
    </Icon>
  );
});

IconMaterialWorkUpdateW100.displayName = 'AmauiIconMaterialWorkUpdateW100';

export default IconMaterialWorkUpdateW100;
