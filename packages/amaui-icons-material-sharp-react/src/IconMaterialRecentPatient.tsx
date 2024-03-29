import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRecentPatient = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RecentPatient'

      short_name='RecentPatient'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M160 896V784q0-34 17.5-62.5T224 678q62-31 126-46.5T480 616q20 0 40 1.5t40 4.5v81q-20-4-40-5.5t-40-1.5q-56 0-111 13.5T260 750q-9 5-14.5 14t-5.5 20v32h320v80H160Zm80-80h320-320Zm240-240q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T560 416q0-33-23.5-56.5T480 336q-33 0-56.5 23.5T400 416q0 33 23.5 56.5T480 496Zm0-80Zm240 640V856h-80V616h240l-80 160h80l-160 280Z"/>
    </Icon>
  );
});

IconMaterialRecentPatient.displayName = 'AmauiIconMaterialRecentPatient';

export default IconMaterialRecentPatient;
