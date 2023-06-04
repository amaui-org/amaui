import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialComputerFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ComputerFilled'

      short_name='Computer'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M4 18q-.825 0-1.412-.587Q2 16.825 2 16V5q0-.825.588-1.413Q3.175 3 4 3h16q.825 0 1.413.587Q22 4.175 22 5v11q0 .825-.587 1.413Q20.825 18 20 18Zm-2 3q-.425 0-.712-.288Q1 20.425 1 20t.288-.712Q1.575 19 2 19h20q.425 0 .712.288.288.287.288.712t-.288.712Q22.425 21 22 21Z"/>
    </Icon>
  );
});

IconMaterialComputerFilled.displayName = 'AmauiIconMaterialComputerFilled';

export default IconMaterialComputerFilled;
