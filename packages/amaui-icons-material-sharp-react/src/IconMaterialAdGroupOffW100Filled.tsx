import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAdGroupOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AdGroupOffW100Filled'

      short_name='AdGroupOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M816-104 628-292H266v-362L104-816l20-20 712 712-20 20Zm-658-80v-504h28v476h476v28H158Zm615-116L353-720h421v-80H295v22l-21-21v-29h528v528h-29Z"/>
    </Icon>
  );
});

IconMaterialAdGroupOffW100Filled.displayName = 'AmauiIconMaterialAdGroupOffW100Filled';

export default IconMaterialAdGroupOffW100Filled;
