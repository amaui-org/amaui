import React from 'react';

import { Icon, IIcon } from '@amaui/ui-react';

const IconMaterialConveyorBelt = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ConveyorBelt'

      short_name='ConveyorBelt'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M5 21q-1.25 0-2.125-.875T2 18q0-1.25.875-2.125T5 15h14q1.25 0 2.125.875T22 18q0 1.25-.875 2.125T19 21Zm0-2h14q.425 0 .712-.288Q20 18.425 20 18t-.288-.712Q19.425 17 19 17H5q-.425 0-.713.288Q4 17.575 4 18t.287.712Q4.575 19 5 19Zm4-6V3h10v10Zm2-2h6V5h-6Zm-9-.05V9.025h4.925v1.925ZM12 8h4V6.025h-4ZM4 8h2.925V6.025H4Zm7 3V5v6Z"/>
    </Icon>
  );
});

IconMaterialConveyorBelt.displayName = 'AmauiIconMaterialConveyorBelt';

export default IconMaterialConveyorBelt;
