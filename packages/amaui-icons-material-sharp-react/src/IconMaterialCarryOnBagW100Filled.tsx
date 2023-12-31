import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCarryOnBagW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CarryOnBagW100Filled'

      short_name='CarryOnBag'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M587.882-124Q562-124 544-142.118q-18-18.117-18-44Q526-212 544.118-230q18.117-18 44-18Q614-248 632-229.882q18 18.117 18 44Q650-160 631.882-142q-18.117 18-44 18ZM292-172v-456h94v456h-94Zm122 0v-456h146v-172h-60v-28h88v552q-37.5 0-63.75 26.25T498-186v6.833q0 3.167 1 7.167h-85Z"/>
    </Icon>
  );
});

IconMaterialCarryOnBagW100Filled.displayName = 'AmauiIconMaterialCarryOnBagW100Filled';

export default IconMaterialCarryOnBagW100Filled;
