import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEnterprise = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Enterprise'

      short_name='Enterprise'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-340q33 0 56.5-23.5T560-420q0-33-23.5-56.5T480-500q-33 0-56.5 23.5T400-420q0 33 23.5 56.5T480-340ZM80-120v-600h240v-160h320v160h240v600H80Zm80-80h640v-440H160v440Zm240-520h160v-80H400v80ZM160-200v-440 440Z"/>
    </Icon>
  );
});

IconMaterialEnterprise.displayName = 'AmauiIconMaterialEnterprise';

export default IconMaterialEnterprise;
