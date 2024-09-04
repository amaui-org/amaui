import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardLockW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardLockW100Filled'

      short_name='KeyboardLock'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M613-132v-176h40v-40q0-29 19.5-48.5T721-416q29 0 48.5 19.5T789-348v40h39v176H613Zm68-176h80v-40q0-17-11.5-28.5T721-388q-17 0-28.5 11.5T681-348v40ZM212-452h56v-56h-56v56Zm120 0h56v-56h-56v56Zm120 0h56v-56h-56v56Zm120 0h56v-56h-56v56ZM212-572h56v-56h-56v56Zm120 0h56v-56h-56v56Zm120 0h56v-56h-56v56Zm120 0h56v-56h-56v56Zm120 0h56v-56h-56v56ZM132-252v-456h696v251q-18-11-38.5-18.5T748-486v-22h-56v23q-47 7-84 32.5T548-388H332v56h194q-2 11-3.5 22t-1.5 22v36H132Z"/>
    </Icon>
  );
});

IconMaterialKeyboardLockW100Filled.displayName = 'AmauiIconMaterialKeyboardLockW100Filled';

export default IconMaterialKeyboardLockW100Filled;
