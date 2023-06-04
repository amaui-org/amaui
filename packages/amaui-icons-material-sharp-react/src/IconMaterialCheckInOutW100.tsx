import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialCheckInOutW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckInOutW100'

      short_name='CheckInOut'

      viewBox='0 96 960 960'

      {...props}
    >
      <path d="M304 794q-36 0-61.5-25.5T215 705q1-38 26.5-63.5t63-25.5q37.5 0 63.5 26t26 63q0 37-26 63t-64 26Zm-80-257V358h28v179h-28Zm80 232q26 0 44.5-18.5T367 705q0-27-18.5-46t-44.913-19Q278 640 259.5 659 241 678 241 705t18.5 45.5Q278 769 304 769Zm-2-232V358h34l81 134V358h28v179h-31l-85-141v141h-27Zm203.337 257Q477 794 457.5 773 438 752 438 722V616h26v107q0 19.714 11.885 32.857t29 13.143Q522 769 533.5 755.857T545 723V616h27v106q0 30-19.5 51t-47.163 21ZM666 794V640h-50v-24h128v24h-51v154h-27Z"/>
    </Icon>
  );
});

IconMaterialCheckInOutW100.displayName = 'AmauiIconMaterialCheckInOutW100';

export default IconMaterialCheckInOutW100;
