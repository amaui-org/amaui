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
      <path d="M480-124q-26 0-45.5-17T410-184h140q-5 26-24.5 43T480-124Zm0-676q-45 0-86 17.5T324-736l-20-20q39-36 82-54t94-18q104 0 176 72t72 176q0 57-20.5 99T654-404l-20-20q24-23 45-62.5t21-93.5q0-92-64-156t-156-64Zm54 428H346q-53-36-83.5-89.5T232-580q0-21 4-44.5t10-35.5L132-774q-4-4-4.5-9.5T132-794q5-5 10-5t10 5l632 632q4 4 4.5 9.5T784-142q-5 5-10 5t-10-5L534-372Zm-180-28h152L268-638q-3 11-5.5 27.5T260-580q0 54 24.5 101t69.5 79Zm27-125Zm93-60ZM360-264q-6 0-10-4t-4-10q0-6 4-10t10-4h240q6 0 10 4t4 10q0 6-4 10t-10 4H360Z"/>
    </Icon>
  );
});

IconMaterialLightOffW100.displayName = 'AmauiIconMaterialLightOffW100';

export default IconMaterialLightOffW100;
