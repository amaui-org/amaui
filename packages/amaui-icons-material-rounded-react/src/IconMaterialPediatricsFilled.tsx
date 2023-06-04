import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPediatricsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PediatricsFilled'

      short_name='Pediatrics'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M320 376q-17 0-28.5-11.5T280 336q0-17 11.5-28.5T320 296h120v-80q0-17 11.5-28.5T480 176q17 0 28.5 11.5T520 216v80h120q17 0 28.5 11.5T680 336q0 17-11.5 28.5T640 376H320Zm40 600q-33 0-56.5-23.5T280 896v-80h160q17 0 28.5-11.5T480 776q0-17-11.5-28.5T440 736H280v-80h160q17 0 28.5-11.5T480 616q0-17-11.5-28.5T440 576H280v-40q0-50 35-85t85-35h160q50 0 85 35t35 85v360q0 33-23.5 56.5T600 976H360Z"/>
    </Icon>
  );
});

IconMaterialPediatricsFilled.displayName = 'AmauiIconMaterialPediatricsFilled';

export default IconMaterialPediatricsFilled;
