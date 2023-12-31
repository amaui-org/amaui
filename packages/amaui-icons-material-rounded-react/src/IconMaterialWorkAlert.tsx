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
      <path d="M160-200v-440 440Zm240-520h160v-80H400v80ZM160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v171q-18-13-38-22.5T800-508v-132H160v440h283q3 21 9 41t15 39H160Zm560 80q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40Zm0-80q8 0 14-6t6-14q0-8-6-14t-14-6q-8 0-14 6t-6 14q0 8 6 14t14 6Zm0-80q8 0 14-6t6-14v-120q0-8-6-14t-14-6q-8 0-14 6t-6 14v120q0 8 6 14t14 6Z"/>
    </Icon>
  );
});

IconMaterialWorkAlert.displayName = 'AmauiIconMaterialWorkAlert';

export default IconMaterialWorkAlert;
