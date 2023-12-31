import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTouchpadMouseW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TouchpadMouseW100Filled'

      short_name='TouchpadMouse'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M660-132q-70 0-119-49t-49-119v-86h336v86q0 70-49 119t-119 49Zm-528-80v-536h696v119q-36-29-79-44t-89-15q-112 0-190 78t-78 190v120q0 23 3.5 45t11.5 43H132Zm360-202q0-68 44-118t110-56v174H492Zm182 0v-174q66 6 110 56t44 118H674Z"/>
    </Icon>
  );
});

IconMaterialTouchpadMouseW100Filled.displayName = 'AmauiIconMaterialTouchpadMouseW100Filled';

export default IconMaterialTouchpadMouseW100Filled;
