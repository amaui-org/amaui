import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEnergyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EnergyW100Filled'

      short_name='Energy'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M376-102v-8q0-32 27.5-50t62.5-18v-318q-29-3-51.5-21T382-562l-112 28q-22 6-43-3t-35-27l184-46q5-42 35.5-69t72.5-25l32-112q7-24 24.5-41t41.5-17l-52 182q26 14 40 38.5t14 53.5q0 14-3.5 27.5T572-546l80 84q17 17 23.5 40t-3.5 44L538-512q-10 7-21 10.5t-23 5.5v318q35 0 62.5 18t27.5 50v8H376Zm104-422q32 0 54-22t22-54q0-32-22-54t-54-22q-32 0-54 22t-22 54q0 32 22 54t54 22Z"/>
    </Icon>
  );
});

IconMaterialEnergyW100Filled.displayName = 'AmauiIconMaterialEnergyW100Filled';

export default IconMaterialEnergyW100Filled;
