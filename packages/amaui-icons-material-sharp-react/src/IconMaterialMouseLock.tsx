import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialMouseLock = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MouseLock'

      short_name='MouseLock'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M600-80v-200h40v-40q0-33 23.5-56.5T720-400q33 0 56.5 23.5T800-320v40h40v200H600Zm80-200h80v-40q0-17-11.5-28.5T720-360q-17 0-28.5 11.5T680-320v40ZM480-520Zm0 440q-116 0-198-82t-82-198v-240q0-116 82-198t198-82q116 0 198 82t82 198v124q-20-4-40-4t-40 4v-44H280v160q0 83 58.5 141.5T480-160q11 0 20.5-1t19.5-3v81q-10 2-19.5 2.5T480-80ZM280-600h160v-196q-69 14-114.5 69T280-600Zm240 0h160q0-72-45.5-127T520-796v196Zm-40 80Zm40-80Zm-80 0Z"/>
    </Icon>
  );
});

IconMaterialMouseLock.displayName = 'AmauiIconMaterialMouseLock';

export default IconMaterialMouseLock;
