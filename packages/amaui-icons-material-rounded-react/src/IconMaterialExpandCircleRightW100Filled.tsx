import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialExpandCircleRightW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExpandCircleRightW100Filled'

      short_name='ExpandCircleRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M544-480 430-366q-4 3.75-4 9.375t4 9.625q4 5 10 4.5t10-4.5l112-112q9-9 9-21t-9-21L450-613q-4-4-10-4.5t-10 4.5q-4 4-3.5 10t4.5 10l113 113Zm-63.826 348Q408-132 344.442-159.391q-63.559-27.392-110.575-74.348-47.015-46.957-74.441-110.435Q132-407.652 132-479.826q0-72.174 27.391-135.732 27.392-63.559 74.348-110.574 46.957-47.016 110.435-74.442Q407.652-828 479.826-828q72.174 0 135.732 27.391 63.559 27.392 110.574 74.348 47.016 46.957 74.442 110.435Q828-552.348 828-480.174q0 72.174-27.391 135.732-27.392 63.559-74.348 110.575-46.957 47.015-110.435 74.441Q552.348-132 480.174-132Z"/>
    </Icon>
  );
});

IconMaterialExpandCircleRightW100Filled.displayName = 'AmauiIconMaterialExpandCircleRightW100Filled';

export default IconMaterialExpandCircleRightW100Filled;
