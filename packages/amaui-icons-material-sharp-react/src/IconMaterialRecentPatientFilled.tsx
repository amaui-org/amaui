import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRecentPatientFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RecentPatientFilled'

      short_name='RecentPatient'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M160 896V784q0-34 17.5-62.5T224 678q62-31 126-46.5T480 616q20 0 40 1.5t40 4.5v274H160Zm320-320q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm240 480V856h-80V616h240l-80 160h80l-160 280Z"/>
    </Icon>
  );
});

IconMaterialRecentPatientFilled.displayName = 'AmauiIconMaterialRecentPatientFilled';

export default IconMaterialRecentPatientFilled;
