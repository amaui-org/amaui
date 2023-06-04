import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialGlobeAsiaW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GlobeAsiaW100Filled'

      short_name='GlobeAsia'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="m472 895 6-167.428L600 608h78v74l89.417 14q10.809-28 17.196-58Q791 608 791 576q0-89-43.5-161.5T632 300v116H512v120h-80v120h-81l-79-120h-40v40l-69 79q26 104 111.5 172T472 895Zm160-239H512v-80h120v80Zm0-240h81l-41 120h-81l41-120ZM472.174 924Q400 924 336.442 896.609q-63.559-27.392-110.575-74.348-47.015-46.957-74.441-110.435Q124 648.348 124 576.174q0-72.174 27.391-135.732 27.392-63.559 74.348-110.574 46.957-47.016 110.435-74.442Q399.652 228 471.826 228q72.174 0 135.732 27.391 63.559 27.392 110.574 74.348 47.016 46.957 74.442 110.435Q820 503.652 820 575.826q0 72.174-27.391 135.732-27.392 63.559-74.348 110.575-46.957 47.015-110.435 74.441Q544.348 924 472.174 924Z"/>
    </Icon>
  );
});

IconMaterialGlobeAsiaW100Filled.displayName = 'AmauiIconMaterialGlobeAsiaW100Filled';

export default IconMaterialGlobeAsiaW100Filled;
