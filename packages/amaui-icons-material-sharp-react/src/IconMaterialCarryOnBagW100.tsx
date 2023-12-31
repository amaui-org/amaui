import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCarryOnBagW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CarryOnBagW100'

      short_name='CarryOnBag'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M588-276q37.5 0 63.75 26.25T678-186q0 37.5-26.25 63.75T588-96q-34 0-59-21.5T499-172H292v-456h268v-172h-60v-28h88v552Zm-202 76v-400h-66v400h66Zm28-400v400h86q2-26 18.5-45t41.5-26v-329H414Zm174.118 476Q614-124 632-142.118q18-18.117 18-44Q650-212 631.882-230q-18.117-18-44-18Q562-248 544-229.882q-18 18.117-18 44Q526-160 544.118-142q18.117 18 44 18ZM588-186ZM414-400Zm-28 200v-400 400Zm28-400v400-400Z"/>
    </Icon>
  );
});

IconMaterialCarryOnBagW100.displayName = 'AmauiIconMaterialCarryOnBagW100';

export default IconMaterialCarryOnBagW100;
