import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardLockW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardLockW100'

      short_name='KeyboardLock'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-280v-400 400Zm52-172h56v-56h-56v56Zm120 0h56v-56h-56v56Zm120 0h56v-56h-56v56Zm120 0h56v-56h-56v56ZM212-572h56v-56h-56v56Zm120 0h56v-56h-56v56Zm120 0h56v-56h-56v56Zm120 0h56v-56h-56v56Zm120 0h56v-56h-56v56Zm0 87q14-2 28-2.5t28 1.5v-22h-56v23ZM332-332h194.02q3.98-15 8.98-29t13-27H332v56Zm-200 80v-456h696v251q-7-5-13.5-8t-14.5-6v-209H160v400h361v28H132Zm481 120v-176h40v-40q0-29 19.5-48.5T721-416q29 0 48.5 19.5T789-348v40h39v176H613Zm68-176h80v-40q0-17-11.5-28.5T721-388q-17 0-28.5 11.5T681-348v40Z"/>
    </Icon>
  );
});

IconMaterialKeyboardLockW100.displayName = 'AmauiIconMaterialKeyboardLockW100';

export default IconMaterialKeyboardLockW100;
