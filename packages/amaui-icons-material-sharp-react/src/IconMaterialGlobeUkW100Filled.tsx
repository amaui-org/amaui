import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGlobeUkW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GlobeUkW100Filled'

      short_name='GlobeUk'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M480 896q18 0 34.5-2t33.5-6l-48-72H360v-40l80-80h80V576h-80l-40-40v-80h-88v-69l80-118q-101 29-166.5 113T160 576h40v-80h160v80l-40 40v120H203q42 72 115 116t162 44Zm304-222q8-23 12-47.5t4-50.5q0-112-68-197.5T560 266v110l80 80v80h47l97 138ZM480.174 924Q408 924 344.442 896.609q-63.559-27.392-110.575-74.348-47.015-46.957-74.441-110.435Q132 648.348 132 576.174q0-72.174 27.391-135.732 27.392-63.559 74.348-110.574 46.957-47.016 110.435-74.442Q407.652 228 479.826 228q72.174 0 135.732 27.391 63.559 27.392 110.574 74.348 47.016 46.957 74.442 110.435Q828 503.652 828 575.826q0 72.174-27.391 135.732-27.392 63.559-74.348 110.575-46.957 47.015-110.435 74.441Q552.348 924 480.174 924Z"/>
    </Icon>
  );
});

IconMaterialGlobeUkW100Filled.displayName = 'AmauiIconMaterialGlobeUkW100Filled';

export default IconMaterialGlobeUkW100Filled;
