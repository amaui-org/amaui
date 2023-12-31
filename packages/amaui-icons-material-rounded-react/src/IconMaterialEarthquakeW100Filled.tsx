import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialEarthquakeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EarthquakeW100Filled'

      short_name='Earthquake'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M368-132q-4.8 0-8.4-3-3.6-3-5.6-8l-98-323H146q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h120q4.588 0 8.294 2.5Q278-489 280-484l87 282 137-614q1.019-5.25 4.755-8.625 3.736-3.375 8.49-3.375 4.755 0 8.275 3.29 3.52 3.291 4.48 8.71l101 431 77-247q2-5 5.706-8 3.706-3 8.294-3 5 0 8 2.5t5 7.5l53 139h25q5.95 0 9.975 4.035 4.025 4.035 4.025 10T822.975-470q-4.025 4-9.975 4h-36q-5 0-8.2-2.423-3.2-2.423-4.8-6.577l-41-111-81 258q-2 5-5 8t-8 3q-5 0-8.913-3.4-3.913-3.4-5.087-8.6l-98-422-135 607q-2 5-5.6 8.294-3.6 3.294-8.4 3.706Z"/>
    </Icon>
  );
});

IconMaterialEarthquakeW100Filled.displayName = 'AmauiIconMaterialEarthquakeW100Filled';

export default IconMaterialEarthquakeW100Filled;
