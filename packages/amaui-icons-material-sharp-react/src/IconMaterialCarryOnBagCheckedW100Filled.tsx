import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCarryOnBagCheckedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CarryOnBagCheckedW100Filled'

      short_name='CarryOnBagChecked'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m656-178 132-132-20-20-112 112-56-56-20 20 76 76Zm28 70q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105t-105 43Zm-270-64v-456h146v-172h-60v-28h88v365q-59 30-95.5 84.5T456-258q0 22 3.5 44t12.5 42h-58Zm-122 0v-456h94v456h-94Z"/>
    </Icon>
  );
});

IconMaterialCarryOnBagCheckedW100Filled.displayName = 'AmauiIconMaterialCarryOnBagCheckedW100Filled';

export default IconMaterialCarryOnBagCheckedW100Filled;
