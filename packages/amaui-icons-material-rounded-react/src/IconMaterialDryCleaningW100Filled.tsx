import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDryCleaningW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DryCleaningW100Filled'

      short_name='DryCleaning'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M8.35 21.35q-.275 0-.487-.212-.213-.213-.213-.488v-5.3H5.4q-.725 0-1.238-.513-.512-.512-.512-1.237 0-.525.3-.988.3-.462.75-.662l6.95-3.1V7.3q-.875-.125-1.437-.763Q9.65 5.9 9.65 5q0-.975.688-1.663.687-.687 1.662-.687.9 0 1.55.575t.775 1.375q.025.2-.1.3-.125.1-.275.1-.15 0-.25-.088-.1-.087-.125-.237-.125-.575-.55-.95Q12.6 3.35 12 3.35q-.675 0-1.162.487-.488.488-.488 1.163t.488 1.162q.487.488 1.162.488.15 0 .25.1t.1.25v1.85l6.95 3.1q.45.2.75.662.3.463.3.988 0 .725-.512 1.237-.513.513-1.238.513h-2.25v5.3q0 .275-.212.488-.213.212-.488.212Zm-2.95-6.7h2.25v-.3q0-.275.213-.488.212-.212.487-.212h7.3q.275 0 .488.212.212.213.212.488v.3h2.25q.525 0 .788-.313.262-.312.262-.737 0-.3-.15-.575-.15-.275-.45-.425L12 9.5l-7 3.1q-.35.15-.5.4-.15.25-.15.6 0 .375.263.712.262.338.787.338Z"/>
    </Icon>
  );
});

IconMaterialDryCleaningW100Filled.displayName = 'AmauiIconMaterialDryCleaningW100Filled';

export default IconMaterialDryCleaningW100Filled;
