import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTvOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TvOffFilled'

      short_name='TvOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M21.325 18.475 5.85 3H20q.825 0 1.413.587Q22 4.175 22 5v12q0 .45-.163.812-.162.363-.512.663Zm-18.15-15.3v2.8L1.4 4.2q-.275-.275-.275-.7 0-.425.275-.7.275-.275.7-.275.425 0 .7.275l18.4 18.4q.275.275.275.7 0 .425-.275.7-.275.275-.7.275-.425 0-.7-.275L16.2 19H16v1q0 .425-.287.712Q15.425 21 15 21H9q-.425 0-.712-.288Q8 20.425 8 20v-1H4q-.825 0-1.412-.587Q2 17.825 2 17V5q0-.925.588-1.375l.587-.45Z"/>
    </Icon>
  );
});

IconMaterialTvOffFilled.displayName = 'AmauiIconMaterialTvOffFilled';

export default IconMaterialTvOffFilled;
