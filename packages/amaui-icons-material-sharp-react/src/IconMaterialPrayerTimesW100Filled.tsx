import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPrayerTimesW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrayerTimesW100Filled'

      short_name='PrayerTimes'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 16q1.65 0 2.825-1.163Q16 13.675 16 12q0-.15-.012-.312-.013-.163-.063-.313-.225.925-.975 1.537-.75.613-1.775.613-1.2 0-2.025-.825t-.825-2q0-.95.538-1.675Q11.4 8.3 12.225 8H12q-1.675 0-2.837 1.175Q8 10.35 8 12q0 1.675 1.163 2.837Q10.325 16 12 16Zm.825-4.4L14 10.75l1.15.85-.45-1.375 1.175-.825h-1.45L14 8l-.45 1.4H12.1l1.175.825ZM12 21.5l-2.8-2.8H5.3v-3.9L2.5 12l2.8-2.8V5.3h3.9L12 2.5l2.8 2.8h3.9v3.9l2.8 2.8-2.8 2.8v3.9h-3.9Z"/>
    </Icon>
  );
});

IconMaterialPrayerTimesW100Filled.displayName = 'AmauiIconMaterialPrayerTimesW100Filled';

export default IconMaterialPrayerTimesW100Filled;
