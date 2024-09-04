import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialKeyboardLockOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='KeyboardLockOffFilled'

      short_name='KeyboardLockOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640-80v-200h40l160 160v40H640Zm240-114-80-80v-46q0-17-11.5-28.5T760-360q-9 0-17.5 4T729-345l-28-29q11-12 26.5-19t32.5-7q33 0 56.5 23.5T840-320v40h40v86Zm-800-6v-560h120l360 360H320v80h244q-2 10-3 19.5t-1 20.5v80H80ZM819-28 28-820l56-56L876-84l-57 56ZM200-520v80h80v-80h-80Zm120 0v80h80v-80h-80ZM200-640v80h80v-80h-80Zm360 80h80v-80h-80v80Zm120 0h80v-80h-80v80ZM314-760h566v320q-26-20-57-30t-63-10v-40h-80v57q-11 5-21 10.5T640-440v-80h-80v6l-46-46h6v-80h-80v6L314-760Z"/>
    </Icon>
  );
});

IconMaterialKeyboardLockOffFilled.displayName = 'AmauiIconMaterialKeyboardLockOffFilled';

export default IconMaterialKeyboardLockOffFilled;
