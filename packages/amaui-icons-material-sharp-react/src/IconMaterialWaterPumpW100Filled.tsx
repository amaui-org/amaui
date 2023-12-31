import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWaterPumpW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterPumpW100Filled'

      short_name='WaterPump'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M479.893-252Q385-252 318.5-318.607q-66.5-66.608-66.5-161.5Q252-575 318.607-641.5q66.608-66.5 161.5-66.5Q575-708 641.5-641.393q66.5 66.608 66.5 161.5Q708-385 641.393-318.5q-66.608 66.5-161.5 66.5Zm.051-145Q511-397 532.5-418.445 554-439.891 554-470.21q0-14.79-5.55-27.584t-15.91-23.03L480-572l-52.54 51.176q-10.36 10.236-15.91 23.03Q406-485 406-470.21q0 30.319 21.444 51.765Q448.887-397 479.944-397ZM814-518v-28h-87q-14-54-48-95.5T597-708h217v-28h28v218h-28ZM118-224v-218h28v28h87q14 54 48 95.5t82 66.5H146v28h-28Z"/>
    </Icon>
  );
});

IconMaterialWaterPumpW100Filled.displayName = 'AmauiIconMaterialWaterPumpW100Filled';

export default IconMaterialWaterPumpW100Filled;
