import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialLaptopChromebook = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LaptopChromebook'

      short_name='LaptopChromebook'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M1 20q-.425 0-.712-.288Q0 19.425 0 19t.288-.712Q.575 18 1 18h1V5q0-.825.588-1.413Q3.175 3 4 3h16q.825 0 1.413.587Q22 4.175 22 5v13h1q.425 0 .712.288.288.287.288.712t-.288.712Q23.425 20 23 20Zm9.5-2h3q.2 0 .35-.15.15-.15.15-.35 0-.2-.15-.35-.15-.15-.35-.15h-3q-.2 0-.35.15-.15.15-.15.35 0 .2.15.35.15.15.35.15ZM4 15h16V5H4Zm0 0V5v10Z"/>
    </Icon>
  );
});

IconMaterialLaptopChromebook.displayName = 'AmauiIconMaterialLaptopChromebook';

export default IconMaterialLaptopChromebook;
