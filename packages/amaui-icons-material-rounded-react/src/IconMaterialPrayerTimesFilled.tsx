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
      <path d="M12 17q2.075 0 3.538-1.45Q17 14.1 17 12q0-.2-.012-.4-.013-.2-.063-.4-.275 1.175-1.225 1.937-.95.763-2.225.763-1.5 0-2.525-1.025T9.925 10.35q0-1.15.65-2.063.65-.912 1.7-1.287H12Q9.9 7 8.45 8.462 7 9.925 7 12q0 2.1 1.45 3.55Q9.9 17 12 17Zm1.025-5.5 1.475-1.075 1.45 1.075-.575-1.7 1.475-1.075-1.8.025L14.5 7l-.55 1.75-1.825-.025L13.6 9.8ZM8.65 20H6q-.825 0-1.412-.587Q4 18.825 4 18v-2.65l-1.9-1.925Q1.5 12.85 1.5 12q0-.85.6-1.425L4 8.65V6q0-.825.588-1.412Q5.175 4 6 4h2.65l1.925-1.9q.575-.6 1.425-.6.85 0 1.425.6L15.35 4H18q.825 0 1.413.588Q20 5.175 20 6v2.65l1.9 1.925q.6.575.6 1.425 0 .85-.6 1.425L20 15.35V18q0 .825-.587 1.413Q18.825 20 18 20h-2.65l-1.925 1.9q-.575.6-1.425.6-.85 0-1.425-.6Z"/>
    </Icon>
  );
});

IconMaterialPrayerTimesFilled.displayName = 'AmauiIconMaterialPrayerTimesFilled';

export default IconMaterialPrayerTimesFilled;
