import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWatchWakeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WatchWakeW100Filled'

      short_name='WatchWake'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M799.965 750Q794 750 790 745.965t-4-10q0-5.965 4.035-9.965t10-4q5.965 0 9.965 4.035t4 10q0 5.965-4.035 9.965t-10 4ZM840 590h-40q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-9.965q4.025-4 9.975-4h40q5.95 0 9.975 4.035 4.025 4.035 4.025 10T849.975 586q-4.025 4-9.975 4Zm40-160h-80q-5.95 0-9.975-4.035-4.025-4.035-4.025-10t4.025-10.465Q794.05 401 800 401h80q5.95 0 9.975 4.345 4.025 4.345 4.025 10.5T889.975 426q-4.025 4-9.975 4ZM328 882q-10 0-17.917-6.069Q302.167 869.862 299 860l-24-86q-51-27-83.5-80T159 576q0-65 32.5-118t83.5-80l24-86q3.167-9.862 11.083-15.931Q318 270 328 270h118q10 0 17.917 6.069Q471.833 282.138 475 292l24 86q51 27 83.5 80T615 576q0 65-32.5 118T499 774l-24 86q-3.167 9.862-11.083 15.931Q456 882 446 882H328Zm59-106q83 0 141.5-58.5T587 576q0-83-58.5-141.5T387 376q-83 0-141.5 58.5T187 576q0 83 58.5 141.5T387 776Z"/>
    </Icon>
  );
});

IconMaterialWatchWakeW100Filled.displayName = 'AmauiIconMaterialWatchWakeW100Filled';

export default IconMaterialWatchWakeW100Filled;
