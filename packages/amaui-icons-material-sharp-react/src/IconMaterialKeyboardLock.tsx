import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardLock = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardLock'

      short_name='KeyboardLock'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-280v-400 400Zm40-160h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80ZM200-560h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm0 97q18-8 38.5-12.5T760-480v-40h-80v57ZM320-320h244q5-23 14-43t22-37H320v80ZM80-200v-560h800v320q-17-13-37-22t-43-14v-204H160v400h400v80H80ZM640-80v-200h40v-40q0-33 23.5-56.5T760-400q33 0 56.5 23.5T840-320v40h40v200H640Zm80-200h80v-40q0-17-11.5-28.5T760-360q-17 0-28.5 11.5T720-320v40Z"/>
    </Icon>
  );
});

IconMaterialKeyboardLock.displayName = 'AmauiIconMaterialKeyboardLock';

export default IconMaterialKeyboardLock;
