import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTargetW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TargetW100Filled'

      short_name='Target'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480.174-132Q408-132 344.442-159.391q-63.559-27.392-110.575-74.348-47.015-46.957-74.441-110.435Q132-407.652 132-479.826q0-72.174 27.391-135.732 27.392-63.559 74.348-110.574 46.957-47.016 110.435-74.442Q407.652-828 479.826-828q72.174 0 135.732 27.391 63.559 27.392 110.574 74.348 47.016 46.957 74.442 110.435Q828-552.348 828-480.174q0 72.174-27.391 135.732-27.392 63.559-74.348 110.575-46.957 47.015-110.435 74.441Q552.348-132 480.174-132ZM480-160q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm.235-132Q402-292 347-346.765q-55-54.764-55-133Q292-558 346.765-613q54.764-55 133-55Q558-668 613-613.235q55 54.764 55 133Q668-402 613.235-347q-54.764 55-133 55ZM480-320q66 0 113-47t47-113q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0-132q-11 0-19.5-8.5T452-480q0-11 8.5-19.5T480-508q11 0 19.5 8.5T508-480q0 11-8.5 19.5T480-452Z"/>
    </Icon>
  );
});

IconMaterialTargetW100Filled.displayName = 'AmauiIconMaterialTargetW100Filled';

export default IconMaterialTargetW100Filled;
