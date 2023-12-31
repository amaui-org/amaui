import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEnterpriseFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EnterpriseFilled'

      short_name='Enterprise'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-340q33 0 56.5-23.5T560-420q0-33-23.5-56.5T480-500q-33 0-56.5 23.5T400-420q0 33 23.5 56.5T480-340ZM80-120v-600h240v-160h320v160h240v600H80Zm320-600h160v-80H400v80Z"/>
    </Icon>
  );
});

IconMaterialEnterpriseFilled.displayName = 'AmauiIconMaterialEnterpriseFilled';

export default IconMaterialEnterpriseFilled;
