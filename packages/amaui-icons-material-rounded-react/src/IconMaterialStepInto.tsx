import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialStepInto = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='StepInto'

      short_name='StepInto'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 976q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm-40-473V216q0-17 11.5-28.5T480 176q17 0 28.5 11.5T520 216v287l75-75q11-11 27.5-11t28.5 11q12 12 12 28.5T651 485L508 628q-12 12-28 12t-28-12L308 484q-11-11-11.5-27.5T308 428q11-11 28-11t28 11l76 75Z"/>
    </Icon>
  );
});

IconMaterialStepInto.displayName = 'AmauiIconMaterialStepInto';

export default IconMaterialStepInto;
