import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStepOut = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StepOut'

      short_name='StepOut'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 976q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm-40-320V329L336 432l-56-56 200-200 200 200-57 56-103-103v327h-80Z"/>
    </Icon>
  );
});

IconMaterialStepOut.displayName = 'AmauiIconMaterialStepOut';

export default IconMaterialStepOut;
