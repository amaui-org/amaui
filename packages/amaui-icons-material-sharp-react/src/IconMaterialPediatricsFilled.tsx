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
      <path d="M280 376v-80h160V176h80v120h160v80H280Zm80 600q-33 0-56.5-23.5T280 896v-80h200v-80H280v-80h200v-80H280v-40q0-50 35-85t85-35h160q50 0 85 35t35 85v360q0 33-23.5 56.5T600 976H360Z"/>
    </Icon>
  );
});

IconMaterialPediatricsFilled.displayName = 'AmauiIconMaterialPediatricsFilled';

export default IconMaterialPediatricsFilled;
