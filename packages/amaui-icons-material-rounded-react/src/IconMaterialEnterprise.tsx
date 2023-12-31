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
      <path d="M480-340q33 0 56.5-23.5T560-420q0-33-23.5-56.5T480-500q-33 0-56.5 23.5T400-420q0 33 23.5 56.5T480-340ZM160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160Zm0-80h640v-440H160v440Zm240-520h160v-80H400v80ZM160-200v-440 440Z"/>
    </Icon>
  );
});

IconMaterialEnterprise.displayName = 'AmauiIconMaterialEnterprise';

export default IconMaterialEnterprise;
