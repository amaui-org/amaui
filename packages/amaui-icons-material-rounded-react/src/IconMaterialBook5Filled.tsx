import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialBook5Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Book5Filled'

      short_name='Book5'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M270-80q-45 0-77.5-30.5T160-186v-558q0-38 23.5-68t61.5-38l300-59q37-8 66 16t29 62v477q0 29-18 51.5T576-275l-315 63q-9 2-15 9.5t-6 16.5q0 11 9 18.5t21 7.5h450v-600q0-17 11.5-28.5T760-800q17 0 28.5 11.5T800-760v600q0 33-23.5 56.5T720-80H270Zm58-226q14-3 23-14t9-25v-397q0-19-14.5-31t-33.5-8q-14 3-23 14t-9 25v397q0 19 14.5 31t33.5 8Z"/>
    </Icon>
  );
});

IconMaterialBook5Filled.displayName = 'AmauiIconMaterialBook5Filled';

export default IconMaterialBook5Filled;
