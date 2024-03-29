import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialTvOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TvOff'

      short_name='TvOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M21.325 18.475 20 17.15V5H7.85l-2-2H20q.825 0 1.413.587Q22 4.175 22 5v12q0 .45-.163.812-.162.363-.512.663Zm-18.15-15.3L5 5H4v12h10.15L1.4 4.2q-.275-.275-.287-.688Q1.1 3.1 1.4 2.8q.275-.275.7-.275.425 0 .7.275l18.4 18.4q.275.275.275.7 0 .425-.275.7-.275.275-.7.275-.425 0-.7-.275L16.2 19H16v1q0 .425-.287.712Q15.425 21 15 21H9q-.425 0-.712-.288Q8 20.425 8 20v-1H4q-.825 0-1.412-.587Q2 17.825 2 17V5q0-.925.588-1.375l.587-.45ZM9.1 11.95Zm4.875-.825Z"/>
    </Icon>
  );
});

IconMaterialTvOff.displayName = 'AmauiIconMaterialTvOff';

export default IconMaterialTvOff;
