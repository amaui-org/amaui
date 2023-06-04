import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStepIntoFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StepIntoFilled'

      short_name='StepInto'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 976q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-320L280 456l56-56 104 103V176h80v327l103-103 57 56-200 200Z"/>
    </Icon>
  );
});

IconMaterialStepIntoFilled.displayName = 'AmauiIconMaterialStepIntoFilled';

export default IconMaterialStepIntoFilled;
