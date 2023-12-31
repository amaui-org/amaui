import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCommunitiesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CommunitiesW100Filled'

      short_name='Communities'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-346q23 0 38.5-15.5T414-400q0-23-15.5-38.5T360-454q-23 0-38.5 15.5T306-400q0 23 15.5 38.5T360-346Zm240 0q23 0 38.5-15.5T654-400q0-23-15.5-38.5T600-454q-23 0-38.5 15.5T546-400q0 23 15.5 38.5T600-346ZM480-546q23 0 38.5-15.5T534-600q0-23-15.5-38.5T480-654q-23 0-38.5 15.5T426-600q0 23 15.5 38.5T480-546Zm.174 414Q408-132 344.442-159.391q-63.559-27.392-110.575-74.348-47.015-46.957-74.441-110.435Q132-407.652 132-479.826q0-72.174 27.391-135.732 27.392-63.559 74.348-110.574 46.957-47.016 110.435-74.442Q407.652-828 479.826-828q72.174 0 135.732 27.391 63.559 27.392 110.574 74.348 47.016 46.957 74.442 110.435Q828-552.348 828-480.174q0 72.174-27.391 135.732-27.392 63.559-74.348 110.575-46.957 47.015-110.435 74.441Q552.348-132 480.174-132Z"/>
    </Icon>
  );
});

IconMaterialCommunitiesW100Filled.displayName = 'AmauiIconMaterialCommunitiesW100Filled';

export default IconMaterialCommunitiesW100Filled;
