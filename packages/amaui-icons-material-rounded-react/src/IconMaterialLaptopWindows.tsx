import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLaptopWindows = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LaptopWindows'

      short_name='LaptopWindows'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M1 20q-.425 0-.712-.288Q0 19.425 0 19t.288-.712Q.575 18 1 18h3v-1q-.825 0-1.412-.587Q2 15.825 2 15V5q0-.825.588-1.413Q3.175 3 4 3h16q.825 0 1.413.587Q22 4.175 22 5v10q0 .825-.587 1.413Q20.825 17 20 17v1h3q.425 0 .712.288.288.287.288.712t-.288.712Q23.425 20 23 20Zm3-5h16V5H4v10Zm0 0V5v10Z"/>
    </Icon>
  );
});

IconMaterialLaptopWindows.displayName = 'AmauiIconMaterialLaptopWindows';

export default IconMaterialLaptopWindows;
