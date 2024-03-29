import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPrayerTimesFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrayerTimesFilled'

      short_name='PrayerTimes'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 17q2.075 0 3.538-1.45Q17 14.1 17 12q0-.2-.012-.4-.013-.2-.063-.4-.275 1.175-1.225 1.937-.95.763-2.225.763-1.5 0-2.525-1.025T9.925 10.35q0-1.15.65-2.063.65-.912 1.7-1.287H12Q9.9 7 8.45 8.462 7 9.925 7 12q0 2.1 1.45 3.55Q9.9 17 12 17Zm1.025-5.5 1.475-1.075 1.45 1.075-.575-1.7 1.475-1.075-1.8.025L14.5 7l-.55 1.75-1.825-.025L13.6 9.8ZM12 23.3 8.65 20H4v-4.65L.7 12 4 8.65V4h4.65L12 .7 15.35 4H20v4.65L23.3 12 20 15.35V20h-4.65Z"/>
    </Icon>
  );
});

IconMaterialPrayerTimesFilled.displayName = 'AmauiIconMaterialPrayerTimesFilled';

export default IconMaterialPrayerTimesFilled;
