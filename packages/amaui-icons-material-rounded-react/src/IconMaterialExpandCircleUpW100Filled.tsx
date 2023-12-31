import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialExpandCircleUpW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExpandCircleUpW100Filled'

      short_name='ExpandCircleUp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-544 114 114q3.75 4 9.375 4t9.625-4q5-4 4.5-10t-4.5-10L501-562q-9-9-21-9t-21 9L347-450q-4 4-4.5 10t4.5 10q4 4 10 3.5t10-4.5l113-113Zm.174 412Q408-132 344.442-159.391q-63.559-27.392-110.575-74.348-47.015-46.957-74.441-110.435Q132-407.652 132-479.826q0-72.174 27.391-135.732 27.392-63.559 74.348-110.574 46.957-47.016 110.435-74.442Q407.652-828 479.826-828q72.174 0 135.732 27.391 63.559 27.392 110.574 74.348 47.016 46.957 74.442 110.435Q828-552.348 828-480.174q0 72.174-27.391 135.732-27.392 63.559-74.348 110.575-46.957 47.015-110.435 74.441Q552.348-132 480.174-132Z"/>
    </Icon>
  );
});

IconMaterialExpandCircleUpW100Filled.displayName = 'AmauiIconMaterialExpandCircleUpW100Filled';

export default IconMaterialExpandCircleUpW100Filled;
