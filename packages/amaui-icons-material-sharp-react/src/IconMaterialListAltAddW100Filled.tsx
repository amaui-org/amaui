import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialListAltAddW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ListAltAddW100Filled'

      short_name='ListAltAdd'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M702 990V870H582v-28h120V722h28v120h120v28H730v120h-28ZM326.07 752q11.93 0 19.93-8.07t8-20q0-11.93-8.07-19.93t-20-8Q314 696 306 704.07t-8 20q0 11.93 8.07 19.93t20 8Zm0-148q11.93 0 19.93-8.07t8-20q0-11.93-8.07-19.93t-20-8Q314 548 306 556.07t-8 20q0 11.93 8.07 19.93t20 8Zm0-148q11.93 0 19.93-8.07t8-20q0-11.93-8.07-19.93t-20-8Q314 400 306 408.07t-8 20q0 11.93 8.07 19.93t20 8ZM450 590h208v-28H450v28Zm0-148h208v-28H450v28ZM172 884V268h616v387q-16.568-6-35.284-9Q734 643 716 643q-46.152 0-86.208 17.81T561 710H450v28h88q-17 26-26.5 55.5T502 856q0 7 .462 14 .461 7 1.538 14H172Z"/>
    </Icon>
  );
});

IconMaterialListAltAddW100Filled.displayName = 'AmauiIconMaterialListAltAddW100Filled';

export default IconMaterialListAltAddW100Filled;
