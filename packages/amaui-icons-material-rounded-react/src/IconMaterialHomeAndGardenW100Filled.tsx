import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHomeAndGardenW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HomeAndGardenW100Filled'

      short_name='HomeAndGarden'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640-98q-17 20-39.5 33T552-52q-42 0-71-29t-29-71q0-26 13-48.5t33-39.5q-20-18-33-41.5T452-332q0-41 29-68.5t71-27.5q26 0 49 12t39 32q16-20 38-32t48-12q42 0 72 28t30 70q0 26-13.5 48.5T780-242q21 17 34.5 39.5T828-154q0 42-29 72t-71 30q-26 0-49-12.5T640-98Zm0-102q17 0 28.5-11.5T680-240q0-17-11.5-28.5T640-280q-17 0-28.5 11.5T600-240q0 17 11.5 28.5T640-200Zm-368-12q-25 0-42.5-17.5T212-272v-290h-29q-16 0-21-15t7-25l273-221q17-14 38-14t38 14l273 221q12 10 7 25t-21 15h-29v42h-28v-102L500-801q-9-8-20-8t-20 8L240-622v350q0 14 9 23t23 9h88v28h-88Z"/>
    </Icon>
  );
});

IconMaterialHomeAndGardenW100Filled.displayName = 'AmauiIconMaterialHomeAndGardenW100Filled';

export default IconMaterialHomeAndGardenW100Filled;
