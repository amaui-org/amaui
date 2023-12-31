import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWorkAlert = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WorkAlert'

      short_name='WorkAlert'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M720-120q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6Zm-20-80h40v-160h-40v160Zm-540 0v-440 440Zm240-520h160v-80H400v80ZM80-120v-600h240v-160h320v160h240v251q-18-13-38-22.5T800-508v-132H160v440h283q3 21 9 41t15 39H80Zm640 80q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40Z"/>
    </Icon>
  );
});

IconMaterialWorkAlert.displayName = 'AmauiIconMaterialWorkAlert';

export default IconMaterialWorkAlert;
