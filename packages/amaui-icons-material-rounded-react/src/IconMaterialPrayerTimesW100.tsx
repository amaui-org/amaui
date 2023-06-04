import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialPrayerTimesW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PrayerTimesW100'

      short_name='PrayerTimes'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M12 16q1.65 0 2.825-1.163Q16 13.675 16 12q0-.15-.012-.312-.013-.163-.063-.313-.225.925-.975 1.537-.75.613-1.775.613-1.2 0-2.025-.825t-.825-2q0-.95.538-1.675Q11.4 8.3 12.225 8H12q-1.675 0-2.837 1.175Q8 10.35 8 12q0 1.675 1.163 2.837Q10.325 16 12 16Zm.825-4.4L14 10.75l1.15.85-.45-1.375 1.175-.825h-1.45L14 8l-.45 1.4H12.1l1.175.825ZM9.2 18.7H6.8q-.625 0-1.062-.438Q5.3 17.825 5.3 17.2v-2.4l-1.75-1.75q-.425-.425-.425-1.05t.425-1.05L5.3 9.2V6.8q0-.625.438-1.062Q6.175 5.3 6.8 5.3h2.4l1.75-1.75q.425-.425 1.05-.425t1.05.425L14.8 5.3h2.4q.625 0 1.062.438.438.437.438 1.062v2.4l1.75 1.75q.425.425.425 1.05t-.425 1.05L18.7 14.8v2.4q0 .625-.438 1.062-.437.438-1.062.438h-2.4l-1.75 1.75q-.425.425-1.05.425t-1.05-.425ZM12 12Zm0 8.5 2.5-2.5H18v-3.5l2.5-2.5L18 9.5V6h-3.5L12 3.5 9.5 6H6v3.5L3.5 12 6 14.5V18h3.5Z"/>
    </Icon>
  );
});

IconMaterialPrayerTimesW100.displayName = 'AmauiIconMaterialPrayerTimesW100';

export default IconMaterialPrayerTimesW100;
