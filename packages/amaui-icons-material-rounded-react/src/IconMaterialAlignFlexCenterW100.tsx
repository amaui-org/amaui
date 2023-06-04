import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialAlignFlexCenterW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AlignFlexCenterW100'

      short_name='AlignFlexCenter'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M489.965 924Q484 924 480 919.975T476 910V610H176q-12.75 0-21.375-8.625T146 580v-8q0-12.75 8.625-21.375T176 542h300V242q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v300h280q12.75 0 21.375 8.625T814 572v8q0 12.75-8.625 21.375T784 610H504v300q0 5.95-4.035 9.975-4.035 4.025-10 4.025Z"/>
    </Icon>
  );
});

IconMaterialAlignFlexCenterW100.displayName = 'AmauiIconMaterialAlignFlexCenterW100';

export default IconMaterialAlignFlexCenterW100;
