import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWatchButtonPressW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WatchButtonPressW100Filled'

      short_name='WatchButtonPress'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M728.965 575Q723 575 719 570.975T715 561V284q0-5.95 4.035-9.975 4.035-4.025 10-4.025t9.965 4.025q4 4.025 4 9.975v277q0 5.95-4.035 9.975-4.035 4.025-10 4.025ZM351 882q-19.971 0-36.486-12Q298 858 293 838l-18-64q-51-27-83.5-80T159 576q0-65 32.5-118t83.5-80l18-64q5-20 21.514-32 16.515-12 36.486-12h72q19.971 0 36.486 12Q476 294 481 314l18 64q51 27 83.5 80T615 576q0 65-32.5 118T499 774l-18 64q-5 20-21.514 32-16.515 12-36.486 12h-72Zm36-106q83 0 141.5-58.5T587 576q0-83-58.5-141.5T387 376q-83 0-141.5 58.5T187 576q0 83 58.5 141.5T387 776Z"/>
    </Icon>
  );
});

IconMaterialWatchButtonPressW100Filled.displayName = 'AmauiIconMaterialWatchButtonPressW100Filled';

export default IconMaterialWatchButtonPressW100Filled;
