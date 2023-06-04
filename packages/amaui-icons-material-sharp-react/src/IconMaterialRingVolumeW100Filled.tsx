import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialRingVolumeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RingVolumeW100Filled'

      short_name='RingVolume'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4.1 19.675 1.325 16.95q2.25-2.4 5.025-3.6 2.775-1.2 5.675-1.2t5.675 1.2q2.775 1.2 5.025 3.6l-2.775 2.725-3.275-2.475v-3.5q-1.2-.425-2.375-.638-1.175-.212-2.275-.212-1.1 0-2.275.212-1.175.213-2.375.638v3.5ZM11.675 6.9V3.2h.7v3.7Zm5.95 2.55-.5-.5 2.65-2.6.5.5Zm-11.2 0-2.7-2.55.55-.55 2.65 2.6Z"/>
    </Icon>
  );
});

IconMaterialRingVolumeW100Filled.displayName = 'AmauiIconMaterialRingVolumeW100Filled';

export default IconMaterialRingVolumeW100Filled;
