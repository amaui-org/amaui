import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPodium = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Podium'

      short_name='Podium'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M500 276q0 33-23.5 56.5T420 356q-13 0-24-3.5T374 341q-24 8-38.5 29T321 416h519l-40 280H604v-80h127l17-120H212l17 120h127v80H160l-40-280h120q0-49 27-89t73-59q3-31 26-51.5t54-20.5q33 0 56.5 23.5T500 276ZM391 856h178l23-240H368l23 240Zm-71 80-38-400h396l-38 400H320Z"/>
    </Icon>
  );
});

IconMaterialPodium.displayName = 'AmauiIconMaterialPodium';

export default IconMaterialPodium;
