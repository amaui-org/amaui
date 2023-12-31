import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLightOffW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LightOffW100'

      short_name='LightOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-124q-26 0-45.5-17T410-184h140q-5 26-24.5 43T480-124Zm0-676q-45 0-86 17.5T324-736l-20-20q39-36 82-54t94-18q104 0 176 72t72 176q0 57-20.5 99T654-404l-20-20q24-23 45-62.5t21-93.5q0-92-64-156t-156-64Zm314 648-20 20-240-240H346q-53-36-83.5-89.5T232-580q0-21 4-44.5t10-35.5L122-784l20-20 652 652ZM354-400h152L268-638q-3 11-5.5 27.5T260-580q0 54 24.5 101t69.5 79Zm27-125Zm93-60Zm140 293v28H346v-28h268Z"/>
    </Icon>
  );
});

IconMaterialLightOffW100.displayName = 'AmauiIconMaterialLightOffW100';

export default IconMaterialLightOffW100;
