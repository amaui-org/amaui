import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNestCamWallMountFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestCamWallMountFilled'

      short_name='NestCamWallMount'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 17.45H2v-12h2q.825 0 1.412.6Q6 6.65 6 7.475q.875-1.375 2.312-2.2Q9.75 4.45 11.5 4.45q1.3 0 2.488.488 1.187.487 2.112 1.412l5.725 5.725-9.175 9.175-5.75-5.7q-.275-.275-.488-.55-.212-.275-.412-.575v1.025q0 .825-.588 1.412-.587.588-1.412.588Z"/>
    </Icon>
  );
});

IconMaterialNestCamWallMountFilled.displayName = 'AmauiIconMaterialNestCamWallMountFilled';

export default IconMaterialNestCamWallMountFilled;
