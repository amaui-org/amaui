import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialExploreNearbyW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ExploreNearbyW100Filled'

      short_name='ExploreNearby'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480.174-132Q408-132 344.442-159.391q-63.559-27.392-110.575-74.348-47.015-46.957-74.441-110.435Q132-407.652 132-479.826q0-72.174 27.391-135.732 27.392-63.559 74.348-110.574 46.957-47.016 110.435-74.442Q407.652-828 479.826-828q72.174 0 135.732 27.391 63.559 27.392 110.574 74.348 47.016 46.957 74.442 110.435Q828-552.348 828-480.174q0 72.174-27.391 135.732-27.392 63.559-74.348 110.575-46.957 47.015-110.435 74.441Q552.348-132 480.174-132ZM480-330q31-31 54.692-63.36Q555-421 572-455t17-66.421Q589-566 556.973-598q-32.026-32-77-32Q435-630 403-597.981 371-565.963 371-521q0 32 17.188 65.842Q405.375-421.317 426-393q23 32 54 63Zm.059-150Q463-480 451-491.941t-12-29Q439-538 450.941-550t29-12Q497-562 509-550.059t12 29Q521-504 509.059-492t-29 12Z"/>
    </Icon>
  );
});

IconMaterialExploreNearbyW100Filled.displayName = 'AmauiIconMaterialExploreNearbyW100Filled';

export default IconMaterialExploreNearbyW100Filled;
