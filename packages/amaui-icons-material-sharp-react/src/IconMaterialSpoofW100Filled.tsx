import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialSpoofW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SpoofW100Filled'

      short_name='Spoof'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 824q-125 0-228.5-67T96 576q52-114 155.5-181T480 328q125 0 228.5 67T864 576q-52 114-155.5 181T480 824ZM129 573q69-72 160-108.5T480 428q99 0 188 41.5T832 575q-50-101-144.5-160T480 356q-112 0-206.5 58.5T129 573Zm351 223q106 0 196.5-52T820 601q-52-46-112-80.5T582 469q21 20 33.5 47.5T628 576q0 62-43 105t-105 43q-62 0-105-43t-43-105q0-33 13-61.5t36-48.5q-69 14-131 47.5T140 601q53 91 143.5 143T480 796Zm0-100q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Z"/>
    </Icon>
  );
});

IconMaterialSpoofW100Filled.displayName = 'AmauiIconMaterialSpoofW100Filled';

export default IconMaterialSpoofW100Filled;
