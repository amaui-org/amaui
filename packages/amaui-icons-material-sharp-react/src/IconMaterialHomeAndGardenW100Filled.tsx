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
      <path d="M640-98q-17 20-39.5 33T552-52q-42 0-71-29t-29-71q0-26 13-48.5t33-39.5q-20-18-33-41.5T452-332q0-41 29-68.5t71-27.5q26 0 49 12t39 32q16-20 38-32t48-12q42 0 72 28t30 70q0 26-13.5 48.5T780-242q21 17 34.5 39.5T828-154q0 42-29 72t-71 30q-26 0-49-12.5T640-98Zm0-102q17 0 28.5-11.5T680-240q0-17-11.5-28.5T640-280q-17 0-28.5 11.5T600-240q0 17 11.5 28.5T640-200Zm-428-12v-350h-92l360-292 360 292h-92v42h-28v-102L480-818 240-622v382h120v28H212Z"/>
    </Icon>
  );
});

IconMaterialHomeAndGardenW100Filled.displayName = 'AmauiIconMaterialHomeAndGardenW100Filled';

export default IconMaterialHomeAndGardenW100Filled;
