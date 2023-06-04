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
      <path d="M9.125 18.9 7 19.75q-.375.15-.7-.075-.325-.225-.325-.625v-3.775q0-.375.175-.713.175-.337.5-.537l1.225-.8q.175 1.65.425 2.875t.825 2.8Zm2.35-14.45q.1-.125.238-.175.137-.05.287-.05.15 0 .288.05.137.05.237.175 1.575 1.7 2.25 3.612.675 1.913.675 4.238 0 1.575-.25 2.8-.25 1.225-.775 2.725-.1.25-.275.437-.175.188-.45.188h-3.4q-.275 0-.45-.188-.175-.187-.275-.437-.5-1.475-.763-2.725-.262-1.25-.262-2.8 0-2.325.675-4.238.675-1.912 2.25-3.612Zm.525 7.9q.575 0 .963-.388.387-.387.387-.962t-.387-.963Q12.575 9.65 12 9.65t-.962.387q-.388.388-.388.963t.388.962q.387.388.962.388Zm2.85 6.575q.575-1.575.825-2.812.25-1.238.425-2.888l1.225.825q.325.2.5.537.175.338.175.713v3.775q0 .4-.325.625-.325.225-.7.075Z"/>
    </Icon>
  );
});

IconMaterialRocketW100Filled.displayName = 'AmauiIconMaterialRocketW100Filled';

export default IconMaterialRocketW100Filled;
