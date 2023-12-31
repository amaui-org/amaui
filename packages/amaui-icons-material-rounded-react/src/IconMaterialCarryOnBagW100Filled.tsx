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
      <path d="M587.882-124Q562-124 544-142.118q-18-18.117-18-44Q526-212 544.118-230q18.117-18 44-18Q614-248 632-229.882q18 18.117 18 44Q650-160 631.882-142q-18.117 18-44 18ZM352-172q-24.75 0-42.375-17.625T292-232v-336q0-24.75 17.625-42.375T352-628h34v456h-34Zm62 0v-456h146v-172h-46q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h44q12.75 0 21.375 8.625T588-798v522q-38 0-64 26.25T498-186v6.833q0 3.167 1 7.167h-85Z"/>
    </Icon>
  );
});

IconMaterialCarryOnBagW100Filled.displayName = 'AmauiIconMaterialCarryOnBagW100Filled';

export default IconMaterialCarryOnBagW100Filled;
