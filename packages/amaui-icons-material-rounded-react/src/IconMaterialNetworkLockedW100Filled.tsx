import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNetworkLockedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NetworkLockedW100Filled'

      short_name='NetworkLocked'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M18.225 21.4q-.35 0-.625-.275t-.275-.625v-2.65q0-.35.275-.6t.625-.25h.1v-1q0-.725.487-1.213.488-.487 1.213-.487.725 0 1.213.487.487.488.487 1.213v1h.1q.35 0 .613.25.262.25.262.6v2.65q0 .35-.262.625-.263.275-.613.275Zm.8-4.4h2v-1q0-.425-.287-.713Q20.45 15 20.025 15t-.713.287q-.287.288-.287.713Zm-12.05 3.7q-.5 0-.687-.463-.188-.462.162-.812l13-13q.35-.35.813-.163.462.188.462.688V12h-.7q-2.075 0-3.537 1.462-1.463 1.463-1.463 3.538v3.7Z"/>
    </Icon>
  );
});

IconMaterialNetworkLockedW100Filled.displayName = 'AmauiIconMaterialNetworkLockedW100Filled';

export default IconMaterialNetworkLockedW100Filled;
