import React from 'react';

import { Icon } from '@amaui/ui-react';

const IconMaterialNestCamStandRoundedW100Filled = React.forwardRef((props: any, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestCamStandRoundedW100Filled'
      short_name='NestCamStand'

      {...props}
    >
      <path d="M6.875 19.7q-.65 0-1.1-.488-.45-.487-.4-1.137L5.9 11.9q.125-1.95 1.363-3.413Q8.5 7.025 10.3 6.525V6q0-.725.488-1.213Q11.275 4.3 12 4.3t1.213.487Q13.7 5.275 13.7 6v.525q1.8.5 3.05 1.962Q18 9.95 18.125 11.9l.525 6.175q.05.65-.4 1.137-.45.488-1.1.488ZM12 11q.425 0 .713-.288Q13 10.425 13 10V6q0-.425-.287-.713Q12.425 5 12 5t-.712.287Q11 5.575 11 6v4q0 .425.288.712.287.288.712.288Z"/>
    </Icon>
  );
});

IconMaterialNestCamStandRoundedW100Filled.displayName = 'AmauiIconMaterialNestCamStandRoundedW100Filled';

export default IconMaterialNestCamStandRoundedW100Filled;
