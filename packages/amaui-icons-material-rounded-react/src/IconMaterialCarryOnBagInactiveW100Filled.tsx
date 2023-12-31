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
      <path d="M702-122 592-229q8 8 13 19t5 24q0 25.833-18.118 43.917-18.117 18.083-44 18.083Q522-124 504-142.118q-18-18.117-18-44Q486-212 504.083-230q18.084-18 43.917-18 11 0 22 4t19 12l-44-44q-37 1-62 27t-25 63v6.833q0 3.167 1 7.167h-85v-278l-28-28v306h-34q-25.75 0-42.875-17.125T252-232v-340L94-730q-4-4-4.5-9.5T94-750q5-5 10-5t10 5l608 608q4 4 4.5 9.5t-4.196 10.196Q718-118 712.5-118t-10.5-4ZM548-430 349-628h171v-172h-46q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h44q12.75 0 21.375 8.625T548-798v368Z"/>
    </Icon>
  );
});

IconMaterialCarryOnBagInactiveW100Filled.displayName = 'AmauiIconMaterialCarryOnBagInactiveW100Filled';

export default IconMaterialCarryOnBagInactiveW100Filled;
