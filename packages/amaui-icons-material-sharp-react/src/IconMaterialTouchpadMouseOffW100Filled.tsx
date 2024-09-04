import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTouchpadMouseOffW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TouchpadMouseOffW100Filled'

      short_name='TouchpadMouseOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-536h80l208 208q-14 27-21 57.5t-7 62.5v120q0 23 4 45t11 43H132Zm192-536h504v119q-37-29-78.5-44T660-688q-57 0-106.5 22.5T467-605L324-748Zm350 334v-174q66 6 110 56t44 118H674Zm-28-174v162L538-534q20-23 48-37t60-17Zm175 337L686-386h142v86q0 13-1.5 25.5T821-251ZM660-132q-70 0-119-49t-49-119v-86h42L90-830l20-20L872-88l-20 20-95-95q-20 14-45 22.5t-52 8.5Z"/>
    </Icon>
  );
});

IconMaterialTouchpadMouseOffW100Filled.displayName = 'AmauiIconMaterialTouchpadMouseOffW100Filled';

export default IconMaterialTouchpadMouseOffW100Filled;
