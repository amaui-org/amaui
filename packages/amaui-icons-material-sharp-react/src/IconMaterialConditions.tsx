import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialConditions = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Conditions'

      short_name='Conditions'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M400 336q-33 0-56.5-23.5T320 256q0-33 23.5-56.5T400 176q33 0 56.5 23.5T480 256q0 33-23.5 56.5T400 336Zm260 480q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29Zm204 160L756 868q-22 14-46 21t-50 7q-75 0-127.5-52.5T480 716q0-75 52.5-127.5T660 536q75 0 127.5 52.5T840 716q0 26-7 50t-21 46l108 108-56 56Zm-424 0V855q15 24 35.5 44t44.5 36v41h-80Zm-160 0V456q-61-5-121-14.5T40 416l20-80q84 23 168.5 31.5T400 376q87 0 171.5-8.5T740 336l20 80q-59 16-119 25.5T520 456v41q-54 35-87 92.5T400 716v10q0 5 1 10h-41v240h-80Z"/>
    </Icon>
  );
});

IconMaterialConditions.displayName = 'AmauiIconMaterialConditions';

export default IconMaterialConditions;
