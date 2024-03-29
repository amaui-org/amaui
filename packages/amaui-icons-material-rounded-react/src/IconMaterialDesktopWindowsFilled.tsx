import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialDesktopWindowsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DesktopWindowsFilled'

      short_name='DesktopWindows'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M9 22q-.425 0-.712-.288Q8 21.425 8 21t.288-.712Q8.575 20 9 20h1v-2H4q-.825 0-1.412-.587Q2 16.825 2 16V5q0-.825.588-1.413Q3.175 3 4 3h16q.825 0 1.413.587Q22 4.175 22 5v11q0 .825-.587 1.413Q20.825 18 20 18h-6v2h1q.425 0 .713.288.287.287.287.712t-.287.712Q15.425 22 15 22Z"/>
    </Icon>
  );
});

IconMaterialDesktopWindowsFilled.displayName = 'AmauiIconMaterialDesktopWindowsFilled';

export default IconMaterialDesktopWindowsFilled;
