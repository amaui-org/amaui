import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialWatchScreentimeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WatchScreentimeW100Filled'

      short_name='WatchScreentime'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M406.047 650Q400 650 396 646.033q-4-3.966-4-10.033V516q0-6.067 3.953-10.033 3.954-3.967 10-3.967Q412 502 416 505.967q4 3.966 4 10.033v120q0 6.067-3.953 10.033-3.954 3.967-10 3.967Zm74 0Q474 650 470 646.033q-4-3.966-4-10.033v-80q0-6.067 3.953-10.033 3.954-3.967 10-3.967Q486 542 490 545.967q4 3.966 4 10.033v80q0 6.067-3.953 10.033-3.954 3.967-10 3.967Zm74 0Q548 650 544 646.033q-4-3.966-4-10.033v-40q0-6.067 3.953-10.033 3.954-3.967 10-3.967Q560 582 564 585.967q4 3.966 4 10.033v40q0 6.067-3.953 10.033-3.954 3.967-10 3.967ZM444 882q-19.971 0-36.486-12Q391 858 386 838l-18-64q-51-27-83.5-80T252 576q0-65 32.5-118t83.5-80l18-64q5-20 21.514-32 16.515-12 36.486-12h72q19.971 0 36.485 12Q569 294 574 314l18 64q51 27 83.5 80T708 576q0 65-32.5 118T592 774l-18 64q-5 20-21.515 32-16.514 12-36.485 12h-72Zm36-106q83 0 141.5-58.5T680 576q0-83-58.5-141.5T480 376q-83 0-141.5 58.5T280 576q0 83 58.5 141.5T480 776Z"/>
    </Icon>
  );
});

IconMaterialWatchScreentimeW100Filled.displayName = 'AmauiIconMaterialWatchScreentimeW100Filled';

export default IconMaterialWatchScreentimeW100Filled;
