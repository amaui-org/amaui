import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEnterpriseW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EnterpriseW100'

      short_name='Enterprise'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-366q23 0 38.5-15.5T534-420q0-23-15.5-38.5T480-474q-23 0-38.5 15.5T426-420q0 23 15.5 38.5T480-366ZM132-172v-496h240v-108h216v108h240v496H132Zm28-28h640v-440H160v440Zm240-468h160v-80H400v80ZM160-200v-440 440Z"/>
    </Icon>
  );
});

IconMaterialEnterpriseW100.displayName = 'AmauiIconMaterialEnterpriseW100';

export default IconMaterialEnterpriseW100;
