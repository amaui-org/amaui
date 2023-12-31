import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialHourglassW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HourglassW100Filled'

      short_name='Hourglass'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M226-132q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h56v-120q0-78 50.5-136.5T460-480q-77-6-127.5-64T282-680v-120h-56q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h508q5.95 0 9.975 4.035 4.025 4.035 4.025 10T743.975-804q-4.025 4-9.975 4h-56v120q0 78-50.5 136T500-480q77 5 127.5 63.5T678-280v120h56q5.95 0 9.975 4.035 4.025 4.035 4.025 10T743.975-136q-4.025 4-9.975 4H226Z"/>
    </Icon>
  );
});

IconMaterialHourglassW100Filled.displayName = 'AmauiIconMaterialHourglassW100Filled';

export default IconMaterialHourglassW100Filled;
