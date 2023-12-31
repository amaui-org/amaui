import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCarryOnBagInactiveW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CarryOnBagInactiveW100Filled'

      short_name='CarryOnBagInactive'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M712-112 592-229q8 8 13 19t5 24q0 25.833-18.118 43.917-18.117 18.083-44 18.083Q522-124 504-142.118q-18-18.117-18-44Q486-212 504.083-230q18.084-18 43.917-18 11 0 22 4t19 12l-44-44q-37 1-62 27t-25 63v6.833q0 3.167 1 7.167h-85v-278l-28-28v306h-94v-400L84-740l20-20 628 628-20 20ZM548-430 349-628h171v-172h-60v-28h88v398Z"/>
    </Icon>
  );
});

IconMaterialCarryOnBagInactiveW100Filled.displayName = 'AmauiIconMaterialCarryOnBagInactiveW100Filled';

export default IconMaterialCarryOnBagInactiveW100Filled;
