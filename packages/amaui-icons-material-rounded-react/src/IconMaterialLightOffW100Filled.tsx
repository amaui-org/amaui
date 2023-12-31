import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLightOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LightOffW100Filled'

      short_name='LightOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-124q-26 0-45.5-17T410-184h140q-5 26-24.5 43T480-124Zm174-280L304-756q39-36 82-54t94-18q104 0 176 72t72 176q0 57-20.5 99T654-404Zm-120 32H346q-53-36-83.5-89.5T232-580q0-21 4-44.5t10-35.5L132-774q-4-4-4.5-9.5T132-794q5-5 10-5t10 5l632 632q4 4 4.5 9.5T784-142q-5 5-10 5t-10-5L534-372ZM360-264q-6 0-10-4t-4-10q0-6 4-10t10-4h240q6 0 10 4t4 10q0 6-4 10t-10 4H360Z"/>
    </Icon>
  );
});

IconMaterialLightOffW100Filled.displayName = 'AmauiIconMaterialLightOffW100Filled';

export default IconMaterialLightOffW100Filled;
