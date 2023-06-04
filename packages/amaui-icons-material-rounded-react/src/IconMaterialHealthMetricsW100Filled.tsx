import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHealthMetricsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HealthMetricsW100Filled'

      short_name='HealthMetrics'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M392 916q-24.75 0-42.375-17.625T332 856V724H200q-24.75 0-42.375-17.625T140 664v-74h212l76 114q2 3 4.5 4.5t6.413 1.5q5.087 0 8.587-2.5t5.5-7.5l71-213 64 96q2.118 3.111 5.294 5.056Q596.471 590 600 590h220v74q0 24.75-17.625 42.375T760 724H628v132q0 24.75-17.625 42.375T568 916H392Zm44-251-65-97q-2-3-4.5-4.5T360 562H140v-74q0-24.75 17.625-42.375T200 428h132V296q0-24.75 17.625-42.375T392 236h176q24.75 0 42.375 17.625T628 296v132h132q24.75 0 42.375 17.625T820 488v74H607l-75-114q-1.848-2.667-5.174-4.333Q523.5 442 519.804 442 515 442 512 444.5t-5 7.5l-71 213Z"/>
    </Icon>
  );
});

IconMaterialHealthMetricsW100Filled.displayName = 'AmauiIconMaterialHealthMetricsW100Filled';

export default IconMaterialHealthMetricsW100Filled;
