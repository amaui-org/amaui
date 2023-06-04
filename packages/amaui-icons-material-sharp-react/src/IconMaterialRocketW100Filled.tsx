import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRocketW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RocketW100Filled'

      short_name='Rocket'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5.975 20.175v-4.9q0-.375.175-.713.175-.337.5-.537l1.225-.8q.175 1.65.425 2.875t.825 2.8Zm3.7-1.725q-.525-1.5-.825-3.038-.3-1.537-.3-3.112 0-2.5.8-4.55T12 3.9q1.85 1.8 2.65 3.85.8 2.05.8 4.55 0 1.575-.3 3.112-.3 1.538-.825 3.038ZM12 12.35q.575 0 .963-.388.387-.387.387-.962t-.387-.963Q12.575 9.65 12 9.65t-.962.387q-.388.388-.388.963t.388.962q.387.388.962.388Zm6 7.825-3.15-1.25q.575-1.575.825-2.812.25-1.238.425-2.888l1.225.825q.325.2.5.537.175.338.175.713Z"/>
    </Icon>
  );
});

IconMaterialRocketW100Filled.displayName = 'AmauiIconMaterialRocketW100Filled';

export default IconMaterialRocketW100Filled;
