import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCarryOnBagCheckedW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CarryOnBagCheckedW100'

      short_name='CarryOnBagChecked'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m656-178 132-132-20-20-112 112-56-56-20 20 76 76Zm-270-22v-400h-66v400h66Zm86 28H292v-456h268v-172h-60v-28h88v365q-6 3-14.5 7.5T560-447v-153H414v400h49l4 14q2 7 5 14Zm212-232q62 0 105 43t43 105q0 62-43 105t-105 43q-62 0-105-43t-43-105q0-62 43-105t105-43Zm-284 4Zm-14 200v-400 400Zm28 0v-400 400Z"/>
    </Icon>
  );
});

IconMaterialCarryOnBagCheckedW100.displayName = 'AmauiIconMaterialCarryOnBagCheckedW100';

export default IconMaterialCarryOnBagCheckedW100;
