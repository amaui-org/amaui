import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPodiumFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PodiumFilled'

      short_name='Podium'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M500 276q0 33-23.5 56.5T420 356q-13 0-24-3.5T374 341q-24 8-38.5 29T321 416h519l-40 280H693l19-190H248l19 190H160l-40-280h120q0-49 27-89t73-59q3-31 26-51.5t54-20.5q33 0 56.5 23.5T500 276ZM347 906h266l32-340H315l32 340Z"/>
    </Icon>
  );
});

IconMaterialPodiumFilled.displayName = 'AmauiIconMaterialPodiumFilled';

export default IconMaterialPodiumFilled;
