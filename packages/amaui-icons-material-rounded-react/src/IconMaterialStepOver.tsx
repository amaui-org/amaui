import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStepOver = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StepOver'

      short_name='StepOver'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 856q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm208-360q-32-54-86.5-87T480 376q-77 0-138 44t-87 113q-6 17-18.5 30T207 576q-18 0-29-14.5t-6-31.5q28-102 112.5-168T479 296q73 0 135 29.5T720 406v-70q0-17 11.5-28.5T760 296q17 0 28.5 11.5T800 336v200q0 17-11.5 28.5T760 576H560q-17 0-28.5-11.5T520 536q0-17 11.5-28.5T560 496h128Z"/>
    </Icon>
  );
});

IconMaterialStepOver.displayName = 'AmauiIconMaterialStepOver';

export default IconMaterialStepOver;
