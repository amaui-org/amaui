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
      <path d="M480 856q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM163 576q14-119 104-199.5T479 296q73 0 135 29.5T720 406V296h80v280H520v-80h168q-32-54-86.5-87T480 376q-88 0-155 57t-81 143h-81Z"/>
    </Icon>
  );
});

IconMaterialStepOver.displayName = 'AmauiIconMaterialStepOver';

export default IconMaterialStepOver;
