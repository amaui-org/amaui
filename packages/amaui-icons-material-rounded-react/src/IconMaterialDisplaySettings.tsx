import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDisplaySettings = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DisplaySettings'

      short_name='DisplaySettings'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M15 11h1.5V9.75H18v-1.5h-1.5V7H15ZM6 9.75h8v-1.5H6ZM7.5 15H9v-4H7.5v1.25H6v1.5h1.5Zm2.5-1.25h8v-1.5h-8ZM9 21q-.425 0-.712-.288Q8 20.425 8 20v-1H4q-.825 0-1.412-.587Q2 17.825 2 17V5q0-.825.588-1.413Q3.175 3 4 3h16q.825 0 1.413.587Q22 4.175 22 5v12q0 .825-.587 1.413Q20.825 19 20 19h-4v1q0 .425-.287.712Q15.425 21 15 21Zm-5-4h16V5H4v12Zm0 0V5v12Z"/>
    </Icon>
  );
});

IconMaterialDisplaySettings.displayName = 'AmauiIconMaterialDisplaySettings';

export default IconMaterialDisplaySettings;
