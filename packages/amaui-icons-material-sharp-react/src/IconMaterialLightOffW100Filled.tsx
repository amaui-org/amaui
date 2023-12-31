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
      <path d="M480-124q-26 0-45.5-17T410-184h140q-5 26-24.5 43T480-124Zm174-280L304-756q39-36 82-54t94-18q104 0 176 72t72 176q0 57-20.5 99T654-404Zm140 252-20 20-240-240H346q-53-36-83.5-89.5T232-580q0-21 4-44.5t10-35.5L122-784l20-20 652 652ZM614-292v28H346v-28h268Z"/>
    </Icon>
  );
});

IconMaterialLightOffW100Filled.displayName = 'AmauiIconMaterialLightOffW100Filled';

export default IconMaterialLightOffW100Filled;
