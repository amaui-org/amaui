import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMouseLockOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MouseLockOff'

      short_name='MouseLockOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-632Zm111 112Zm-131 93Zm20-93Zm0 0Zm80-80Zm-40-280q116 0 198 82t82 198v124q-20-4-40-4t-40 4v-44H551L440-632v-164q-31 6-57.5 21T335-738l-56-57q38-39 90-62t111-23ZM231-728l209 208H280v160q0 83 58.5 141.5T480-160q11 0 20.5-1t19.5-3v81q-10 2-19.5 2.5T480-80q-116 0-198-82t-82-198v-240q0-35 8-67t23-61Zm289 128h160q0-72-45.5-127T520-796v196ZM819-28 28-820l56-56L876-84l-57 56ZM600-80v-200h80l160 160v40H600Zm200-188-40-40v-12q0-17-11.5-28.5T720-360h-5q-3 0-5 1l-30-30q9-5 19-8t21-3q33 0 56.5 23.5T800-320v52Z"/>
    </Icon>
  );
});

IconMaterialMouseLockOff.displayName = 'AmauiIconMaterialMouseLockOff';

export default IconMaterialMouseLockOff;
