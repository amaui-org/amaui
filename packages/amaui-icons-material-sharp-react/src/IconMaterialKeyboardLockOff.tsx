import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardLockOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardLockOff'

      short_name='KeyboardLockOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-480Zm167 160H320v-80h207v80ZM200-440v-80h80v80h-80Zm120 0v-80h80v80h-80ZM200-560v-80h80v80h-80Zm360 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm0 97q18-8 38.5-12.5T760-480v-40h-80v57Zm-40 23v-80h-80v6l74 74h6ZM520-560v-80h-80v6l74 74h6ZM819-28 28-820l56-56L876-84l-57 56ZM516-559Zm364 119q-17-13-37-22t-43-14v-204H394l-80-80h566v320ZM80-200v-560h120l80 80H160v400h400v80H80ZM640-80v-200h40l160 160v40H640Zm240-114-80-80v-46q0-17-11.5-28.5T760-360q-9 0-17.5 4T729-345l-28-29q11-12 26.5-19t32.5-7q33 0 56.5 23.5T840-320v40h40v86Z"/>
    </Icon>
  );
});

IconMaterialKeyboardLockOff.displayName = 'AmauiIconMaterialKeyboardLockOff';

export default IconMaterialKeyboardLockOff;
