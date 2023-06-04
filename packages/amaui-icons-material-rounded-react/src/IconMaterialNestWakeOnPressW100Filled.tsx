import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialNestWakeOnPressW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestWakeOnPressW100Filled'

      short_name='NestWakeOnPress'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M19.625 12.325q-.275 0-.487-.213-.213-.212-.213-.487v-4.95q0-.275.213-.488.212-.212.487-.212t.488.212q.212.213.212.488v4.95q0 .275-.212.487-.213.213-.488.213ZM7.375 19.8q-.15 0-.287-.062-.138-.063-.263-.188l-3.8-3.75q-.175-.175-.187-.413-.013-.237.112-.462.1-.175.313-.237.212-.063.412-.013l3.45.675V5.6q0-.5.35-.85t.85-.35q.5 0 .85.35t.35.85v5.3h1.05q.1 0 .188.025.087.025.162.075l3.05 1.5q.725.35 1.038 1.137.312.788.162 1.613l-.7 4q-.05.25-.237.4-.188.15-.463.15Z"/>
    </Icon>
  );
});

IconMaterialNestWakeOnPressW100Filled.displayName = 'AmauiIconMaterialNestWakeOnPressW100Filled';

export default IconMaterialNestWakeOnPressW100Filled;
