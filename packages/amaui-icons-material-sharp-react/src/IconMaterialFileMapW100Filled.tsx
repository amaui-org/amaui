import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialFileMapW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='FileMapW100Filled'

      short_name='FileMap'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M172-172v-616h616v616H172Zm308-133q70.729-59.856 105.365-111.317Q620-467.778 620-511.575 620-578 578-616.5T480-655q-56 0-98 38.564t-42 104.778Q340-468 375-416.5T480-305Zm-.141-167Q463-472 451.5-483.641t-11.5-28.5Q440-529 451.641-540.5t28.5-11.5Q497-552 508.5-540.359t11.5 28.5Q520-495 508.359-483.5t-28.5 11.5Z"/>
    </Icon>
  );
});

IconMaterialFileMapW100Filled.displayName = 'AmauiIconMaterialFileMapW100Filled';

export default IconMaterialFileMapW100Filled;
